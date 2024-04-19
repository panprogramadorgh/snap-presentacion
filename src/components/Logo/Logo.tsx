/* Imports */

// react
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import "./Logo.css";

// snap word
const logo = [
  {
    letter: "S",
    color: "green",
  },
  {
    letter: "N",
    color: "red",
  },
  {
    letter: "A",
    color: "blue",
  },
  {
    letter: "P",
    color: "yellow",
  },
];

interface Props {}
const Logo: FC<Props> = ({}) => {
  return (
    <a href="/" className="logo">
      {logo.map(({ letter, color }, index) => {
        return (
          <span key={index} className={`logo__letter ${color}`.trim()}>
            {letter}
          </span>
        );
      })}
    </a>
  );
};

export default Logo;
