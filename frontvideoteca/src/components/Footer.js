import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-2">
      <Link to="/">
        <button type="submit" className="btn btn-warning">
          /Home
        </button>
      </Link>
    </div>
  );
};
export default Footer;
