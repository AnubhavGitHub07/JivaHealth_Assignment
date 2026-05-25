import { create } from "zustand";
import { users } from "../data/user";
import type { User } from "../types/user.types";

interface UserStore {
  users: User[];
}

export const useUserStore = create<UserStore>(() => ({
  users,
}));