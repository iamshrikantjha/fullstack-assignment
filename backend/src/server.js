const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Read student data
const studentData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'students.json'), 'utf8')
);

// Search endpoint
app.get('/api/search', (req, res) => {
  const { query } = req.query;

  if (!query || query.length < 3) {
    return res.json({ students: [] });
  }

  const searchQuery = query.toLowerCase();
  const results = studentData.students
    .filter(student => 
      student.name.toLowerCase().includes(searchQuery)
    )
    .slice(0, 5); // Return only 5 results

  res.json({ students: results });
});

// Get all students endpoint (for testing)
app.get('/api/students', (req, res) => {
  res.json(studentData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 