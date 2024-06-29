interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  icon?: any;
}
const Button = ({ onClick, className, label, icon }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
