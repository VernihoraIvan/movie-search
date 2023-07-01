import css from './DetailsEl.module.css';
import PropTypes from 'prop-types';
const DetailsEl = ({ title, text, author }) => {
  if (!text) {
    return (
      <div>
        <h2>{title}</h2>
        <div>We don't have any reviews for this movie.</div>
      </div>
    );
  }
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {author && <h3>Author: {author}</h3>}
      <div className={css.text}>{text}</div>
    </div>
  );
};

export default DetailsEl;

DetailsEl.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};
