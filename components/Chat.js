import { useState, useEffect } from "react";

export default function Chat({ userAddress }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Load previous messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { sender: userAddress, content: message };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-gray-100 p-3 rounded-md h-64 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 mb-2 bg-white rounded-md">
            <strong>{msg.sender}</strong>: {msg.content}
          </div>
        ))}
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          className="border p-2 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
