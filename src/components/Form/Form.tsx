/* Imports */

// react
import { FC } from "react";

// components
import CodeBox from "../CodeBox/CodeBox";

// libs

// utils
import fetchCode from "../../utils/fetch-code";
import fromStringToCode from "../../utils/code-coloring";

// types & interfaces

// css
import "./Form.css";

interface Props {}

const Form: FC<Props> = ({}) => {
  return (
    <form className="form">
      <div className="form__text-container">
        <h1 id="contact" className="form__text-container__title">
          <span>Contact</span> with us
        </h1>
        <div className="form__text-container__input-container">
          <label className="form__text-container__input-container__label">
            What is your name ?
          </label>
          <input
            type="text"
            className="form__text-container__input-container__input"
            placeholder="Epifanio Carretero"
          />
        </div>
        <div className="form__text-container__input-container">
          <label className="form__text-container__input-container__label">
            Where are you from ?
          </label>
          <input
            type="text"
            className="form__text-container__input-container__input"
            placeholder="Senegal"
          />
        </div>
        <div className="form__text-container__input-container">
          <label className="form__text-container__input-container__label">
            What is your email ?
          </label>
          <input
            type="text"
            className="form__text-container__input-container__input"
            placeholder="epifanio@carretero.com"
          />
        </div>
        <div className="form__text-container__input-container">
          <label className="form__text-container__input-container__label">
            Enter your message
          </label>
          <textarea
            className="form__text-container__input-container__textarea"
            placeholder=""
          />
        </div>
        <div className="form__text-container__input-container">
          {/* <label className="form__text-container__input-container__label">
            Enter your message
          </label> */}
          <button className="form__text-container__input-container__button">
            Send
          </button>
        </div>
      </div>
      <div className="form__codebox-container">
        <CodeBox
          skeletonLines={21}
          getTabs={async () => {
            return [
              {
                label: "shopping.py",
                content: fromStringToCode(await fetchCode("shop-list.py")),
                highlightedLines: [4, 5, 6, 9, 10, 11, 12],
              },
            ];
          }}
        />
      </div>
    </form>
  );
};

export default Form;
