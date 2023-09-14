import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Message } from "@/types/messages";
import { sendMessageToDB } from "@/services/message";

type MessageFieldProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function MessageField({ setMessages }: MessageFieldProps) {
  const [text, setText] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await sendMessageToDB({ user: "", text });
    const { data, error } = response;

    if (error || !data) return;

    setText("");
    setMessages((prevState) => [...prevState, data]);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => handleText(e)}
        autoComplete="off"
        placeholder="Enter a message"
      />

      <Button className="w-36">Submit</Button>
    </form>
  );
}

export default MessageField;
