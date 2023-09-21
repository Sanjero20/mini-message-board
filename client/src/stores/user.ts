import { create } from "zustand";

type UserState = {
  username: string;
};

type UserAction = {
  setUsername: (str: string) => void;
};

const useUsername = create<UserState & UserAction>((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export default useUsername;
