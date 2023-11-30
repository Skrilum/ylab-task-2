import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Button({ children, onClick }) {
  return <button className="Button" onClick={onClick}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default React.memo(Button)
