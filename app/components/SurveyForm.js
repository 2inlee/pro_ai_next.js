import { useState, useEffect } from 'react';
import axios from 'axios';

const SurveyForm = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/expert').then((response) => {
      setQuestions(response.data.questions);
    }).catch((error) => {
      console.error('Error fetching questions:', error);
    });
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare survey data from questions and answers
    const surveyData = {
      answers: answers,
    };

    // Submit survey to the Flask backend
    axios.post('http://localhost:5001/submit-survey', surveyData).then((response) => {
      alert('Survey submitted successfully!');
      console.log("response", response);
      // Handle any additional logic or UI updates
    }).catch((error) => {
      alert('Error submitting survey:', error);
    });
  };

  // Handle answer changes
  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

return (
  <div>
    <h2>Survey for Expert</h2>
    <br/>
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={question.question_id} className="mb-4">
          <h3 className="mb-3">{`Question ${question.question_id}`}</h3>
          <p className="mb-2">{question.question_text}</p>
          <textarea
            className="form-control"
            rows="4"
            value={answers[index] || ''}
            onChange={(event) => handleAnswerChange(index, event)}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);
};

export default SurveyForm;