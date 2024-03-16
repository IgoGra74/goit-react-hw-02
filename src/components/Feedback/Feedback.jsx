import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPersantage }) => {
  return (
    <div>
      <p className={css.feedback}>
        Good: <span className={css.goodNumber}>{feedback.good}</span>
      </p>
      <p className={css.feedback}>
        Neutral: <span className={css.neutralNumber}>{feedback.neutral}</span>
      </p>
      <p className={css.feedback}>
        Bad: <span className={css.badNumber}>{feedback.bad}</span>
      </p>
      <p className={css.total}>
        Total: <span className={css.totalNumber}>{totalFeedback}</span>
      </p>
      <p className={css.positive}>
        Positive:{' '}
        <span className={css.positiveNumber}>
          {positiveFeedbackPersantage}%
        </span>
      </p>
    </div>
  );
};

export default Feedback;
