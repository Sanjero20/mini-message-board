export type Message = {
  _id: string;
  user: string;
  text: string;
  added: Date;
};

export type NewMessage = {
  user: string;
  text: string;
};
