import { ReactNode } from "react";

export interface IInputTextProps {
  id?: string;
  /**
   * The size of the input text.
   * - `extra-small`: Smallest size
   * - `medium`: Default size
   * - `large`: Larger size
   * - `extra-large`: Largest size
   */
  size?: "extra-small" | "medium" | "large" | "extra-large";

  /**
   * The value of the input field.
   */
  inputValue?: string;

  /**
   * Placeholder text shown in the input field.
   */
  placeholder?: string;

  /**
   * Additional custom CSS classes.
   */
  className?: string;

  /**
   * Enable dark mode styling.
   */
  darkMode?: boolean;

  /**
   * Quiet mode with no border.
   */
  quiet?: boolean;

  /**
   * Disable the input field.
   */
  disabled?: boolean;

  /**
   * Text alignment in the input field.
   * - `left`: Aligns text to the left
   * - `right`: Aligns text to the right
   */
  alignment?: "left" | "right";

  /**
   * Require the input field.
   */
  required?: boolean;

  /**
   * Require the input field.
   */
  children?: ReactNode;

  /**
   * Callback when the input field is focused.
   */
  onFocus?: () => void;

  /**
   * Callback when the input value changes.
   */
  onChange?: () => void;

  /**
   * Callback when the input field is clicked.
   */
  onClick?: () => void;
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
  required = false,
  children,
  onClick,
  onChange,
  onFocus,
}: IInputTextProps) {
  const mode = darkMode ? "input-text--dark" : "";
  const disabledMode = disabled ? "input-text--disabled" : "";
  const quietMode = quiet ? "input-text--quiet" : "";

  return (
    <div className="input-text--container">
      <input
        id={id}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={[
          "input-text",
          `input-text--${size}`,
          quietMode,
          disabledMode,
          mode,
          className,
        ].join(" ")}
        style={{
          textAlign: `${alignment}`,
        }}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
      />

      {children && <div className="input-text--icons">{children}</div>}
    </div>
  );
}

export default InputText;
