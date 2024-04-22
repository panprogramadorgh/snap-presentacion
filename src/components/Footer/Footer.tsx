import { FC } from "react";
import "./Footer.css";

interface Props { }
const Footer: FC<Props> = ({ }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3>Follow us</h3>
        <ul className="footer__container__li-container">
          <li className="footer__container__li-container__li"><a href="#">Twiter</a></li>
          <li className="footer__container__li-container__li"><a href="#">X</a></li>
          <li className="footer__container__li-container__li"><a href="#">Youtube</a></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
