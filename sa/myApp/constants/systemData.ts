export const systemName = "Pawguard";
export const systemTagline = "Protecting Your Furry Friends";
export const currentYear = new Date().getFullYear();

export interface DashboardItem {
  id: number;
  title: string;
  value: string;
  icon: string;
  status: "active" | "warning" | "critical";
}

export const dashboardData = {
  stats: [
    { id: 1, title: "Active Alerts", value: "12", icon: "alert", status: "critical" as const },
    { id: 2, title: "Monitored Pets", value: "156", icon: "pets", status: "active" as const },
    { id: 3, title: "Pending Checks", value: "8", icon: "pending", status: "warning" as const },
    { id: 4, title: "Resolved Cases", value: "342", icon: "check", status: "active" as const },
  ],
};