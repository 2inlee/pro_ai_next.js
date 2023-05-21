'use client';
import React, { useState } from 'react';

const Expert = ({ finetuneText }) => {
  const [inputValue, setInputValue] = useState(finetuneText);
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleEditClick = () => {
    const data = {
      finetuneInput: inputValue,
      context: textareaValue,
    };

    fetch('http://localhost:5001/finetune', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the response from the server if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Expert</h1>
      <div className="form-group">
        <label htmlFor="finetuneInput">Finetune:</label>
        <input
          type="text"
          className="form-control"
          id="finetuneInput"
          name="finetuneInput"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="finetuneTextarea">Context:</label>
        <textarea
          className="form-control"
          id="finetuneTextarea"
          name="finetuneTextarea"
          rows="10"
          value={textareaValue}
          onChange={handleTextareaChange}
        />
        <button type="button" className="btn btn-primary mt-2" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Expert;
