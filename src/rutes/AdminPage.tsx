import React, { useState } from 'react';
import '../styles/AdminPage.css';
import Dashboard from './dashboard';
import ViewMembers from './ViewMembers';

const AdminPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const renderContent = () => {
    switch (selectedOption) {
      case 'dashboard':
        return <Dashboard />;
      case 'members':
        return <ViewMembers />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src='/dashImg/PersonCircle.png' alt="ImgPerson" />
          <h3>Administrator Name</h3>
          <h4>juan.delacruz@gmail.com</h4>
        </div>
        <ul>
          <li 
            className={`sidebar-item ${selectedOption === 'dashboard' ? 'active' : ''}`}
            onClick={() => setSelectedOption('dashboard')}
          >
            <img src='/dashImg/Dashboard.png' alt="home" /> Dashboard
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedOption('profile')}
          >
            <img src='/dashImg/Home.png' alt="home" /> Admin Profile
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'registration' ? 'active' : ''}`}
            onClick={() => setSelectedOption('registration')}
          >
            <img src='/dashImg/Edit.png' alt="Registration" /> Registration
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'plan' ? 'active' : ''}`}
            onClick={() => setSelectedOption('plan')}
          >
            <img src='/dashImg/JournalCheck.png' alt="Plan" /> Plan
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'payment' ? 'active' : ''}`}
            onClick={() => setSelectedOption('payment')}
          >
            <img src='/dashImg/Payment.png' alt="Payment" /> Payment
          </li>  
          <li 
            className={`sidebar-item ${selectedOption === 'inventory' ? 'active' : ''}`}
            onClick={() => setSelectedOption('inventory')}
          >
            <img src='/dashImg/inventory.png' alt="Inventory" /> Inventory
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'members' ? 'active' : ''}`}
            onClick={() => setSelectedOption('members')}
          >
            <img src='/dashImg/People.png' alt="ViewMembers" /> View Members
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'coaches' ? 'active' : ''}`}
            onClick={() => setSelectedOption('coaches')}
          >
            <img src='/dashImg/Coaches.png' alt="Coaches" /> Coaches
          </li>
          <li 
            className={`sidebar-item ${selectedOption === 'report' ? 'active' : ''}`}
            onClick={() => setSelectedOption('report')}
          >
            <img src='/dashImg/Book.png' alt="Report" /> Report
          </li>
        </ul>
      </aside>

      {renderContent()}
    </div>
  );
};

export default AdminPage;
