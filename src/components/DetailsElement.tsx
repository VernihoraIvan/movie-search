import { DetailsElementProps } from "@/utilities/interfaces";

const DetailsElement = ({
  title,
  text,
  author,
  children,
}: DetailsElementProps) => {
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
      <h2 className="text-white mb-3">{title}</h2>
      {author && (
        <h3 className="text-white">
          Author: <span className="text-grey  ">{author}</span>
        </h3>
      )}
      {children && <div>{children}</div>}
      <div className="my-5">{text}</div>
    </div>
  );
};
export default DetailsElement;
