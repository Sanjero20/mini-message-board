import { FormEvent, useEffect, useState } from "react";
import { Message } from "./types/messages";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState("Anonymous");
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("http://localhost:5000/");
      const messages = await response.json();
      setMessages([...messages]);
    }

    fetchMessages();
  }, []);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        user,
      }),
    });

    setText("");
  };

  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold">Mini message board</h1>

      <form onSubmit={(e) => sendMessage(e)}>
        <label htmlFor="input-message">Message</label>
        <input
          type="text"
          id="input-message"
          className="rounded border border-black p-2"
          placeholder="Enter a message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <button className="bg-sky-400 px-6 py-2">Submit</button>
      </form>

      <section>
        {messages.length != 0 &&
          messages.map((message) => (
            <div key={message._id}>{message.text}</div>
          ))}
      </section>
    </div>
  );
}

export default App;
