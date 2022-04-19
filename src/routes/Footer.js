import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© {new Date().getFullYear()} </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
