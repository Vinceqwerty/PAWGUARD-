import { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import Button from "../components/Button";
import {
  systemName,
  dashboardCards,
  navLinks,
  currentYear,
} from "../data/systemData";
import "../styles/dashboard.css";

function Dashboard({ onLogout }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [alerts, setAlerts] = useState([
    "Tracker #3 battery low",
    "Buddy left safe zone at 2:14 PM",
    "New pet registration pending",
  ]);

  function handleViewDetails(card) {
    setSelectedCard(card);
  }

  function handleDismissAlert(index) {
    setAlerts(alerts.filter((_, i) => i !== index));
  }

  function handleCloseDetails() {
    setSelectedCard(null);
  }

  return (
    <div className="dashboard-page">
      <Navbar brandName={systemName} links={navLinks} onLogout={onLogout} />

      <main className="dashboard-main">
        <section className="dashboard-welcome">
          <h2>Welcome back! </h2>
          <p>Here's what's happening with your pets today.</p>
        </section>

        {/* Dashboard Cards Grid */}
        <section className="dashboard-grid">
          {dashboardCards.map((card) => (
            <DashboardCard
              key={card.id}
              title={card.title}
              value={card.value}
              icon={card.icon}
              status={card.status}
              onViewDetails={() => handleViewDetails(card)}
            />
          ))}
        </section>

        {/* Detail Panel - Task 3 interaction */}
        {selectedCard && (
          <section className="detail-panel">
            <div className="detail-content">
              <h3>
                {selectedCard.icon} {selectedCard.title}
              </h3>
              <p className="detail-value">{selectedCard.value}</p>
              <p>Status: {selectedCard.status}</p>
              <Button
                label="Close"
                type="secondary"
                onClick={handleCloseDetails}
              />
            </div>
          </section>
        )}

        {/* Alerts Section - Task 3 interaction */}
        <section className="alerts-section">
          <h3> Recent Alerts ({alerts.length})</h3>
          {alerts.length === 0 ? (
            <p className="no-alerts">No alerts. All clear! </p>
          ) : (
            <ul className="alerts-list">
              {alerts.map((alert, index) => (
                <li key={index} className="alert-item">
                  <span>{alert}</span>
                  <button
                    className="dismiss-btn"
                    onClick={() => handleDismissAlert(index)}
                  >
                    Dismiss ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>
          &copy; {currentYear} {systemName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;