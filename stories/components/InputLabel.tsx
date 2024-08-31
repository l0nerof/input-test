export interface IInputLabelProps {
  htmlFor?: string;
  size?: "extra-small" | "medium" | "large" | "extra-large";
  labelValue: string;
  className?: string;
  darkMode?: boolean;
  position?: "top" | "side";
  disabled?: boolean;
}

function InputLabel({
  htmlFor = "email",
  size = "medium",
  labelValue = "Email",
  position = "top",
  className,
  darkMode,
  disabled,
}: IInputLabelProps) {
  const mode = darkMode ? "input-label--dark" : "";
  const disabledMode = disabled ? "input-label--disabled" : "";
  const positionClass = `input-label--${position}`;

  return (
    <label
      htmlFor={htmlFor}
      className={[
        "input-label",
        `input-label--${size}`,
        positionClass,
        disabledMode,
        mode,
        className,
      ].join(" ")}
    >
      {labelValue}
    </label>
  );
}

export default InputLabel;
