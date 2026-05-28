import { create } from "zustand";
import { users } from "../data/user";
import type { User, FamilyMember, UserStatus } from "../types/user.types";

interface UserStore {
  users: User[];
  addUser: (newUser: Omit<User, "id" | "avatar" | "familyMembers" | "orders" | "payments" | "totalOrders" | "totalSpent" | "addresses" | "joinedDate" | "lastActive" | "appointmentsCount" | "isPrime"> & {
    addressLine: string;
    city: string;
    state: string;
    pincode: string;
    dob: string;
    gender: string;
    bloodGroup: string;
  }) => void;
  updateUserStatus: (userId: number, status: UserStatus) => void;
  addFamilyMember: (userId: number, member: Omit<FamilyMember, "id">) => void;
  deleteFamilyMember: (userId: number, memberId: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users,
  addUser: (newUser) =>
    set((state) => {
      const nextId =
        state.users.length > 0
          ? Math.max(...state.users.map((u) => u.id)) + 1
          : 1;
      
      const user: User = {
        id: nextId,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        avatar: `https://i.pravatar.cc/150?img=${(nextId % 70) + 1}`,
        role: newUser.role,
        status: newUser.status,
        joinedDate: new Date().toISOString().split("T")[0],
        lastActive: "Just joined",
        appointmentsCount: 0,
        totalOrders: 0,
        totalSpent: 0,
        isPrime: false,
        addresses: newUser.addressLine
          ? [
              {
                id: 1,
                type: "Home",
                addressLine: newUser.addressLine,
                city: newUser.city,
                state: newUser.state,
                pincode: newUser.pincode,
                isDefault: true,
              },
            ]
          : [],
        familyMembers: [],
        orders: [],
        payments: [],
        dob: newUser.dob,
        gender: newUser.gender,
        bloodGroup: newUser.bloodGroup,
      };
      
      return {
        users: [user, ...state.users], // Add new user to the top of the list
      };
    }),
  updateUserStatus: (userId, status) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, status } : user
      ),
    })),
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