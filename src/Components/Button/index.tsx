type ButtonType = "Primary" | "Secondary" | "Inline";

interface PropsTypes {
  label: String;
  type?: ButtonType;
  onClick?: () => void;
  action?: "submit" | "button";
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  label,
  type = "Primary",
  onClick,
  action = "button",
  disabled = false,
  loading = false,
}: PropsTypes) => {
  return (
    <button
      className={` ${
        disabled ? `opacity-50` : `opacity-100`
      } border-black border rounded p-1 bg-slate-400 m-4`}
      onClick={() => !loading && onClick?.()}
      type={action}
      disabled={loading || disabled}
    >
      {label}
    </button>
  );
};

export default Button;
