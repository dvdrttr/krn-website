# Keystone Remote Notary (KRN) — Official Production Website

Official web repository for **keystoneremotenotary.com**.

## Deployment Instructions

### Option 1: Cloudflare Pages (Recommended — 2 Minutes)
1. Push this repository to GitHub (e.g. `github.com/dvdrttr/keystone-remote-notary`).
2. Log into **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select this repository.
4. Build settings:
   - Framework preset: `None`
   - Build command: *(leave blank)*
   - Build output directory: `/` (or root)
5. Click **Save and Deploy**.
6. Under **Custom domains**, add `keystoneremotenotary.com` and `www.keystoneremotenotary.com`. (Since DNS is already hosted on Cloudflare nameservers `khloe.ns.cloudflare.com` and `newt.ns.cloudflare.com`, Cloudflare will configure the DNS CNAME records automatically with 1-click!).

### Option 2: Cloudflare Email Routing
1. In Cloudflare Dashboard, go to your domain **keystoneremotenotary.com** -> **Email Routing**.
2. Add custom address: `notary@keystoneremotenotary.com` -> forward to `dvdrttr@gmail.com`.
