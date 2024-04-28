import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <button
      className={clsx(
        " py-2 px-4 rounded",
        !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
        isLight &&
          "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
      )}
      onClick={() => navigate(-1)}
    >
      Go back
    </button>
  );
};

export default ReturnButton;
