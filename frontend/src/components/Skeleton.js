import React from 'react';
import './Skeleton.css';

const Skeleton = ({ type }) => {
  if (type === 'search-result') {
    return (
      <div className="skeleton-result-item">
        <div className="skeleton-name"></div>
        <div className="skeleton-details">
          <div className="skeleton-class"></div>
          <div className="skeleton-roll"></div>
        </div>
      </div>
    );
  }

  if (type === 'student-details') {
    return (
      <div className="skeleton-details-container">
        <div className="skeleton-title"></div>
        <div className="skeleton-details-card">
          <div className="skeleton-detail-item"></div>
          <div className="skeleton-detail-item"></div>
          <div className="skeleton-detail-item"></div>
        </div>
      </div>
    );
  }

  return null;
};

export default Skeleton; 