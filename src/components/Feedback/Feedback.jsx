import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';

const ResponseWidget = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h2>Response Widget</h2>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default ResponseWidget;
