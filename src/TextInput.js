import React from 'react';

function TextInput({ onSubmit, setJsonData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const jsonData = JSON.parse(event.target.elements.jsonData.value);
      onSubmit(jsonData);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jsonData">JSON Data:</label>
      <input type="text" id="jsonData" name="jsonData" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextInput;