import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import css from './GoBack.module.css';

const GoBack = ({ to }) => {
  return (
    <Link
      to={to} 
    >
      ← Go back
    </Link>

    //  <button to={to} onClick={() => navigate(to.state?.from ?? '/')}>
    //   ← Goo back
    // </button> 
  );
};

export default GoBack;
