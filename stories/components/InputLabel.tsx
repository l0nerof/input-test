interface IInputLabelProps {
  id?: string;
  size?: "extra-small" | "medium" | "large" | "extra-large";
  value: string;
  className?: string;
  darkMode?: boolean;
  position?: "top" | "side";
}

function InputLabel({
  size = "medium",
  value = "Label",
  position = "top",
  className,
  darkMode,
}: IInputLabelProps) {
  const mode = darkMode ? "input-label--dark" : "";

  return (
    <label
      htmlFor=""
      className={["input-label", `input-label--${size}`, mode, className].join(
        " "
      )}
    >
      {value}
    </label>
  );
}

export default InputLabel;
