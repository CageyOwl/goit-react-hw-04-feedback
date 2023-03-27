import PropTypes from 'prop-types';
import FeedbackOptionsItem from './FeedBackOptionsItem';
import css from './feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKeys = Object.keys(options);

  return (
    <ul className={css['feedback-options-list']}>
      {optionsKeys.map(item => (
        <FeedbackOptionsItem key={item} name={item} func={onLeaveFeedback} />
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
