export default function Header({ account, onDisconnect }) {
    return (
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Web3 Messenger</h1>
        {account && (
          <button onClick={onDisconnect} className="bg-red-500 text-white p-2">
            Disconnect
          </button>
        )}
      </header>
    );
  }
  