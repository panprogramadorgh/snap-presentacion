/* Imports */

// react
import { FC } from "react";

// components
import Logo from "../Logo/Logo";

// libs

// utils

// types & interfaces

// css
import "./Header.css";

const options = [
  {
    label: "Docs",
    link: "/docs",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    highlighted: true,
    label: "Start",
    link: "/codesnap",
  },
];

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <header className="header">
      <ul className="header__list">
        <Logo />
        {options.map((option, index) => (
          <li key={index}>
            <a
              href={option.link}
              className={`header__list__option ${
                option.highlighted ? "highlighted" : ""
              }`.trim()}
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="header__title-container">
        <h1>The way to learn coding from any device in a snap</h1>
      </div>
    </header>
  );
};

export default Header;
