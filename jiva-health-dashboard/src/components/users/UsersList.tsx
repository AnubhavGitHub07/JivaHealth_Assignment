import { useUserStore } from "../../store/userStore";
import UserCard from "./UsersCard";

const UsersList = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div className="space-y-6">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default UsersList;