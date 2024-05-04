import { useTheme } from "@/context/Hooks";
import { DetailsElementProps } from "@/utilities/interfaces";
import clsx from "clsx";

const DetailsElement = ({
  title,
  text,
  author,
  children,
  release,
}: DetailsElementProps) => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  if (!text) {
    return (
      <div>
        <h2>{title}</h2>
        <div>We don't have any reviews for this movie.</div>
      </div>
    );
  }
  return (
    <div>
      <h2
        className={clsx(
          "mb-1",
          isLight && "text-secColorLight",
          !isLight && "text-white "
        )}
      >
        {title}
      </h2>
      {release && <p>Release date: {release}</p>}
      {author && (
        <h3
          className={clsx(
            isLight && "text-secColorLight",
            !isLight && "text-white"
          )}
        >
          Author: <span className="text-grey  ">{author}</span>
        </h3>
      )}
      {children && <div>{children}</div>}
      {text !== "text" && <div className="mb-5">{text}</div>}
    </div>
  );
};
export default DetailsElement;
