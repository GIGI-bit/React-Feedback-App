import { Component } from "react";
import Section from "./Section";
import Notification from "./Notification";

class Statistics extends Component {
  constructor() {
    super();
    this.state = { good: 0, neutral: 0, bad: 0 };
  }

  handleGoodBTN = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutralBTN = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleBadBTN = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section>
          <h2>Please leave feedback</h2>
          <button onClick={this.handleGoodBTN}>Good</button>
          <button onClick={this.handleNeutralBTN}>Neutral</button>
          <button onClick={this.handleBadBTN}>Bad</button>
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </Section>
        ) : (
          <Notification message="There's no feedback" />
        )}
      </div>
    );
  }
}

export default Statistics;
