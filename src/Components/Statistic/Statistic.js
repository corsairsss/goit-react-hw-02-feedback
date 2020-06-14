import React from 'react';

export default function Statistic({ stats, total, positivePercentage }) {
  const { good, neutral, bad } = stats;

  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Feedback:{positivePercentage}%</p>
    </>
  );
}
