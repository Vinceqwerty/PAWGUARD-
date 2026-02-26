import "../styles/dashboard.css";

function StatusIndicator({ status, label }) {
  return (
    <span className={`status-indicator status-${status}`}>
      <span className="status-dot"></span>
      {label}
    </span>
  );
}

export default StatusIndicator;