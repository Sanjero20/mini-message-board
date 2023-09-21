import { Message } from "@/types/messages";
import { create } from "zustand";

type MessageState = {
  messages: Message[];
};

type MessageAction = {
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
};

const useMessages = create<MessageState & MessageAction>((set, get) => ({
  messages: [],

  setMessages: (messages) => set({ messages }),

  addMessage: (message) =>
    set(() => {
      const prevMessages = get().messages;
      return { messages: [...prevMessages, message] };
    }),
}));

export default useMessages;
