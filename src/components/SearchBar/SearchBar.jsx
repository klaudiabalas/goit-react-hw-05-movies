import { useState } from 'react';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const newValue = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    onSearch(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleOnSubmit}>
        <input
          className={css.searchForm_input}
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={newValue}
        />
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_span}>Search</span>
        </button>
      </form>
    </header>
  );
};
