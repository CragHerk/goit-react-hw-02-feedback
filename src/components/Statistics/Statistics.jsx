import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total feedback: {total}</p>
          <p>Positive feedback percentage: {positivePercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
