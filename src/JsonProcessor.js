import React, { useState } from 'react';
import axios from 'axios';

function JsonProcessor() {
  const [jsonData, setJsonData] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const response = await axios.post('/api/process-data', { data: parsedData });
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setError('Invalid JSON format');
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  // ... (render logic)
}

export default JsonProcessor;
// ... (rest of the code)

return (
    <div>
      <h1>Your Roll Number</h1>
      <input
        type="text"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder="Enter JSON data"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
      {response && (
        <div>
          <label>Select options:</label>
          <select multiple value={selectedOptions} onChange={handleOptionChange}>
            <option value="alphabets">Alphabets</option>
            <option value="numbers">Numbers</option>
            <option value="highestLowercaseAlphabet">Highest Lowercase Alphabet</option>
          </select>
          {/* Render response based on selected options */}
        </div>
      )}
    </div>
  );