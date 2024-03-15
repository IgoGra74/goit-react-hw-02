import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';
import Options from './components/Options/Options';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPersantage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedbackPersantage={positiveFeedbackPersantage}
      />
    </>
  );
};

export default App;
