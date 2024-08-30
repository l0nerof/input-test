interface IInputLabelProps {
  id?: string;
  size?: "extra small" | "medium" | "large" | "extra large";
  value?: string;
  className?: string;
  darkMode?: boolean;
}

function InputLabel({ size = "medium" }: IInputLabelProps) {
  return <label htmlFor=""></label>;
}

export default InputLabel;
