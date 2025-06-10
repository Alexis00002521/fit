import React, { useState } from 'react';
import '../styles/AdminPage.css';

const ViewMembers: React.FC = () => {
  const [bellActive, setBellActive] = useState(true);
  const [showEntities, setShowEntities] = useState(10);

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

        {/* Título grande */}
        <h1 className="active-members-title">Active Members</h1>

        {/* Caja morada */}
        <div className="members-box">
          <div className="members-box-header">
            <h2 className="members-box-title">Gym Members</h2>
            <div className="members-box-controls">
              <div className="show-entities">
                <span>Show Entities</span>
                <select
                  className="show-entities-select"
                  value={showEntities}
                  onChange={e => setShowEntities(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <div className="members-search-bar">
                <input type="text" placeholder="Search" className="members-search-input" />
                <button className="members-search-btn">
                  Search
                </button>
                <img src="/dashImg/Search.png" alt="search" className="members-search-icon" />
              </div>
            </div>
          </div>

          {/* Tabla de miembros */}
          <div className="members-table">
            <div className="members-table-header">
              <span className="sortable">Name</span>
              <span>Member ID</span>
              <span>Date Enrolled</span>
              <span>Date Expiration</span>
              <span>Actions</span>
            </div>
            <div className="members-table-row">
              <span>Member 1</span>
              <span>SFM2301N1</span>
              <span>Jan 11</span>
              <span>Feb 11</span>
              <span><button className="edit-btn">Edit</button></span>
            </div>
            <div className="members-table-row">
              <span>Member 2</span>
              <span>SFM2301N2</span>
              <span>Jan 11</span>
              <span>Feb 11</span>
              <span><button className="edit-btn">Edit</button></span>
            </div>
            <div className="members-table-row">
              <span>Member 3</span>
              <span>SFM2301N3</span>
              <span>Jan 11</span>
              <span>Feb 11</span>
              <span><button className="edit-btn">Edit</button></span>
            </div>
            <div className="members-table-row">
              <span>Member 4</span>
              <span>SFM2301N4</span>
              <span>Jan 11</span>
              <span>Feb 11</span>
              <span><button className="edit-btn">Edit</button></span>
            </div>
          </div>

          {/* Paginación */}
          <div className="members-pagination">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMembers;
