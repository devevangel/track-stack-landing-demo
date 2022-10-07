import React from "react";

const Button = ({ text, styles }) => {
  return (
    <button
      className={`w-40 h-10 border-gradient border-gradient-button p-2 hover:bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end hover:text-white ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
