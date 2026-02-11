#!/bin/bash

# Deployment monitoring script
# Checks for contract deployment every 30 seconds

echo "🔍 Starting deployment monitor for NAE Token..."
echo "📊 Monitoring directory: $(pwd)"
echo "⏱️  Check interval: 30 seconds"
echo "========================================="

while true; do
    # Check for deployment-info.json
    if [ -f "deployment-info.json" ]; then
        echo "✅ DEPLOYMENT DETECTED!"
        echo "========================================="
        
        # Read deployment info
        CONTRACT_ADDRESS=$(jq -r '.contractAddress' deployment-info.json 2>/dev/null || echo "ERROR")
        
        if [ "$CONTRACT_ADDRESS" != "ERROR" ] && [ "$CONTRACT_ADDRESS" != "null" ]; then
            echo "📄 Contract Address: $CONTRACT_ADDRESS"
            echo "🌐 Network: Base Sepolia"
            echo "⏰ Deployment time: $(date)"
            echo "========================================="
            echo "🚀 Starting security audit..."
            echo "========================================="
            
            # Run security audit
            npm run security:audit
            
            echo "========================================="
            echo "🎉 Security audit completed!"
            echo "📋 Results saved to: security-audit-results.json"
            echo "📊 Check Jira NN-92 for updates"
            
            # Exit monitoring loop
            break
        else
            echo "⚠️  Found deployment-info.json but couldn't read contract address"
        fi
    else
        echo "⏳ Waiting for deployment... $(date)"
    fi
    
    # Wait 30 seconds before checking again
    sleep 30
done