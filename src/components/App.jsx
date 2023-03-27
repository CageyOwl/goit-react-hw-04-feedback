import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Buttons names match the state properties names
  clickBtn = (btnName) => {
    this.setState(prevState => {
      return {
        [btnName]: ++prevState[btnName],
      };
    });
  };

  countTotalFeedback = (appState) => {
    let total = 0;
    for (let f in appState) {
      total += appState[f];
    }
    return total;
  };
  countPositiveFeedbackPercentage = (appState) => {
    return Math.round(
      (appState.good / this.countTotalFeedback(appState)) * 100
    );
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickBtn}
          />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback(this.state) ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              appState={this.state}
              total={this.countTotalFeedback(this.state)}
              positivePerc={this.countPositiveFeedbackPercentage(this.state)}
            />
          )}
        </Section>
      </>
    );
  }
}
