import { ethers } from "ethers";

export const connectWallet = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const userAccount = await signer.getAddress();
    return userAccount;
  } else {
    alert("Please install MetaMask!");
    return null;
  }
};

export const disconnectWallet = () => {
  return null;
};

export const getAccount = () => {
  return window.ethereum ? window.ethereum.selectedAddress : null;
};
