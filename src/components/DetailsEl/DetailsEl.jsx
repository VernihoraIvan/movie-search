import css from './DetailsEl.module.css';
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
      <h2>{title}</h2>
      {author && <h3>Author: {author}</h3>}
      <div>{text}</div>
    </div>
  );
};

export default DetailsEl;
