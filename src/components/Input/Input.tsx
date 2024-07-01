import "./input.scss";
interface InputProps {
  register: any;
  label: string;
  errors: boolean;
  errorMessage: string;
  icon?: any;
}
const Input = ({ label, register, errors, errorMessage, icon }: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <div className="inputContainer">
        <span>{icon}</span>{" "}
        <input type="text" name="" id={label} {...register} />
      </div>
      {errors && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
