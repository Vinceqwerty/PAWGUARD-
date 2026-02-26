import StatusIndicator from "./StatusIndicator";
import "../styles/dashboard.css";

function DashboardCard({ title, value, icon, status, onViewDetails }) {
  const statusLabels = {
    active: "Normal",
    warning: "Needs Attention",
    critical: "Critical",
  };

  return (
    <div className={`dashboard-card card-${status}`}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <StatusIndicator status={status} label={statusLabels[status]} />
      </div>
      <div className="card-body">
        <h3 className="card-value">{value}</h3>
        <p className="card-title">{title}</p>
      </div>
      <div className="card-footer">
        <button className="card-btn" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;