export const getAvatar = (account) => {
    // Simple random avatar generation based on the user's address
    return `https://api.dicebear.com/6.x/identicon/png?seed=${account}`;
  };
  