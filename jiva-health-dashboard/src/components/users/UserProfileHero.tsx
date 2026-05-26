import type { User } from "../../types/user.types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface UserProfileHeroProps {
  user: User;
}

const UserProfileHero = ({
  user,
}: UserProfileHeroProps) => {
  return (
    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-6 md:p-8">
      
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
        
        {/* Left */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Avatar */}
          <div className="h-28 w-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-sm">
            {user.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          {/* User Info */}
          <div className="space-y-4">
            
            <div>
              <div className="flex flex-wrap items-center gap-3">
                
                <h1 className="text-3xl font-bold tracking-tight">
                  {user.name}
                </h1>

                <Badge
                  className={
                    user.status === "Active"
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }
                >
                  {user.status}
                </Badge>
              </div>

              <p className="text-slate-500 mt-2">
                User ID: #{user.id}
              </p>
            </div>

            {/* Badges */}
            <div className="flex gap-3 flex-wrap">
              
              <Badge variant="secondary">
                {user.role}
              </Badge>

              <Badge variant="outline">
                {user.isPrime
                  ? "Prime Member"
                  : "Regular Member"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-12 px-6">
            Upgrade to Prime
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl h-12 px-6"
          >
            {user.status === "Active"
              ? "Deactivate"
              : "Activate"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHero;