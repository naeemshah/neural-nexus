
import { ethers } from 'ethers';

export async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            console.log("Connected account:", accounts[0]);
            return { provider, signer, account: accounts[0] };
        } catch (error) {
            console.error("User denied account access or error occurred:", error);
            throw error;
        }
    } else {
        console.error("Please install MetaMask!");
        throw new Error("No ethereum provider found");
    }
}

export function setupRealTimeVisualization(provider, contractAddress, abi) {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    
    // Example: Listen for all events in real-time
    contract.on("*", (event) => {
        console.log("Real-time Event Detected:", event);
        // Dispatch to UI visualization logic here
    });

    return contract;
}
