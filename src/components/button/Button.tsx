import "./button.scss";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  icon?: any;
  type?: any;
  disabled?: boolean;
}
const Button = ({
  onClick,
  className,
  label,
  icon,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`button ${className}`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
