import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#339955`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link to="/profile" style={{ "color": "#ffffff", "fontFamily": "sans-serif", "margin": "0 8px" }}>Profile</Link>
    <Link to="/incoming" style={{ "color": "#ffffff", "fontFamily": "sans-serif", "margin": "0 8px" }}>Incoming</Link>
    <Link to="/sent" style={{ "color": "#ffffff", "fontFamily": "sans-serif", "margin": "0 8px" }}>Sent</Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
