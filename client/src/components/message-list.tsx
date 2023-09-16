import { Message } from "@/types/messages";
import MessageCard from "./ui/message-card";

type MessageListProps = {
  messages: Message[];
};

function MessageList({ messages }: MessageListProps) {
  return (
    <section className="flex flex-col gap-2 overflow-y-auto pb-0 sm:p-2">
      {messages.length != 0 &&
        messages.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))}
    </section>
  );
}

export default MessageList;
