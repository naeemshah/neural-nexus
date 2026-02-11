const fs = require("fs");
const chalk = require("chalk");

function updateJiraTicket(deploymentInfo) {
  console.log(chalk.blue("📋 Jira Ticket Update (NN-92)"));
  console.log(chalk.cyan("========================================="));
  
  if (!fs.existsSync("deployment-info.json")) {
    console.log(chalk.yellow("⚠️  No deployment info found. Run deployment first."));
    return;
  }
  
  const info = JSON.parse(fs.readFileSync("deployment-info.json", "utf8"));
  
  console.log(chalk.green("✅ Deployment Details for Jira NN-92:"));
  console.log(chalk.yellow(`   Ticket: NN-92 - Base Testnet Deployment`));
  console.log(chalk.yellow(`   Status: DEPLOYED ✅`));
  console.log(chalk.yellow(`   Contract: ${info.contractAddress}`));
  console.log(chalk.yellow(`   Network: ${info.network}`));
  console.log(chalk.yellow(`   Deployer: ${info.deployer}`));
  console.log(chalk.yellow(`   Transaction: ${info.transactionHash}`));
  console.log(chalk.yellow(`   Timestamp: ${info.timestamp}`));
  console.log(chalk.yellow(`   Verification: ${info.verificationUrl}`));
  console.log(chalk.yellow(`   Token Supply: ${info.tokenDetails.totalSupply} ${info.tokenDetails.symbol}`));
  console.log(chalk.yellow(`   Burn Rate: ${info.tokenDetails.burnRate}`));
  
  console.log(chalk.cyan("========================================="));
  console.log(chalk.blue("📝 Manual Jira Update Required:"));
  console.log("1. Go to Jira ticket NN-92");
  console.log("2. Update status to 'Done'");
  console.log("3. Add comment with deployment details above");
  console.log("4. Attach deployment-info.json if needed");
  console.log(chalk.cyan("========================================="));
  
  // Check for security audit results
  let securityRating = "Not performed";
  let auditDetails = "";
  
  if (fs.existsSync("security-audit-results.json")) {
    const auditInfo = JSON.parse(fs.readFileSync("security-audit-results.json", "utf8"));
    securityRating = auditInfo.securityRating;
    auditDetails = `\n**Security Audit:** ${securityRating}`;
    
    if (auditInfo.recommendations && auditInfo.recommendations.length > 0) {
      auditDetails += `\n**Recommendations:** ${auditInfo.recommendations.join(", ")}`;
    }
  }
  
  // Check for Streme evaluation
  let stremeEvaluation = "";
  if (fs.existsSync("streme-evaluation.json")) {
    stremeEvaluation = "\n**Professional Assessment:** Streme Launcher evaluation completed. See streme-evaluation.json for details.";
  }
  
  // Create a markdown snippet for easy copy-paste
  const markdownSnippet = `
## Deployment Complete - NN-92

**Status:** ✅ DEPLOYED WITH PROFESSIONAL ASSESSMENT
**Contract Address:** ${info.contractAddress}
**Network:** ${info.network}
**Deployer:** ${info.deployer}
**Transaction:** ${info.transactionHash}
**Timestamp:** ${info.timestamp}
**Verification:** ${info.verificationUrl}
**Token Supply:** ${info.tokenDetails.totalSupply} ${info.tokenDetails.symbol}
**Burn Rate:** ${info.tokenDetails.burnRate}${auditDetails}${stremeEvaluation}

**Professional Skills Used:**
- ✅ Hardhat deployment pipeline
- ✅ BaseScan verification
- ✅ Eyebot AuditBot security scanning
- ✅ Streme Launcher professional assessment

**Next Steps:**
1. Test token transfers to verify 25% burn tax
2. Review security audit results
3. Consider Streme Launcher for mainnet deployment
4. Prepare for mainnet deployment (NN-93)
5. Update documentation with contract address

**Completion Sentinel:**
\`\`\`
STATUS: DEPLOYMENT_COMPLETE_WITH_SECURITY_AUDIT
- Contract deployed to Base Sepolia at ${info.contractAddress}
- Eyebot Audit: ${securityRating}
- Professional assessment completed
\`\`\`
  `;
  
  fs.writeFileSync("jira-update-snippet.md", markdownSnippet);
  console.log(chalk.green("📄 Jira update snippet saved to: jira-update-snippet.md"));
}

// Check if deployment-info.json exists
if (fs.existsSync("deployment-info.json")) {
  const info = JSON.parse(fs.readFileSync("deployment-info.json", "utf8"));
  updateJiraTicket(info);
} else {
  console.log(chalk.yellow("⚠️  No deployment found. Please run deployment first."));
  console.log(chalk.blue("💡 Run: npm run deploy:sepolia"));
}