/* Imports */

// react
import { FC, useState, useEffect } from "react";

// components
import CodeBoxSkeleton from "./CodeBoxSkeleton";

// libs

// utils

// types & interfaces
import { Tab } from "../../utils/definitions";

// css
import "./CodeBox.css";

interface Props {
  getTabs: () => Promise<Tab[]>;
  skeletonLines: number;
}

const CodBox: FC<Props> = ({ skeletonLines, getTabs }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabs, setTabs] = useState<Tab[] | null>(null);

  useEffect(() => {
    getTabs().then((tabs) => {
      setTimeout(() => {
        setTabs(tabs);
      }, Math.floor(Math.random() * 600 + 200));
    });
  }, []);

  if (!tabs) return <CodeBoxSkeleton skeletonLines={skeletonLines} />;
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
          <li
            className={`codebox__line-container__line ${
              tabs[currentTab].highlightedLines?.includes(index + 1)
                ? "highlighted"
                : ""
            }`.trim()}
            key={index}
          >
            {line}
          </li>
        ))}
      </ol>
      <div className="codebox__footer">
        {tabs.length === 1
          ? null
          : tabs.map((tab, index) => {
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
