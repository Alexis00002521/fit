import React, { useState } from 'react';
import '../styles/AdminPage.css';

const Dashboard: React.FC = () => {
  const [bellActive, setBellActive] = useState(true);
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src='/public/dashImg/PersonCircle.png' alt="ImgPerson" />
          <h3>Administrator Name</h3>
          <h4>juan.delacruz@gmail.com</h4>
        </div>
        <ul>
          <li className='sidebar-item active'><img src='/public/dashImg/Dashboard.png' alt="home" /> Dashboard</li>
          <li className='sidebar-item ' ><img src='/public/dashImg/Home.png' alt="home" /> Admin Profile</li>
          <li className='sidebar-item'><img src='/public/dashImg/Edit.png' alt="Registration" /> Registration</li>
          <li className='sidebar-item'><img src='/public/dashImg/JournalCheck.png' alt="Plan" /> Plan</li>
          <li className='sidebar-item'><img src='/public/dashImg/Payment.png' alt="Payment" /> Payment</li>  
          <li className='sidebar-item'><img src='/public/dashImg/Inventory.png' alt="Inventory" /> Inventory</li>
          <li className='sidebar-item'><img src='/public/dashImg/People.png' alt="ViewMembers" /> View Members</li>
          <li className='sidebar-item'><img src='/public/dashImg/Coaches.png' alt="Coaches" /> Coaches</li>
          <li className='sidebar-item '><img src='/public/dashImg/Book.png' alt="Report" /> Report</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="main-scroll">
          <div className='main-header'>
            <div className='main-header-left'>
              <img className='main-logo' src='/public/MainLogo.png' alt="logo" />
              <span className='main-header-title'>STAMINA FITNESS</span>
            </div>
            <div className='main-header-right'>
              <span className='main-header-feedback'>Feedback</span>
              <img
                className='main-header-bell'
                src={bellActive ? '/public/dashImg/bell-solid.png' : '/public/dashImg/bell-outline.png'}
                alt="bell"
                onClick={() => setBellActive(!bellActive)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <header className="welcome-banner">
            <div className="welcome-banner-content">
              <div className="welcome-banner-text">
                <h2>Welcome Banner, <span className="welcome-banner-highlight">Martell</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <img className="welcome-banner-img" src="/public/dashImg/PersonCircle.png" alt="Elipse" />
            </div>
          </header>

          <section className="dashboard-sections">
            <div className="section calendar">
              <h3 className='txttitle'>Calendari</h3>
              <p className='txtx'>(Empty)</p>
            </div>

            <div className="section inventory">
              <h3>Inventory</h3>
              <p className='inventory'>(Empty)</p>
            </div>

            <div className="section coaches">
              <h3>Coaches</h3>
              <ul>
                <li><img src='/public/dashImg/PersonCircle.png' alt="ImgPerson" />  Juan Dela Cruz</li>
                <li><img src='/public/dashImg/PersonCircle.png' alt="ImgPerson" /> Peter</li>
                <li><img src='/public/dashImg/PersonCircle.png' alt="ImgPerson" /> Peter</li>
              </ul>
            </div>

            <div className="section sales">
              <h3>Sales</h3>
              <p>84%</p>
            </div>

            <div className="section members">
              <h3 className="members-title">Active Members</h3>
              <div className="members-header">
                <div className="members-search">
                  <input type="text" placeholder="Search" className="members-search-input" />
                  <button className="members-search-btn">
                    <img src="/public/dashImg/search.png" alt="search" />
                  </button>
                </div>
                <div className="members-sort">
                  <span>Sort by</span>
                  <img src="/public/dashImg/sort.png" alt="sort" />
                </div>
              </div>
              <div className="members-table">
                <div className="members-table-header">
                  <span>Name</span>
                  <span>Date paid</span>
                  <span>Date Expiry</span>
                  <span>Status</span>
                </div>
                <div className="members-table-row">
                  <span className="members-avatar"></span>
                  <span className="members-name">James Medalla</span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                </div>
                <div className="members-table-row">
                  <span className="members-avatar"></span>
                  <span className="members-name">Kent Charl Mabutas</span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                </div>
                <div className="members-table-row">
                  <span className="members-avatar"></span>
                  <span className="members-name">John Elmar Rodrigo</span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                  <span className="members-dot"></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
