import { create } from "zustand";
import { users } from "../data/user";
import type { User, FamilyMember } from "../types/user.types";

interface UserStore {
  users: User[];
  addFamilyMember: (userId: number, member: Omit<FamilyMember, "id">) => void;
  deleteFamilyMember: (userId: number, memberId: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users,
  addFamilyMember: (userId, member) =>
    set((state) => ({
      users: state.users.map((user) => {
        if (user.id !== userId) return user;
        const nextId =
          user.familyMembers.length > 0
            ? Math.max(...user.familyMembers.map((m) => m.id)) + 1
            : 1;
        return {
          ...user,
          familyMembers: [...user.familyMembers, { ...member, id: nextId }],
        };
      }),
    })),
  deleteFamilyMember: (userId, memberId) =>
    set((state) => ({
      users: state.users.map((user) => {
        if (user.id !== userId) return user;
        return {
          ...user,
          familyMembers: user.familyMembers.filter((m) => m.id !== memberId),
        };
      }),
    })),
}));