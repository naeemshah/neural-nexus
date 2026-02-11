# RESTART_INSTRUCTIONS.md

## Neural Nexus Project - Restart Guide
**Project paused:** 2026-02-11 19:01 UTC
**Last commit:** 04c6b17c

## To Restart Project:

1. **Pull latest code:**
   ```bash
   git pull origin main
   ```

2. **Start agents manually:**
   ```bash
   # PM Agent (coordination)
   sessions_spawn task="Resume Neural Nexus project coordination. Check Jira Project NN for status, review blockers, and coordinate teams." label="PM Agent" model="deepseek/deepseek-chat"
   
   # Backend Dev Agent
   sessions_spawn task="Resume backend development. Check NAE_Token.sol status, verify tests, prepare for Base Sepolia deployment." label="Backend Dev" model="deepseek/deepseek-chat"
   
   # Frontend Dev Agent  
   sessions_spawn task="Resume frontend development. Check unified React app on port 3001, verify mobile responsiveness, integrate blog content." label="Frontend Dev" model="deepseek/deepseek-chat"
   ```

## Current Status (when paused):
- **Contract:** ✅ Ready for Base Sepolia deployment
- **Frontend:** ✅ Unified app running on port 3001
- **Jira:** ✅ Project NN working (50+ tickets)
- **Marketing:** ✅ Litepaper PDF ready, social media planned
- **Blockers:** Need ETH bridging, social accounts, pandoc install

## Jira Token:
- **Token:** [JIRA_TOKEN_REMOVED_FOR_SECURITY]
- **Endpoint:** /rest/api/3/search/jql
- **Auth:** Basic auth `base64(email:token)`

## GitHub:
- **Repo:** https://github.com/naeemshah/neural-nexus
- **Branch:** main
- **Last commit:** 04c6b17c
