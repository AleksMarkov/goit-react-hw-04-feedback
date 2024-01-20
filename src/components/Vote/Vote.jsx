import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

import styles from './vote.module.css';

class Vote extends Component {
  static voteOptions = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(keyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName];
    return Number(((value / total) * 100).toFixed(2));
  }

  onleaveFeedback = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const total = this.countTotalFeedback();

    const goodPercantage = this.countPositiveFeedbackPercentage('good');
    const goodValue = this.state['good'];
    const neutralValue = this.state['neutral'];
    const badValue = this.state['bad'];

    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <div className={styles.wrapperBtn}>
            <FeedbackOptions
              options={Vote.voteOptions}
              onleaveFeedback={this.onleaveFeedback}
            />
          </div>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            'No feedback given'
          ) : (
            <Statistics
              goodValue={goodValue}
              neutralValue={neutralValue}
              badValue={badValue}
              goodPercantage={goodPercantage}
              total={total}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Vote;
