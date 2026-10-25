# Quimera Laboratory — Official Organization Hub

> Entry point and public static landing for **[Quimera Laboratory](https://github.com/Quimera-Laboratory)**.

Deployed via **GitHub Pages** with global Anycast CDN, automated SSL/TLS certificates, and automated CI/CD via GitHub Actions.

---

## 🌐 Live URL
- **Production URL:** [https://quimera-laboratory.github.io](https://quimera-laboratory.github.io)

---

## ⚡ Key Advantages

1. **Zero Cost & Automatic SSL/TLS:**
   - Free global CDN hosting backed by GitHub / Fastly Anycast.
   - Automatic certificate provisioning and renewal (Let's Encrypt / DigiCert).

2. **Native Custom Domain Support:**
   - Attach any custom domain (e.g., `quimera.dev`, `quimeralabs.io`) simply by creating a `CNAME` file or configuring it in the repository Settings.
   - Enforce HTTPS with one click.

3. **Automated CI/CD Pipeline:**
   - Direct static file deployment from the `main` branch.
   - GitHub Actions workflow (`.github/workflows/deploy.yml`) is preconfigured to support compiling static site generators (Astro, Vite, Hugo, Next.js static export) if migrated later.

---

## 📁 Project Structure

```text
Quimera-Laboratory.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages CI/CD workflow
├── index.html              # Quimera Laboratory Landing & Showcase
└── README.md               # Repository documentation
```

---

## 🚀 How to Add a Custom Domain

1. In your DNS provider (Cloudflare, Namecheap, Route53, etc.), configure:
   - **Apex domain (`quimera.dev`):**
     - A records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - **Subdomain (`www.quimera.dev` or `docs.quimera.dev`):**
     - CNAME record pointing to `quimera-laboratory.github.io`.
2. Add a `CNAME` file in the root of this repository containing your domain name, or configure it via GitHub repository settings under **Settings > Pages > Custom domain**.

---

## 🧪 Quimera Ecosystem Projects

- **[kineplex](https://github.com/Quimera-Laboratory/kineplex)**: Low-Latency Kinetic Stream Multiplexer & Distributed Media Pipeline Engine.
