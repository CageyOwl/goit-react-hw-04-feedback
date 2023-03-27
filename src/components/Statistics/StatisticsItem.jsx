import PropTypes from 'prop-types';
import css from './statistics.module.css';

export default function StatisticsItem({ name, value }) {
  return (
    <li className={css.statistics__item}>
      <span className={css['statistics__item-category']}>{name}</span>: {value}
    </li>
  );
}

StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
