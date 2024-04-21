/* Imports */

// react
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css

interface Props {}

const CodeBoxSkeleton: FC<Props> = ({}) => {
  return (
    <div className="codebox skeleton">
      <div className="codebox__header">
        <div className="codebox__header__btn-container">
          <div className="codebox__header__btn-container__btn red"></div>
          <div className="codebox__header__btn-container__btn yellow"></div>
          <div className="codebox__header__btn-container__btn green"></div>
        </div>
        <div className="codebox__header__tab-container">
          <div className="codebox__header__tab-container__tab-indicator"></div>
          {new Array(3).fill(null).map((_, index) => (
            <button
              className={`codebox__header__tab-container__tab ${
                index === 0 ? "active" : ""
              }`.trim()}
              key={index}
            ></button>
          ))}
        </div>
      </div>
      <ol className="codebox__line-container">
        {new Array(11).fill(null).map((_, index) => (
          <li className="codebox__line-container__line" key={index}>
            <div
              className="codebox__line-container__line__bar"
              style={{ width: `${Math.random() * 60 + 20}%` }}
            ></div>
          </li>
        ))}
      </ol>
      <div className="codebox__footer">
        <div className="codebox__footer__btn"></div>
      </div>
    </div>
  );
};

export default CodeBoxSkeleton;
