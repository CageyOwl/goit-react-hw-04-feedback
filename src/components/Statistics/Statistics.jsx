import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import css from './statistics.module.css';

export default function Statistics({ appState, total, positivePerc }) {
  let stateKeys = Object.keys(appState);

  return (
    <ul className={css.statistics}>
      {stateKeys.map(item => (
        <StatisticsItem key={item} name={item} value={appState[item]} />
      ))}
      <li className={css.statistics__item} key="total">
        Total: {total}
      </li>
      <li className={css.statistics__item} key="pos-feedback">
        Positive feedbacks: {positivePerc}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  appState: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePerc: PropTypes.number,
};
