import classes from "./Input.module.css";

const Input = ({ label, id, onChange, onBlur, state, type }) => {
  return (
    <div
      className={`${classes.control} ${
        state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={state.value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
