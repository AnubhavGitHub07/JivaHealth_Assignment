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

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

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

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => {
        if (path === "/") {
            return (
                location.pathname === "/" ||
                location.pathname.startsWith("/users")
            );
        }
        return location.pathname.startsWith(path);
    };

    return (
        <aside className="hidden lg:flex w-[270px] bg-white border-r border-slate-200 min-h-screen flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="h-20 flex items-center px-8 border-b border-slate-200">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <button
                                key={item.label}
                                onClick={() =>
                                    navigate(item.path)
                                }
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-medium
${
    active
        ? "bg-emerald-100 text-emerald-700 shadow-sm"
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

            {/* Admin Profile */}
            <div className="border-t p-4">
                <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-semibold">
                        AD
                    </div>

                    <div>
                        <h3 className="font-medium text-sm">
                            Admin User
                        </h3>

                        <p className="text-xs text-muted-foreground">
                            admin@healthcare.com
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;