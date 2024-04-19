/* Imports */

// react
import { FC, useState } from "react";

// components

// libs

// utils
import tabs from "../../utils/codeBoxTabs";

// types & interfaces

// css
import "./CodeBox.css";

interface Props {}

const CodBox: FC<Props> = ({}) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="codebox">
      <div className="codebox__header">
        <div className="codebox__header__btn-container">
          <div className="codebox__header__btn-container__btn red"></div>
          <div className="codebox__header__btn-container__btn yellow"></div>
          <div className="codebox__header__btn-container__btn green"></div>
        </div>
        <div className="codebox__header__tab-container">
          <span className="codebox__header__tab-container__tab-indicator">
            {tabs[currentTab].label}
          </span>
          {tabs.map((tab, index) => (
            <button
              onClick={() => setCurrentTab(index)}
              className={`codebox__header__tab-container__tab ${
                currentTab === index ? "active" : ""
              }`}
              key={tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <ol className="codebox__line-container">
        {tabs[currentTab].content.map((line, index) => (
          <li className="codebox__line-container__line" key={index}>
            {line}
          </li>
        ))}
      </ol>
      <div className="codebox__footer">
        {tabs.map((tab, index) => {
          return (
            <div
              key={tab.label}
              onClick={() => {
                setCurrentTab(index);
              }}
              className={`codebox__footer__btn ${
                currentTab === index ? "active" : ""
              }`.trim()}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CodBox;
