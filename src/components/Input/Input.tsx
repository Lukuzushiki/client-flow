interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

const Input = ({
  placeholder = "Type text here",
  type = "text",
  inputClassName,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`text-sm px-[1rem] py-[1.25rem] border border-[1px] border-[#E5E7EB] rounded-xl focus:border-[#2563EB] focus:outline-none ${inputClassName}`}
      {...props}
    />
  );
};

export default Input;
