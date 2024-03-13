import Options from '../Options/Options';

const Feedback = ({ options }) => {
  return (
    <div>
      <h2>Leave your feedback</h2>
      <Options updateFeedback={options.updateFeedback} />
      <h2>Statistics</h2>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
    </div>
  );
};

export default Feedback;
