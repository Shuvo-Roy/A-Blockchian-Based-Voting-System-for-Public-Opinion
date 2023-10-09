import React from "react";
import moment from 'moment';
const Footer = () => {
  return (
    <footer
      style={{ paddingBottom: 20, paddingTop: 50, textAlign: "center" }}
      className="text-normal"
    >
      <div className="footer-time">{moment().format("MMM Do YY")}</div>
      <div className="footer-time">Copyright © 2023 ABBVSFPO. All rights reserved. </div>
    </footer>
  );
};

export default Footer;
