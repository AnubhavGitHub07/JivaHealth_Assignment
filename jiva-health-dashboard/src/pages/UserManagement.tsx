import { useUserStore } from "../store/userStore";

const UserManagement = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        User Management
      </h1>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl p-4 shadow-sm border"
          >
            <h2 className="font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;