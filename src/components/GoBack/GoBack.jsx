import { Link } from 'react-router-dom';

import css from './GoBack.module.css';

const GoBack = ({ to }) => {
  console.log(typeof to);
  return (
    <Link className={css.button} to={to}>
      ← Go back
    </Link>

    //  <button to={to} onClick={() => navigate(to.state?.from ?? '/')}>
    //   ← Goo back
    // </button>
  );
};

export default GoBack;
