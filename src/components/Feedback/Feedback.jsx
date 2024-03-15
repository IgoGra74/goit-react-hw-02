const Feedback = ({ feedback, totalFeedback, positiveFeedbackPersantage }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPersantage}%</p>
    </div>
  );
};

export default Feedback;
