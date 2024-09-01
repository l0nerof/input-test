import InputLabel from "./InputLabel";
import InputText from "./InputText";
import { IInputTextProps } from "./InputText";
import { IInputLabelProps } from "./InputLabel";
import { ReactNode } from "react";

export interface IInputGroupProps extends IInputTextProps, IInputLabelProps {
  /**
   * Enable icon before input text.
   */
  iconBefore?: boolean;

  /**
   * Enable icon after input text.
   */
  iconAfter?: boolean;

  /**
   * Enable shortkey in the input text.
   */
  shortKey?: boolean;

  /**
   * Content to be displayed inside the input group, such as icons.
   */
  children?: ReactNode;

  /**
   * Flag to indicate if the input field is in an error state.
   */
  error?: boolean;
}

function InputGroup({
  iconBefore,
  iconAfter,
  shortKey,
  error,
  children,
  ...props
}: IInputGroupProps) {
  return (
    <div className="input-group">
      <div className="input-group--label-wrapper">
        <InputLabel {...props} />
        {children}
      </div>

      <InputText {...props}>
        {iconBefore && (
          <svg
            className={`input-group--iconBefore ${error ? "input-group--iconBefore--error" : ""}`}
          >
            <use href="/symbol-defs.svg#icon-search" />
          </svg>
        )}
        {iconAfter && (
          <svg
            className={`input-group--iconAfter ${error ? "input-group--iconAfter--error" : ""}`}
          >
            <use href="/symbol-defs.svg#icon-question" />
          </svg>
        )}
        {shortKey && (
          <svg className="input-group--shortkey">
            <use href="/symbol-defs.svg#icon-shortkey" />
          </svg>
        )}
      </InputText>
    </div>
  );
}

export default InputGroup;
