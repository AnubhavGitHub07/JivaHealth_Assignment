import type { User} from "../../types/user.types";
import {
  Badge,
} from "../ui/badge";
import {
  Button,
} from "../ui/button";
import {
  Card,
  CardContent,
} from "../ui/card";
import {
  Mail,
  Phone,
  Eye,
  Pencil,
} from "lucide-react";

interface UserCardProps {
  user: User;
}

const UserCard = ({
  user,
}: UserCardProps) => {
  return (
   <Card className="rounded-[28px] shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          
          {/* Left */}
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold shadow-sm">
              {user.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-semibold">
                  {user.name}
                </h2>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <Badge variant="secondary">
                    {user.role}
                  </Badge>

                  <Badge
                    className={
                      user.status === "Active"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }
                  >
                    {user.status}
                  </Badge>

                  <Badge variant="outline">
                    {user.isPrime
                      ? "Prime User"
                      : "Normal User"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {user.email}
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  {user.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            
            {/* Appointments */}
            <div>
              <p className="text-sm text-muted-foreground">
                Appointments
              </p>

            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2 tracking-tight">
                {user.appointmentsCount}
              </h3>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-xl">
                Upgrade to Prime
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                <Eye size={16} className="mr-2" />
                View
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                <Pencil
                  size={16}
                  className="mr-2"
                />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;