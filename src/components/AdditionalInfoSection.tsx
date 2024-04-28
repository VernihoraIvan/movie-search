import { useTheme } from "@/context/Hooks";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const AdditionalInfoSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const navigate = useNavigate();
  return (
    <div>
      <h2 className={clsx(!isLight && "text-white")}>Additional information</h2>
      <ul className="cursor-pointer mt-4">
        <li
          onClick={() => navigate("cast", { replace: true })}
          className={clsx(
            "mr-4 rounded-md py-2 px-4 inline",
            !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
            isLight &&
              "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
          )}
        >
          Cast
        </li>
        <li
          onClick={() => navigate("review", { replace: true })}
          className={clsx(
            "rounded-md py-2 px-4 inline",
            !isLight && "hover:text-white  bg-gray-800 hover:bg-gray-900",
            isLight &&
              "hover:text-hoverColorLight text-btnTextCol hover:text-colorLight bg-btnCol hover:bg-btnHoverCol"
          )}
        >
          Review
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfoSection;
