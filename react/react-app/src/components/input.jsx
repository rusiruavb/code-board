import React from "react";

function Input({ type, placeholder, onChange, value }) {
  return (
    <input
      className="border border-gray-400 rounded-md p-2 my-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
