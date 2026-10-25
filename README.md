This is [Afro Kiiom Ltd website](https://kiiom.com) official website


## EC2 deployment behind Nginx

The GitHub Actions workflow builds the Docker image and deploys it over SSH on
pushes to `main` or manual runs from `main`. Docker publishes the application at
`127.0.0.1:3000`, while the installed host Nginx serves public traffic on 80/443.
The workflow checks the published upstream and restores the previous container
if startup fails. Container replacement has a brief interruption.

Configure repository secrets `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`, and
`EC2_KNOWN_HOSTS` (a verified SSH known_hosts entry). The EC2 SSH user needs
Docker access, Bash, and curl; the instance must be x86-64 for the current image.
Optional application settings can be stored in `/etc/kiiom-website.env`, readable
by that user. Set repository variable `NEXT_PUBLIC_SITE_URL` to the public site
URL (for example, `https://kiiom.com`) before building.

Use [deploy/nginx.conf](deploy/nginx.conf) as the Nginx configuration example.
If your site already has an HTTPS server block, merge the example's `location /`
settings into that block, retaining its certificates and HTTP-to-HTTPS redirect.
Do not add a duplicate server block for an already configured domain.
For a new HTTP site, copy the example to a directory included by your Nginx
configuration, commonly `/etc/nginx/conf.d/kiiom-website.conf`.
Validate and reload after editing the EC2 configuration:

```bash
sudo nginx -t && sudo systemctl reload nginx
curl --fail http://127.0.0.1:3000/
```

If repository variable `EC2_HOST_PORT` was previously set to `80`, remove it or
change it to `3000`. For any other port, update Nginx's `proxy_pass` to match.
Allow public HTTP/HTTPS in the EC2 security group and SSH from your deployment
runner; the application port does not need a public inbound rule. Deployments
update only the container, so Nginx does not need reloading on each release.

<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
