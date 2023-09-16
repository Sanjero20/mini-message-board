import { useState, useEffect } from "react";
import MessageList from "./components/message-list";
import MessageField from "./components/message-field";
import { Separator } from "./components/ui/separator";
import { Message } from "./types/messages";
import { getAllMessages } from "@/services/message";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  // const [user, setUser] = useState("Anonymous");

  useEffect(() => {
    async function fetchMessages() {
      const messages = await getAllMessages();
      setMessages(messages);
    }

    fetchMessages();
  }, []);

  return (
    <div className="h-screen bg-background p-4">
      <main className="container flex h-full flex-col gap-1 rounded-md border bg-white p-2 shadow">
        <h1 className="mx-auto text-3xl font-bold">MINI MESSAGE BOARD</h1>
        <Separator />

        <div className="flex h-full flex-col justify-between gap-2 overflow-hidden">
          <MessageList messages={messages} />
          <Separator />
          <MessageField setMessages={setMessages} />
        </div>
      </main>
    </div>
  );
}

export default App;
