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
ARG AWS_ACCESS_KEY
ARG AWS_SECRET_KEY
ARG S3_BUCKET
ARG AWS_REGION
ARG AWS_USER
ARG FROM_EMAIL
ARG TO_EMAIL

ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV AWS_ACCESS_KEY=${AWS_ACCESS_KEY}
ENV AWS_SECRET_KEY=${AWS_SECRET_KEY}
ENV S3_BUCKET=${S3_BUCKET}
ENV AWS_REGION=${AWS_REGION}
ENV AWS_USER=${AWS_USER}
ENV FROM_EMAIL=${FROM_EMAIL}
ENV TO_EMAIL=${TO_EMAIL}

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