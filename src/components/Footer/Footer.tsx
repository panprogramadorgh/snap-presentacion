import { FC } from "react";
import Logo from "../Logo/Logo";
import socialMedia from "../../utils/social-media";
import "./Footer.css";

interface Props {}
const Footer: FC<Props> = ({}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo footer />
        <div className="footer__container__text-container">
          <h3>Follow us</h3>
          <ul className="footer__container__text-container__li-container">
            {socialMedia.map(({ label, url }, index) => {
              return (
                <li
                  key={index}
                  className="footer__container__text-container__li-container__li"
                >
                  <a href={url} target="_blank">
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
