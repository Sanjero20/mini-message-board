import { sendMessageToDB } from "@/services/message";
import { ChangeEvent, FormEvent, useState } from "react";

function MessageField() {
  const [text, setText] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendMessageToDB({ user: "", text });
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="input-message">Message</label>
      <input
        type="text"
        id="input-message"
        className="rounded border border-black p-2"
        value={text}
        onChange={(e) => handleText(e)}
        autoComplete="off"
        placeholder="Enter a message"
      />

      <button className="bg-sky-400 px-6 py-2">Submit</button>
    </form>
  );
}

export default MessageField;
