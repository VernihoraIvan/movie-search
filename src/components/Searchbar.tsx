import { useState } from "react";

interface HandlerOnChange {
  onChange(query: string): Promise<void>;
}

const Searchbar = ({ onChange }: HandlerOnChange) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className=" mb-10">
      <label className="ml-28">
        Search
        <input
          value={input}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Please enter movie name"
          className="bg-inputBg px-1 py-1 ml-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black-900 focus:border-transparent"
        />
      </label>
    </div>
  );
};

export default Searchbar;
