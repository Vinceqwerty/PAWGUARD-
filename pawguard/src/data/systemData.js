export const systemName = "PAWGUARD";
export const systemTagline = "Smart Pet Safety & Monitoring System";
export const currentYear = new Date().getFullYear();

export const dashboardCards = [
  {
    id: 1,
    title: "Pets Registered",
    value: 12,
    status: "active",
  },
  {
    id: 2,
    title: "Active Trackers",
    value: 8,
    status: "active",
  },
  {
    id: 3,
    title: "Alerts Today",
    value: 3,
    status: "warning",
  },
  {
    id: 4,
    title: "Lost Reports",
    value: 1,
    status: "critical",
  },
];

export const navLinks = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "My Pets", href: "#pets" },
  { label: "Alerts", href: "#alerts" },
  { label: "Settings", href: "#settings" },
];