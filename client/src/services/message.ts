import { Message, NewMessage } from "@/types/messages";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

// Retrieve all messages
export async function getAllMessages(): Promise<Message[]> {
  const response = await fetch(baseURL + "/");
  return await response.json();
}

export async function sendMessageToDB(data: NewMessage) {
  const response = await fetch("http://localhost:5000/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
