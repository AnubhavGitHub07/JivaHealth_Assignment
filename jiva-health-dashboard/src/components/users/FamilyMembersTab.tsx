import type { User } from "../../types/user.types";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface FamilyMembersTabProps {
  user: User;
}

const FamilyMembersTab = ({
  user,
}: FamilyMembersTabProps) => {
  return (
    <div className="space-y-6">
      {user.familyMembers.map((member) => (
        <Card
          key={member.id}
          className="rounded-[28px] border border-slate-200 shadow-sm"
        >
          <CardContent className="p-6">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="flex items-center gap-5">
                
                <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                  {member.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    
                    <h3 className="text-xl font-semibold">
                      {member.name}
                    </h3>

                    <Badge variant="secondary">
                      {member.relationship}
                    </Badge>
                  </div>

                  <p className="text-slate-600 mt-3">
                    {member.phone}
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    {member.dob}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FamilyMembersTab;