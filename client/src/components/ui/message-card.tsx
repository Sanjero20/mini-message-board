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
        <p className="text-xs text-slate-500 sm:text-sm">
          {parseISODate(message.added)}
        </p>
      </div>

      <p>{message.text}</p>
    </div>
  );
}

export default MessageCard;
