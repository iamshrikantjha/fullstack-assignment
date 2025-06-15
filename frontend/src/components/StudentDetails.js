import React from 'react';
import Skeleton from './Skeleton';
import './StudentDetails.css';

const StudentDetails = ({ student, isLoading }) => {
  if (isLoading) {
    return <Skeleton type="student-details" />;
  }

  if (!student) {
    return null;
  }

  return (
    <div className="student-details-container">
      <h2>Student Details</h2>
      <div className="details-card">
        <div className="detail-item">
          <span className="label">Name:</span>
          <span className="value">{student.name}</span>
        </div>
        <div className="detail-item">
          <span className="label">Class:</span>
          <span className="value">Class {student.class}</span>
        </div>
        <div className="detail-item">
          <span className="label">Roll Number:</span>
          <span className="value">{student.rollNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails; 