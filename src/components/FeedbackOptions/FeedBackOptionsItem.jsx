import PropTypes from 'prop-types';
import css from './feedback.module.css';

export default function FeedbackOptionsItem({ name, func }) {
  return (
    <li>
      <button
        className={css['feedback-options-button']}
        onClick={event => {
          func(event.target.textContent);
        }}
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
