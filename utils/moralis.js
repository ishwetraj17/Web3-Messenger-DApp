import Moralis from "moralis";

const moralisAppId = "YOUR_APP_ID"; // Get this from the Moralis dashboard
const moralisServerUrl = "YOUR_SERVER_URL"; // Get this from the Moralis dashboard

Moralis.initialize(moralisAppId);
Moralis.serverURL = moralisServerUrl;

// Initialize Moralis functions here (e.g., saving messages, real-time events)
