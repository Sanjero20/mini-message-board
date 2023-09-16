import { Message } from "@/types/messages";
import parseISODate from "@/utils/dateParser";

type MessageCardProps = {
  message: Message;
};

function MessageCard({ message }: MessageCardProps) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <strong>{message.user}</strong>
        <em className="text-sm text-slate-500">
          {parseISODate(message.added)}
        </em>
      </div>

      <p>{message.text}</p>
    </div>
  );
}

export default MessageCard;
