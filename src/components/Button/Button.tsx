export interface ButtonProps {
  variant: "primary" | "secondary";
  label: string;
}

const Button = ({ label, variant }: ButtonProps) => {
  const variantStyling = (variant: "primary" | "secondary") => {
    if (variant === "primary") {
      return "text-white bg-primary rounded-[12px] text-sm font-semibold px-[18px] py-[14px] cursor-pointer duration-200 hover:bg-[#0f285e]";
    }
    if (variant === "secondary") {
      return "bg-white rounded-[12px] border border-[#E5E7EB] text-sm font-semibold px-[18px] py-[14px] cursor-pointer duration-200 hover:bg-[#E5E7EB]";
    }

    return "text-white bg-primary rounded-[12px] text-sm font-semibold px-[18px] py-[14px] cursor-pointer duration-200 hover:bg-[#0f285e]";
  };
  return <button className={variantStyling(variant)}>{label}</button>;
};

export default Button;
