import InputGroup, { IInputGroupProps } from "./InputGroup";

export type { IInputGroupProps } from "./InputGroup.tsx";

interface IInputAnnotationProps extends IInputGroupProps {
  infoIcon?: boolean;
  helpText?: string;

  /**
   * Flag to indicate if the input field is in an error state.
   */
  error?: boolean;
}

function InputAnnotation({
  infoIcon,
  helpText,
  error,
  ...props
}: IInputAnnotationProps) {
  return (
    <div className="input-annotation">
      <InputGroup {...props}>
        {infoIcon && (
          <svg className="input-annotation--infoIcon">
            <use href="/symbol-defs.svg#icon-help" />
          </svg>
        )}
      </InputGroup>

      {helpText && (
        <p
          className={`input-annotation--helpText ${error ? "input-annotation--helpText--error" : ""}`}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export default InputAnnotation;
