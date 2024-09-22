import React from 'react';

function Response({ jsonData, selectedOptions, response }) {
  if (!response) {
    return null;
  }

  const filteredData = jsonData.data.filter((item) => {
    if (selectedOptions.includes('Alphabets')) {
      if (isNaN(item)) {
        return true;
      }
    }
    if (selectedOptions.includes('Numbers')) {
      if (!isNaN(item)) {
        return true;
      }
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
      if (item === 'z') {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      <h2>Filtered Response:</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
}

export default Response;