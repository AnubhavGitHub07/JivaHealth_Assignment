export type UserRole = "Patient" | "Nurse";

export type UserStatus = "Active" | "Inactive";

export interface Address {
  id: number;
  type: "Home" | "Work";
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface FamilyMember {
  id: number;
  name: string;
  relationship: string;
  dob: string;
  phone: string;
}

export interface Order {
  id: number;
  title: string;
  date: string;
  amount: number;
  status: "Delivered" | "Pending";
}

export interface Payment {
  id: number;
  title: string;
  date: string;
  amount: number;
  status: "Completed";
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  joinedDate: string;
  lastActive: string;
  appointmentsCount: number;
  totalOrders: number;
  totalSpent: number;
  isPrime: boolean;
  addresses: Address[];
  familyMembers: FamilyMember[];
  orders: Order[];
  payments: Payment[];
}