export interface IInputLabelProps {
  htmlFor?: string;

  /**
   * The size of the input label.
   * - `extra-small`: Smallest size
   * - `medium`: Default size
   * - `large`: Larger size
   * - `extra-large`: Largest size
   */
  size?: "extra-small" | "medium" | "large" | "extra-large";

  /**
   * The value of the input label.
   */
  labelValue: string;

  /**
   * Additional custom CSS classes.
   */
  className?: string;

  /**
   * Enable dark mode styling.
   */
  darkMode?: boolean;

  /**
   * Label positioning.
   * - `top`: Aligns label at the top
   * - `side`: Aligns label at the side
   */
  position?: "top" | "side";

  /**
   * Disable the input field.
   */
  disabled?: boolean;

  /**
   * Require the input field.
   */
  required?: boolean;

  /**
   * Add optional message to the input label.
   */
  optional?: boolean;

  /**
   * Use Asterisk mark in the label.
   */
  useAsterisk?: boolean;
}

function InputLabel({
  htmlFor = "email",
  size = "medium",
  labelValue = "Email",
  position = "top",
  className,
  darkMode,
  disabled,
  required = false,
  optional = false,
  useAsterisk = false,
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

      {required && useAsterisk && (
        <span className="input-label--asterisk"> *</span>
      )}
      {required && !useAsterisk && (
        <span className="input-label--required"> (required)</span>
      )}
      {optional && <span className="input-label--optional"> (optional)</span>}
    </label>
  );
}

export default InputLabel;
