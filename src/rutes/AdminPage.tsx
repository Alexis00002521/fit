import React from 'react';
import '../styles/AdminPage.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Stamina Fitness</h2>
        <ul>
          <li>Admin Profile</li>
          <li>Registration</li>
          <li>Plan</li>
          <li>Payment</li>
          <li>Inventory</li>
          <li>View Members</li>
          <li>Coaches</li>
          <li>Report</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="welcome-banner">
          <h1>Welcome Banner, Martell</h1>
        </header>

        <section className="dashboard-sections">
          <div className="section calendar">
            <h3>Calendar</h3>
            <p>(Empty)</p>
          </div>

          <div className="section inventory">
            <h3>Inventory</h3>
            <p>(Empty)</p>
          </div>

          <div className="section coaches">
            <h3>Coaches</h3>
            <ul>
              <li>Juan Dela Cruz</li>
              <li>Peter</li>
              <li>Peter</li>
            </ul>
          </div>

          <div className="section sales">
            <h3>Sales</h3>
            <p>84%</p>
          </div>

          <div className="section members">
            <h3>Active Members</h3>
            <input type="text" placeholder="Search..." />
            <ul>
              <li>James Medalla</li>
              <li>Kent Charl Mabutas</li>
              <li>John Elmar Rodrigo</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
