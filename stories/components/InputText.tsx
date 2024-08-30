interface IInputTextProps {
  id?: string;
  size?: "extra-small" | "medium" | "large" | "extra-large";
  value?: string;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
}

function InputText({
  id,
  size = "medium",
  value = "User Value",
  placeholder,
  className,
  darkMode,
}: IInputTextProps) {
  const mode = darkMode ? "input-text--dark" : "";

  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      className={["input-text", `input-text--${size}`, mode, className].join(
        " "
      )}
    />
  );
}

export default InputText;
