import { useEffect, useState } from "react";
import { Message } from "@/types/messages";
import { getAllMessages } from "@/services/message";

function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messages = await getAllMessages();
      setMessages(messages);
    }

    fetchMessages();
  }, []);

  return (
    <section>
      {messages.length != 0 &&
        messages.map((message) => <div key={message._id}>{message.text}</div>)}
    </section>
  );
}

export default MessageList;
