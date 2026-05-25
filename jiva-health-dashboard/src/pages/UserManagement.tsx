import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

const UserManagement = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <Button>
          Add User
        </Button>
      </div>

      <Input placeholder="Search users..." />

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">
                Anubhav Dwivedi
              </h2>

              <p className="text-sm text-muted-foreground">
                anubhav@example.com
              </p>
            </div>

            <Badge>
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;