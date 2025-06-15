import React from 'react';
import Skeleton from './Skeleton';
import './SearchResults.css';

const SearchResults = ({ results, onSelect, isLoading }) => {
  if (isLoading) {
    return (
      <div className="search-results">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} type="search-result" />
        ))}
      </div>
    );
  }

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results">
      {results.map((student) => (
        <div
          key={student.id}
          className="result-item"
          onClick={() => onSelect(student)}
        >
          <div className="student-name">{student.name}</div>
          <div className="student-details">
            <span className="class">Class: {student.class}</span>
            <span className="roll-number">Roll No: {student.rollNumber}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults; 