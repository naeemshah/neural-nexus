# Neural Nexus Restoration Guide (BOOT.md)

This file allows the project to be resumed instantly if the session is restarted.

## Current State
- **Project:** Neural Nexus ($NAE)
- **Phase:** Transitioning from Foundation to Refinement & Testing.
- **Repository:** git@github.com:naeemshah/neural-nexus.git
- **Dashboard:** `neural-nexus/team_dashboard.html`
- **Tunnel:** Cloudflare (using `neural-nexus/usr/bin/cloudflared`)

## Restoration Steps
1. **Initialize Workspace:**
   `ls neural-nexus` (Verify files exist).
2. **Resume Team:**
   - Spawn `dev` for Smart Contract/Web.
   - Spawn `qa` for Security/Audit.
   - Spawn `marketing` for Litepaper/Social.
3. **Restart Infrastructure:**
   - Run `python3 -m http.server 8080 --directory neural-nexus`
   - Run `cloudflared tunnel --url http://localhost:8080`
4. **Reference Docs:**
   - `PROJECT_PLAN.md`: Current roadmap.
   - `MEMORY.md`: Key decisions and user preferences.

## Active Milestones
- [ ] Base Testnet Deployment
- [ ] Litepaper v2 Branding
- [ ] Mobile UI Final Polish
