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
  },
];