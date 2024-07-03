import "./button.scss";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  icon?: any;
  type?: any;
}
const Button = ({ onClick, className, label, icon, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
