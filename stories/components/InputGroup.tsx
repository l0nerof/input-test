import InputLabel from "./InputLabel";
import InputText from "./InputText";
import { IInputTextProps } from "./InputText";
import { IInputLabelProps } from "./InputLabel";

interface IInputGroupProps extends IInputTextProps, IInputLabelProps {
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
}

function InputGroup({
  iconBefore,
  iconAfter,
  shortKey,
  ...props
}: IInputGroupProps) {
  return (
    <div className="input-group">
      <InputLabel {...props} />

      <InputText {...props}>
        {iconBefore && (
          <svg className="input-group--iconBefore">
            <use href="/symbol-defs.svg#icon-search" />
          </svg>
        )}
        {iconAfter && (
          <svg className="input-group--iconAfter">
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
