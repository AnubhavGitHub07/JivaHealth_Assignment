import type { User } from "../types/user.types";

export const users: User[] = [
  {
    id: 1,
    name: "Anubhav Dwivedi",
    email: "anubhav@example.com",
    phone: "+91 9876543210",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Patient",
    status: "Active",
    joinedDate: "2025-01-15",
    lastActive: "2 hours ago",
    appointmentsCount: 12,
    totalOrders: 8,
    totalSpent: 2400,
    isPrime: true,
    addresses: [
      {
        id: 1,
        type: "Home",
        addressLine: "123 Health Street",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        pincode: "201001",
        isDefault: true,
      },
    ],
    familyMembers: [
      {
        id: 1,
        name: "Aman Dwivedi",
        relationship: "Brother",
        dob: "2007-09-19",
        phone: "+91 9000000000",
      },
    ],

    orders: [
  {
    id: 1,
    title: "Paracetamol 500mg",
    date: "2026-03-28",
    amount: 250,
    status: "Delivered",
  },
  {
    id: 2,
    title: "Vitamin Capsules",
    date: "2026-04-01",
    amount: 400,
    status: "Pending",
  },
],

payments: [
  {
    id: 1,
    title: "Consultation Fee",
    date: "2026-03-28",
    amount: 150,
    status: "Completed",
  },
  {
    id: 2,
    title: "Lab Test",
    date: "2026-04-02",
    amount: 800,
    status: "Completed",
  },
],
  },
];