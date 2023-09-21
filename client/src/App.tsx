import { useEffect } from "react";
import Header from "./components/header";
import MessageList from "./components/message-list";
import MessageField from "./components/message-field";
import { Separator } from "./components/ui/separator";
import { getAllMessages } from "@/services/message";
import useMessages from "./stores/messages";

function App() {
  const { setMessages } = useMessages();

  useEffect(() => {
    async function fetchMessages() {
      const messages = await getAllMessages();
      setMessages(messages);
    }

    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen bg-background p-4">
      <main className="container flex h-full flex-col gap-1 rounded-md border bg-white p-2 shadow">
        <Header />

        <Separator />

        <div className="flex h-full flex-col justify-between gap-2 overflow-hidden">
          <MessageList />
          <Separator />
          <MessageField />
        </div>
      </main>
    </div>
  );
}

export default App;
