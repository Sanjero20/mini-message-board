import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessageToDB } from "@/services/message";
import useMessages from "@/stores/messages";
import useUsername from "@/stores/user";

function MessageField() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { addMessage } = useMessages();
  const { username } = useUsername();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    const response = await sendMessageToDB({ user: username, text });
    const { data, error } = response;

    if (error || !data) return;

    setText("");
    setIsSending(false);
    addMessage(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2 p-2 pb-1">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
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
