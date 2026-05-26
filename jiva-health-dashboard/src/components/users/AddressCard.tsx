import type { User } from "../../types/user.types";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface AddressCardProps {
  user: User;
}

const AddressCard = ({
  user,
}: AddressCardProps) => {
  const defaultAddress =
    user.addresses.find(
      (address) => address.isDefault
    );

  if (!defaultAddress) return null;

  return (
    <Card className="rounded-[32px] border border-slate-200 shadow-sm">
      <CardContent className="p-8">
        
        <div className="flex items-center justify-between mb-8">
          
          <h2 className="text-2xl font-bold tracking-tight">
            Address
          </h2>

          <Badge variant="secondary">
            {defaultAddress.type}
          </Badge>
        </div>

        <div className="space-y-3 text-slate-600">
          
          <p>
            {defaultAddress.addressLine}
          </p>

          <p>
            {defaultAddress.city},{" "}
            {defaultAddress.state}
          </p>

          <p>
            {defaultAddress.pincode}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressCard;