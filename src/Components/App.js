import React, { Component } from 'react';

import Section from './Section/Section.js';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions.js';
import Statistic from './Statistic/Statistic.js';
import Notification from './Notification/Notification.js';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = type => {
    this.setState(prevState => {
      const newState = {
        [type]: prevState[type] + 1,
      };
      return { ...prevState, ...newState };
    });
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = total => Math.round((100 * this.state.good) / total);

  render() {
    const totalFB = this.total();
    const positiveFeedback = this.positivePercentage(totalFB);
    return (
      <>
        <Section title={'Please Leave Feedback'}>
          <FeedBackOptions onLeaveFeedback={this.LeaveFeedback} />
        </Section>
        <Section title={'Statistic'}>
          {this.total() !== 0 && (
            <Statistic
              stats={this.state}
              total={totalFB}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
        {this.total() === 0 && (
          <Notification message="No feedback given"></Notification>
        )}
      </>
    );
  }
}
