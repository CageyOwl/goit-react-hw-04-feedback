import PropTypes from 'prop-types';
import css from './section.module.css';

export default function Section({ title, children = null }) {
  return (
    <section className={css['section-component']}>
      {title && <h2 className={css['section-component__title']}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
