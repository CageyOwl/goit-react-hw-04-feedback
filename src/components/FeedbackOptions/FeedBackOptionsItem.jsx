import PropTypes from 'prop-types';
import css from './feedback.module.css';

export default function FeedbackOptionsItem({ name, func }) {
  return (
    <li>
      <button
        className={css['feedback-options-button']}
        name={name}
        onClick={func}
      >
        {name}
      </button>
    </li>
  );
}

FeedbackOptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
