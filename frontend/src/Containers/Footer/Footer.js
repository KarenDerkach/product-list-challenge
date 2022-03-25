import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="c-footer">
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a
            href="https://portfolio-karenderkach.vercel.app/"
            className="f-link"
          >
            {" "}
            Karen Derkach
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
