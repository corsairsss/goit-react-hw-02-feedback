import React from 'react';

import s from './FeedBackOptions.module.css';

export default function FeedBackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        GOOD
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </>
  );
}
