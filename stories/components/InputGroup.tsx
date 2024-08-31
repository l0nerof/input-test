import InputLabel from "./InputLabel";
import InputText from "./InputText";
import { IInputTextProps } from "./InputText";
import { IInputLabelProps } from "./InputLabel";

interface IInputGroupProps extends IInputTextProps, IInputLabelProps {
  iconBefore?: boolean;
  iconAfter?: boolean;
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
      <InputText {...props} />
    </div>
  );
}

export default InputGroup;
