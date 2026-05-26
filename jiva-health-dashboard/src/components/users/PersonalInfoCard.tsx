import type { User } from "../../types/user.types";
import {
  Card,
  CardContent,
} from "../ui/card";

interface PersonalInfoCardProps {
  user: User;
}

const PersonalInfoCard = ({
  user,
}: PersonalInfoCardProps) => {
  const infoItems = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Phone",
      value: user.phone,
    },
    {
      label: "Joined Date",
      value: user.joinedDate,
    },
    {
      label: "Last Active",
      value: user.lastActive,
    },
  ];

  return (
    <Card className="rounded-[32px] border border-slate-200 shadow-sm">
      <CardContent className="p-8">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Personal Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="space-y-2"
            >
              <p className="text-sm text-slate-500">
                {item.label}
              </p>

              <h3 className="font-semibold text-lg">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoCard;