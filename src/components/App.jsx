import React, { useState } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
// import PropTypes from 'prop-types';

const initOptions = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [options, setOptions] = useState(initOptions);
  const { good, neutral, bad } = options;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const onLeaveFeedback = feedbackType => {
    setOptions(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      </Container>
      <Container>
        <Section title="Statistics">
          {!total ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    </>
  );
}

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   onLeaveFeedback = feedbackType => {
//     this.setState(prev => ({ [feedbackType]: prev[feedbackType] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <>
//         <Container>
//           <Section title={'Please leave feedback'}>
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.onLeaveFeedback}
//             />
//           </Section>
//         </Container>
//         <Container>
//           <Section title="Statistics">
//             {!total ? (
//               <Notification message={'There is no feedback'} />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             )}
//           </Section>
//         </Container>
//       </>
//     );
//   }
// }
