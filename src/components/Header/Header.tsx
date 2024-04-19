/* Imports */

// react
import { FC } from "react";

// components
import Logo from "../Logo/Logo";
import Dropdown from "./Dropdown";

// libs

// utils
import headerOptions from "../../utils/headerOptions";

// types & interfaces

// css
import "./Header.css";

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <header className="header">
      <ul className="header__list">
        <Dropdown />
        <Logo />
        {headerOptions.map((option, index) => (
          <li key={index} className="header__list__li">
            <a
              href={option.link}
              className={`header__list__li__option ${
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
