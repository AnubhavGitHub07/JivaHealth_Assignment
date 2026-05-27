import {
  LayoutDashboard,
  Building2,
  Users,
  BriefcaseMedical,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Handshake,
  FileText,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Organization",
    icon: Building2,
    path: "/organization",
  },
  {
    label: "User Management",
    icon: Users,
    path: "/",
  },
  {
    label: "Services",
    icon: BriefcaseMedical,
    path: "/services",
  },
  {
    label: "Consultation",
    icon: Stethoscope,
    path: "/consultation",
  },
  {
    label: "Lab Test Booking",
    icon: FlaskConical,
    path: "/lab-test-booking",
  },
  {
    label: "Medicine Orders",
    icon: Pill,
    path: "/medicine-orders",
  },
  {
    label: "Ambulance Booking",
    icon: Ambulance,
    path: "/ambulance-booking",
  },
  {
    label: "Vendor & Partners",
    icon: Handshake,
    path: "/vendor-partners",
  },
  {
    label: "Report",
    icon: FileText,
    path: "/report",
  },
  {
    label: "User Access",
    icon: ShieldCheck,
    path: "/user-access",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

interface SidebarContentProps {
  onItemClick?: () => void;
}

const SidebarContent = ({ onItemClick }: SidebarContentProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") {
      return (
        location.pathname === "/" || location.pathname.startsWith("/users")
      );
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-[9px] border-b border-slate-100 shrink-0">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Menu */}
        <nav className="pt-4 pb-3 px-4 space-y-1 border-b border-slate-100 overflow-y-auto max-h-[calc(100vh-14rem)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] transition-all text-[14px] font-medium cursor-pointer
                  ${
                    active
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-100"
                  }
                `}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Profile */}
      <div className="mt-auto border-t border-slate-100 px-4 py-3 shrink-0 bg-white">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-semibold shrink-0">
            AD
          </div>

          <div className="min-w-0">
            <h3 className="font-medium text-sm text-slate-800 truncate">
              Admin User
            </h3>
            <p className="text-xs text-muted-foreground truncate">
              admin@healthcare.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
