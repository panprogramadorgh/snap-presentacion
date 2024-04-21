import { FC, ReactNode } from "react";
import "./Card.css";

interface Props {
  title: ReactNode;
  children: ReactNode;
}
const Card: FC<Props> = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Card;
