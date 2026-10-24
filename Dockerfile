ARG NODE_VERSION=26-alpine

# Dependencies stage
FROM node:${NODE_VERSION} AS dependencies 

WORKDIR /app 

COPY package.json package-lock.json ./

RUN npm ci

# Builder stage
FROM dependencies AS builder 

WORKDIR /app

COPY . . 

ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN npm run build

# Runner stage
FROM node:${NODE_VERSION} AS runner 

WORKDIR /app 

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

RUN chown node:node /app

USER node

EXPOSE 3000

CMD ["node", "server.js"]