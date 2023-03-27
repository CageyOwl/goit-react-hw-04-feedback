import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  // Buttons names match the hooks variables names
  const clickBtn = event => {
    const option = event.target.name;
    setOptions(prevState => {
      return { ...prevState, [option]: ++prevState[option] };
    });
  };

  const calcTotalFeedback = () => {
    return Object.values(options).reduce(
      (total, option) => (total += option),
      0
    );
  };

  const calcPosFeedback = () => {
    return Math.round((options.good / calcTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={clickBtn} />
      </Section>

      <Section title="Statistics">
        {calcTotalFeedback() ? (
          <Statistics
            appState={options}
            total={calcTotalFeedback}
            positivePerc={calcPosFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
