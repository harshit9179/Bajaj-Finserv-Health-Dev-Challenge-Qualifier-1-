import React, { useState } from 'react';
import TextInput from './TextInput';
import MultiSelectDropdown from './MultiSelectDropdown';
import Response from './Response';

function App() {
  const [jsonData, setJsonData] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('/api/process-data', data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Frontend</h1>
      <TextInput onSubmit={handleSubmit} setJsonData={setJsonData} />
      <MultiSelectDropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      <Response jsonData={jsonData} selectedOptions={selectedOptions} response={response} />
    </div>
  );
}

export default App;