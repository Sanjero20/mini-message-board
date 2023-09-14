export type Message = {
  _id: string;
  user: string;
  text: string;
  added: string;
};

export type NewMessage = {
  user: string;
  text: string;
};

export type UploadResponse = {
  error: boolean;
  data: Message | null;
};
