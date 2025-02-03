import { useEffect, useState } from "react";
import { getAvatar } from "../utils/avatar";

export default function Profile({ account }) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (account) {
      setAvatar(getAvatar(account));
    }
  }, [account]);

  return (
    <div className="text-center mt-5">
      <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-lg font-bold mt-2">User Profile</h2>
      <p className="text-sm text-gray-600">Address: {account}</p>
    </div>
  );
}
