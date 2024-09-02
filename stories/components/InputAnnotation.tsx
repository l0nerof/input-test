import InputGroup, { IInputGroupProps } from "./InputGroup";

export type { IInputGroupProps } from "./InputGroup.tsx";

interface IInputAnnotationProps extends IInputGroupProps {
  infoIcon?: boolean;
  helpText?: string;

  helpIconText?: string;

  /**
   * Enable dark mode styling.
   */
  darkMode?: boolean;

  /**
   * Flag to indicate if the input field is in an error state.
   */
  error?: boolean;
}

function InputAnnotation({
  infoIcon,
  helpText,
  darkMode,
  helpIconText,
  error,
  ...props
}: IInputAnnotationProps) {
  const mode = darkMode ? "input-annotation--helpText--dark" : "";
  const errorMode = error ? "input-annotation--helpText--error" : "";

  return (
    <div className="input-annotation">
      <InputGroup {...props} error={error} darkMode={darkMode}>
        {infoIcon && (
          <div className="input-annotation--wrapper">
            <svg className="input-annotation--infoIcon">
              <use href="/symbol-defs.svg#icon-help" />
            </svg>

            {helpIconText && (
              <div
                className={`input-annotation--tooltip ${darkMode ? "input-annotation--tooltip--dark" : ""}`}
              >
                {helpIconText}
              </div>
            )}
          </div>
        )}
      </InputGroup>

      {helpText && (
        <p
          className={["input-annotation--helpText", errorMode, mode].join(" ")}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export default InputAnnotation;
