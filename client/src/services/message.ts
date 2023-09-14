import { Message, NewMessage, UploadResponse } from "@/types/messages";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

export async function getAllMessages(): Promise<Message[]> {
  const response = await fetch(baseURL + "/");
  return await response.json();
}

export async function sendMessageToDB(
  data: NewMessage,
): Promise<UploadResponse> {
  const response = await fetch(baseURL + "/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
