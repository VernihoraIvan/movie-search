interface HandlerOnChange {
  onChange(query: string): Promise<void>;
}

const Searchbar = ({ onChange }: HandlerOnChange) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
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
