import { ChangeEvent, FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Message } from "@/types/messages";
import { sendMessageToDB } from "@/services/message";

type MessageFieldProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function MessageField({ setMessages }: MessageFieldProps) {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    const response = await sendMessageToDB({ user: "Anonymous", text });
    const { data, error } = response;

    if (error || !data) return;

    setText("");
    setIsSending(false);
    setMessages((prevState) => [...prevState, data]);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2 px-2 pb-1">
      <Input
        type="text"
        value={text}
        onChange={(e) => handleText(e)}
        autoComplete="off"
        placeholder="Enter a message"
      />

      <Button className="w-36" disabled={text === "" || isSending}>
        {isSending ? (
          <>
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>Submit</>
        )}
      </Button>
    </form>
  );
}

export default MessageField;
