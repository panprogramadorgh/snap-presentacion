/* Imports */

// react
import { FC, useState } from "react";

// components

// libs

// utils
import headerOptions from "../../utils/headerOptions";

// types & interfaces

// css
import "./Dropdown.css";

interface Props {}

const Dropdown: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown" onClick={toggleDropdown}>
        <div
          className={`dropdown__bar first ${isOpen ? "open" : ""}`.trim()}
        ></div>
        <div
          className={`dropdown__bar last ${isOpen ? "open" : ""}`.trim()}
        ></div>
        <ul className={`dropdown__menu ${isOpen ? "open" : ""}`.trim()}>
          {headerOptions.map((option) => (
            <li
              key={option.label}
              className={`dropdown__menu__item ${
                option.highlighted ? "highlighted" : ""
              }`.trim()}
            >
              <a href={option.link}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
