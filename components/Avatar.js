export default function Avatar({ address }) {
    const avatarUrl = `https://api.dicebear.com/6.x/identicon/png?seed=${address}`;
    
    return <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full" />;
  }
  