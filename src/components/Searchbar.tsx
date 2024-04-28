import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { useState } from "react";

interface HandlerOnChange {
  onChange(query: string): Promise<void>;
}

const Searchbar = ({ onChange }: HandlerOnChange) => {
  const [input, setInput] = useState<string>("");
  const { theme } = useTheme();
  const isLight = theme === "light";

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
            className={clsx(
              "m-5 py-2 px-4 border-2 border-gray-500 rounded xxs:mt-2 xxs:ml-16 focus:outline-none focus:ring-2 focus:ring-black-900 focus:border-transparent",
              !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
              isLight &&
                "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
            )}
          />
        </label>
        <button
          className={clsx(
            "m-5 py-2 px-4 rounded",
            !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
            isLight &&
              "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
          )}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
