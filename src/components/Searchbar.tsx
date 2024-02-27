import { useState } from "react";

interface HandleSearchSubmit {
  onSubmit(query: string): Promise<void>;
}

const Searchbar = ({ onSubmit }: HandleSearchSubmit) => {
  const [query, setQuery] = useState<string>("");

  const handleSearchSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Please enter movie name"
          className="px-1 py-1 ml-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </form>
    </div>
  );
};

export default Searchbar;
