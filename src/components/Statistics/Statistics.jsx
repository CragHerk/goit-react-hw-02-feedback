import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <p>There is no feedback</p>;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {total}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
