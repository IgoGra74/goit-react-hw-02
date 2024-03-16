import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

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
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPersantage={positiveFeedbackPersantage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
