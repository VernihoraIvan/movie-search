import { useState } from "react";

interface HandlerOnChange {
  onChange(query: string): Promise<void>;
}

const Searchbar = ({ onChange }: HandlerOnChange) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(input);
  };
  return (
    <div className=" mb-10">
      <form onSubmit={handleInputSubmit}>
        <label className="ml-28 ">
          Search
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Please enter movie name"
            className="xxs:mt-2 xxs:ml-16 bg-inputBg px-1 py-1 ml-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black-900 focus:border-transparent"
          />
          <button
            className="my-5 mx-5 bg-gray-800 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
