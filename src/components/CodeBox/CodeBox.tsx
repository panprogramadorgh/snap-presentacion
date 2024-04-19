/* Imports */

// react
import { Children, FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import "./CodeBox.css";

const tabs = [
  { label: "index.js", link: "/?tab=index.js" },
  { label: "main.py", link: "/?tab=main.py" },
];

const matchTab = (tabLink: string): boolean => {
  if (window.location.search === "" && tabs[0].link === tabLink) return true;
  const params = new URLSearchParams(window.location.search);
  const tabParam = params.get("tab");
  if (!tabParam) return false;
  const tabLinkParams = new URLSearchParams(tabLink.substring(1));
  const tabLinkTabParam = tabLinkParams.get("tab");
  if (!tabLinkTabParam) return false;
  return tabLinkTabParam === tabParam;
};

interface Props {}

const CodBox: FC<Props> = ({}) => {
  return (
    <div className="codebox">
      <ul className="codebox__header">
        <li className="codebox__header__btn red"></li>
        <li className="codebox__header__btn yellow"></li>
        <li className="codebox__header__btn green"></li>
        {tabs.map((tab, index) => (
          <li className="codebox__header__tab" key={index}>
            <a
              href={tab.link}
              className={`codebox__header__tab__a ${
                matchTab(tab.link) ? "active" : ""
              }`.trim()}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <ol className="codebox__line-container">
        <li className="codebox__line-container__line">// hello world</li>
        <li className="codebox__line-container__line">// hello world</li>
        <li className="codebox__line-container__line">// hello world</li>
        <li className="codebox__line-container__line">// hello world</li>
        <li className="codebox__line-container__line">// hello world</li>
        <li className="codebox__line-container__line">// hello world</li>
      </ol>
    </div>
  );
};

export default CodBox;
