import "./Input.css";
import { memo } from "react";

const Input = ({ value, handleInputChange }: any) => {
  console.log("Input rendered");
  return (
    <div className="Input-Container">
      <label>Search your favorite character!</label>
      <input
        className="Input"
        type="text"
        value={value}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default Input;
