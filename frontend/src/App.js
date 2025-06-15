import React, { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import StudentDetails from './components/StudentDetails';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleSearch = useCallback(async (query) => {
    try {
      setIsSearching(true);
      const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setSearchResults(data.students);
    } catch (error) {
      console.error('Error searching students:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleSelectStudent = (student) => {
    setIsLoadingDetails(true);
    // Simulate a small delay to show loading state
    setTimeout(() => {
      setSelectedStudent(student);
      setSearchResults([]);
      setIsLoadingDetails(false);
    }, 500);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Search</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <SearchResults 
          results={searchResults} 
          onSelect={handleSelectStudent} 
          isLoading={isSearching}
        />
        <StudentDetails 
          student={selectedStudent} 
          isLoading={isLoadingDetails}
        />
      </main>
    </div>
  );
}

export default App;
