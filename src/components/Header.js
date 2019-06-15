import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="uk-margin" uk-margin="true">
    <h1 className="uk-text-center">{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
