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

const menuItems = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Organization",
        icon: Building2,
    },
    {
        label: "User Management",
        icon: Users,
        active: true,
    },
    {
        label: "Services",
        icon: BriefcaseMedical,
    },
    {
        label: "Consultation",
        icon: Stethoscope,
    },
    {
        label: "Lab Test Booking",
        icon: FlaskConical,
    },
    {
        label: "Medicine Orders",
        icon: Pill,
    },
    {
        label: "Ambulance Booking",
        icon: Ambulance,
    },
    {
        label: "Vendor & Partners",
        icon: Handshake,
    },
    {
        label: "Report",
        icon: FileText,
    },
    {
        label: "User Access",
        icon: ShieldCheck,
    },
    {
        label: "Settings",
        icon: Settings,
    },
];

const Sidebar = () => {
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

                        return (
                            <button
                                key={item.label}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-medium

${item.active
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