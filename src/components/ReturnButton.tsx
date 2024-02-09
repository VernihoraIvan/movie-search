import { Link } from "react-router-dom";
interface Props {
  to: string;
}
const ReturnButton = ({ to }: Props) => {
  return <Link to={to}>← Go back</Link>;
};

export default ReturnButton;
