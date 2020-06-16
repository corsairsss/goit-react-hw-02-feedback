import React from 'react';

import s from './FeedBackOptions.module.css';

export default function FeedBackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.btn}
        type="button"
        onClick={onLeaveFeedback}
        data-type="good"
      >
        GOOD
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={onLeaveFeedback}
        data-type="neutral"
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={onLeaveFeedback}
        data-type="bad"
      >
        Bad
      </button>
    </>
  );
}
