import { useTheme } from "@/context/Hooks";
import clsx from "clsx";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const LoadMoreBtn = ({ setPage, page }: Props) => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <div className="flex justify-center">
      <button
        className={clsx(
          "my-5 py-2 px-4 rounded",
          !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
          isLight &&
            "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
        )}
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
