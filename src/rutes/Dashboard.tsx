import React, { useState } from 'react';
import '../styles/AdminPage.css';

const Dashboard: React.FC = () => {
  const [bellActive, setBellActive] = useState(true);

  return (
    <div className="main-content">
      <div className="main-scroll">
        <div className='main-header'>
          <div className='main-header-left'>
            <img className='main-logo' src='/MainLogo.png' alt="logo" />
            <span className='main-header-title'>STAMINA FITNESS</span>
          </div>
          <div className='main-header-right'>
            <span className='main-header-feedback'>Feedback</span>
            <img
              className='main-header-bell'
              src={bellActive ? '/dashImg/bell-solid.png' : '/dashImg/bell-outline.png'}
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
            <img className="welcome-banner-img" src="/dashImg/PersonCircle.png" alt="Elipse" />
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
              <li><img src='/dashImg/PersonCircle.png' alt="ImgPerson" />  Juan Dela Cruz</li>
              <li><img src='/dashImg/PersonCircle.png' alt="ImgPerson" /> Peter</li>
              <li><img src='/dashImg/PersonCircle.png' alt="ImgPerson" /> Peter</li>
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
                  <img src="/dashImg/Search.png" alt="search" />
                </button>
              </div>
              <div className="members-sort">
                <span>Sort by</span>
                <img src="/dashImg/sort.png" alt="sort" />
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
    </div>
  );
};

export default Dashboard;
