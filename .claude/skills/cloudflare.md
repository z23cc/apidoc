# Cloudflare Platform Skill

## Cloudflare Pages Deployment (Static Sites)

### Setup
```bash
npm create cloudflare@latest -- my-site --framework=astro
# or add to existing project:
npx wrangler pages project create <project-name>
```

### Authentication
```bash
npx wrangler whoami          # Check auth status
npx wrangler login           # Interactive OAuth (local)
# CI/CD: Set CLOUDFLARE_API_TOKEN env var
```

### Deploy Commands
```bash
npx wrangler pages deploy ./dist     # Deploy built assets
npx wrangler pages deployment list   # List deployments
```

### Configuration (wrangler.toml for Pages)
```toml
name = "my-site"
pages_build_output_dir = "./dist"
compatibility_date = "2024-12-01"
```

### Build Settings
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: Set via `NODE_VERSION` env var

### Custom Domains
```bash
npx wrangler pages project edit <project> --domain <domain>
```

### Preview Deployments
- Every branch push creates a preview URL
- Format: `<branch>.<project>.pages.dev`
