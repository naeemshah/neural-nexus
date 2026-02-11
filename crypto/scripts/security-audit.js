const { exec } = require('child_process');
const fs = require('fs');
const chalk = require('chalk');

async function runSecurityAudit(contractAddress) {
  console.log(chalk.blue("🔐 Starting Professional Security Audit..."));
  console.log(chalk.cyan("========================================="));
  
  if (!contractAddress) {
    // Try to get from deployment-info.json
    if (fs.existsSync('deployment-info.json')) {
      const deploymentInfo = JSON.parse(fs.readFileSync('deployment-info.json', 'utf8'));
      contractAddress = deploymentInfo.contractAddress;
      console.log(chalk.yellow(`📄 Using contract from deployment: ${contractAddress}`));
    } else {
      console.log(chalk.red("❌ No contract address provided and no deployment info found."));
      console.log(chalk.yellow("💡 Usage: node scripts/security-audit.js <contract_address>"));
      console.log(chalk.yellow("💡 Or run deployment first: npm run deploy:sepolia"));
      process.exit(1);
    }
  }
  
  console.log(chalk.yellow(`📊 Contract to audit: ${contractAddress}`));
  console.log(chalk.cyan("========================================="));
  
  // Run Eyebot AuditBot scan
  console.log(chalk.blue("🔄 Running Eyebot AuditBot scan..."));
  
  return new Promise((resolve, reject) => {
    exec(`eyebot auditbot scan ${contractAddress}`, (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.red(`❌ AuditBot execution error: ${error.message}`));
        console.log(chalk.yellow("⚠️  Make sure Eyebot AuditBot skill is installed and available."));
        console.log(chalk.yellow("💡 Check: ls /data/.openclaw/workspace/skills/eyebot-auditbot/"));
        reject(error);
        return;
      }
      
      console.log(chalk.green("✅ AuditBot scan completed!"));
      console.log(chalk.cyan("========================================="));
      console.log(stdout);
      
      if (stderr) {
        console.log(chalk.yellow("⚠️  Warnings:"));
        console.log(stderr);
      }
      
      // Save audit results
      const auditResults = {
        contractAddress: contractAddress,
        auditTimestamp: new Date().toISOString(),
        scanOutput: stdout,
        warnings: stderr || null,
        recommendations: []
      };
      
      // Parse results for key findings
      const output = stdout.toLowerCase();
      if (output.includes('safe') || output.includes('🟢')) {
        auditResults.securityRating = '🟢 SAFE';
        auditResults.recommendations.push('Contract appears safe. Proceed with deployment.');
      } else if (output.includes('caution') || output.includes('🟡')) {
        auditResults.securityRating = '🟡 CAUTION';
        auditResults.recommendations.push('Review minor concerns before mainnet deployment.');
      } else if (output.includes('warning') || output.includes('🟠')) {
        auditResults.securityRating = '🟠 WARNING';
        auditResults.recommendations.push('Significant risks detected. Review and fix before proceeding.');
      } else if (output.includes('danger') || output.includes('🔴')) {
        auditResults.securityRating = '🔴 DANGER';
        auditResults.recommendations.push('Critical vulnerabilities detected. DO NOT DEPLOY TO MAINNET.');
      } else {
        auditResults.securityRating = '⚪ UNKNOWN';
        auditResults.recommendations.push('Manual review required. Run deep audit: eyebot auditbot audit <address> --deep');
      }
      
      // Save to file
      fs.writeFileSync(
        'security-audit-results.json',
        JSON.stringify(auditResults, null, 2)
      );
      
      console.log(chalk.green(`📄 Audit results saved to: security-audit-results.json`));
      console.log(chalk.cyan(`🔐 Security Rating: ${auditResults.securityRating}`));
      
      // Professional recommendations
      console.log(chalk.cyan("========================================="));
      console.log(chalk.blue("💼 PROFESSIONAL RECOMMENDATIONS"));
      console.log(chalk.cyan("========================================="));
      
      if (auditResults.securityRating.includes('🟢')) {
        console.log(chalk.green("✅ Security audit passed!"));
        console.log(chalk.yellow("💡 Consider professional enhancements:"));
        console.log(chalk.white("   1. Streme Launcher for staking/liquidity features"));
        console.log(chalk.white("   2. Multi-sig for contract ownership"));
        console.log(chalk.white("   3. Time-lock for critical functions"));
      } else if (auditResults.securityRating.includes('🟡')) {
        console.log(chalk.yellow("⚠️  Minor security concerns detected."));
        console.log(chalk.white("   Review findings and consider fixes before mainnet."));
      } else if (auditResults.securityRating.includes('🟠') || auditResults.securityRating.includes('🔴')) {
        console.log(chalk.red("🚨 SIGNIFICANT SECURITY ISSUES DETECTED!"));
        console.log(chalk.white("   DO NOT DEPLOY TO MAINNET WITHOUT FIXING."));
        console.log(chalk.white("   Consider professional audit services."));
      }
      
      console.log(chalk.cyan("========================================="));
      console.log(chalk.blue("📋 Next Steps:"));
      console.log(chalk.white("   1. Review full audit results above"));
      console.log(chalk.white("   2. Update Jira NN-92 with security rating"));
      console.log(chalk.white("   3. Consider Streme Launcher for professional features"));
      console.log(chalk.white("   4. Run deep audit if needed: eyebot auditbot audit <address> --deep"));
      console.log(chalk.cyan("========================================="));
      
      resolve(auditResults);
    });
  });
}

// Get contract address from command line or deployment info
const contractAddress = process.argv[2];

runSecurityAudit(contractAddress)
  .then(() => {
    console.log(chalk.green("🎉 Security audit process completed!"));
    process.exit(0);
  })
  .catch((error) => {
    console.error(chalk.red(`💥 Audit process failed: ${error.message}`));
    process.exit(1);
  });