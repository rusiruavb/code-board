import React from "react";

function Button({ buttonText, onClick }) {
  const handleClickInButton = (message) => {
    onClick(message);
  };

  return (
    <button
      className="cursor-pointer rounded border border-gray-400 bg-gray-100 px-4 py-1.5 text-base transition-all duration-300 hover:bg-gray-200 hover:font-extrabold"
      type="button"
      onClick={() => handleClickInButton("Button clicked")}
    >
      {buttonText}
    </button>
  );
}

export default Button;
