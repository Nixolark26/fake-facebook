import React from "react";
import "./Footer.css";
import Card from "../../components/Card";
import extras from "../../data/extras";

import { Link } from "react-router-dom";

function Footer() {
  const extraList = extras.map((e) => {
    return <Card title={e.name} />;
  });

  return (
    <div className="footer-div">
      <footer>
        <ul className="footer__ul-languages">
          <li>English (US)</li>
          <li>Español</li>
          <li>Português (Brasil)</li>
          <li>Français (France)</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>العربية</li>
          <li>中文(简体)</li>
          <li>हिन्दी</li>
          <li>日本語</li>
        </ul>
        <hr />
        <ul className="footer__ul-about">{extraList}</ul>
        <Link to="https://www.facebook.com" id="copyright">
          <span>Meta © 2023</span>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
