import { Message } from "@/types/messages";
import MessageCard from "./ui/message-card";

type MessageListProps = {
  messages: Message[];
};

function MessageList({ messages }: MessageListProps) {
  return (
    <section className="flex flex-1 flex-col gap-2 p-4">
      {messages.length != 0 &&
        messages.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))}
    </section>
  );
}

export default MessageList;
