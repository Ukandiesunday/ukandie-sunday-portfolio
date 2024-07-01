import "./input.scss";
interface InputProps {
  register: any;
  label: string;
  errors: boolean;
  errorMessage: string;
  placeholder: string;
}
const Input = ({
  label,
  register,
  errors,
  errorMessage,
  placeholder,
}: InputProps) => {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <div className="inputContainer">
        <input placeholder={placeholder} name="" id={label} {...register} />
      </div>
      {errors && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
