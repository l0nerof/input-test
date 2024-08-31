export interface IInputTextProps {
  id?: string;
  size?: "extra-small" | "medium" | "large" | "extra-large";
  inputValue?: string;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  alignment?: "left" | "right";
}

function InputText({
  id = "email",
  size = "medium",
  inputValue = "",
  placeholder = "Input...",
  className,
  darkMode,
  quiet = false,
  disabled = false,
  alignment = "left",
}: IInputTextProps) {
  const mode = darkMode ? "input-text--dark" : "";
  const disabledMode = disabled ? "input-text--disabled" : "";
  const quietMode = quiet ? "input-text--quiet" : "";

  return (
    <input
      id={id}
      value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      className={[
        "input-text",
        `input-text--${size}`,
        quietMode,
        disabledMode,
        mode,
        className,
      ].join(" ")}
      style={{
        // border: `${quiet ? "none" : "1px solid #d1d1d6"}`,
        textAlign: `${alignment}`,
      }}
    />
  );
}

export default InputText;
