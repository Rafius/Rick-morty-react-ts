import "./Input.css";

const Input = ({ value, handleInputChange }: any) => (
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

export default Input;
