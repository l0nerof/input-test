interface IInputTextProps {
  id?: string;
  size?: "extra-small" | "medium" | "large" | "extra-large";
  value?: string;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  alignment?: "left" | "right";
}

function InputText({
  id,
  size = "medium",
  value = "",
  placeholder = "Input...",
  className,
  darkMode,
  quiet = false,
  disabled = false,
  alignment = "left",
}: IInputTextProps) {
  const mode = darkMode ? "input-text--dark" : "";
  const disabledMode = disabled ? "input-text--disabled" : "";

  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={[
        "input-text",
        `input-text--${size}`,
        disabledMode,
        mode,
        className,
      ].join(" ")}
      style={{
        border: `${quiet ? "none" : "1px solid #d1d1d6"}`,
        textAlign: `${alignment}`,
      }}
    />
  );
}

export default InputText;
