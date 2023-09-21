import { useEffect, useRef } from "react";
import useMessages from "@/stores/messages";
import MessageCard from "./ui/message-card";

function MessageList() {
  const { messages } = useMessages();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  return (
    <section className="flex flex-1 flex-col gap-1 overflow-y-auto pb-0">
      {messages.length != 0 &&
        messages.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))}

      <div ref={ref} />
    </section>
  );
}

export default MessageList;
