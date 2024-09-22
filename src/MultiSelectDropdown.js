import React from 'react';

const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

function MultiSelectDropdown({ selectedOptions, setSelectedOptions }) {
  const handleOptionChange = (event) => {
    const newSelectedOptions = [...selectedOptions];
    if (event.target.checked) {
      newSelectedOptions.push(event.target.value);
    } else {
      newSelectedOptions.splice(newSelectedOptions.indexOf(event.target.value), 1);
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div>
      <h3>Select Options:</h3>
      {options.map((option) => (
        <div key={option}>
          <input type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={handleOptionChange} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default MultiSelectDropdown;