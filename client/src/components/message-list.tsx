import useMessages from "@/stores/messages";
import MessageCard from "./ui/message-card";

function MessageList() {
  const { messages } = useMessages();

  return (
    <section className="flex flex-1 flex-col gap-2 overflow-y-auto pb-0 sm:p-2">
      {messages.length != 0 &&
        messages.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))}
    </section>
  );
}

export default MessageList;
