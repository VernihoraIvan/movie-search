import { useState } from 'react';
import css from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);

    setQuery('');
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      {/* <ToastContainer />
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm> */}
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <button className={css.button} type="submit">
          <span className={css.label}>Search</span>
        </button>
        <input
          className={css.input}
          value={query}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};

export default Searchbar;
