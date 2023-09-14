import { useState } from "react";

import MessageList from "./components/message-list";
import MessageField from "./components/message-field";

function App() {
  const [user, setUser] = useState("Anonymous");

  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold">Mini message board</h1>
      <MessageField />
      <MessageList />
    </div>
  );
}

export default App;
