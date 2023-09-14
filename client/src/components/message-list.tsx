import { Message } from "@/types/messages";

type MessageListProps = {
  messages: Message[];
};

function MessageList({ messages }: MessageListProps) {
  return (
    <section className="flex flex-1 flex-col gap-1">
      {messages.length != 0 &&
        messages.map((message) => (
          <div key={message._id} className="w-fit border p-1">
            <p>{message.user}</p>
            <p>{message.text}</p>
          </div>
        ))}
    </section>
  );
}

export default MessageList;
