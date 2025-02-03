import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Profile from "../components/Profile";
import { getAvatar } from "../utils/avatar";
import { getAccount, connectWallet, disconnectWallet } from "../utils/eth";

function Home() {
  const [account, setAccount] = useState(null);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (account) {
      setAvatar(getAvatar(account));
    }
  }, [account]);

  return (
    <div className="container mx-auto p-5">
      <Header account={account} onDisconnect={disconnectWallet} />
      {!account ? (
        <button onClick={connectWallet} className="bg-blue-500 text-white p-2 mt-5">
          Connect MetaMask
        </button>
      ) : (
        <div className="mt-5">
          <Profile account={account} />
          <Chat userAddress={account} />
        </div>
      )}
    </div>
  );
}

export default Home;
