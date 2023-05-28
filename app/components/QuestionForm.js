'use client';
import React, { useState } from 'react';
const QuestionForm = () => {
  const [answer, setAnswer] = useState('');
  const [prompt, setPrompt] = useState('');
  const [prePrompt, setPrePrompt] = useState('');

  const submitQuestion = () => {
    // Send a POST request to the server with the question and pre_prompt
    fetch('http://localhost:5001/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, prePrompt }) // add pre_prompt to the body
    })
      .then(response => response.json())
      .then(data => {
        // Set the value of the answer textarea with the received answer
        setAnswer(data.answer);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="question-container container mt-5">
      <h1>Question</h1>
        <form>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="pre-prompt">pre_prompt:</label>
              <input
                type="text"
                className="form-control"
                id="pre-prompt"
                name="pre-prompt"
                value={prePrompt}
                onChange={e => setPrePrompt(e.target.value)}
              />
            </div>
            <label htmlFor="question">Enter your question:</label>
            <input
              type="text"
              className="form-control"
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={e => {
                setPrompt(e.target.value);
              }}
            />
          </div>
          <div style={{margin:'10px'}}></div>
            <button type="button" className="btn btn-primary" onClick={submitQuestion}>
              OK
            </button>
          <div className="form-group mt-3">
            <label htmlFor="answer">Answer:</label>
            <textarea
              className="form-control"
              id="answer"
              name="answer"
              rows="10"
              cols="50"
              readOnly
              value={answer}
              onChange={() => {}}
            />
          </div>
        </form>
    </div>
  );
};


export default QuestionForm;
