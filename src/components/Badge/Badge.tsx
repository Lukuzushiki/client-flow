export interface BadgeProps {
  variant: "success" | "progress" | "overdue" | "paused" | "review" | "plan";
  label: string;
}

const Badge = ({ label, variant }: BadgeProps) => {
  const variantStyling = (
    variant: "success" | "progress" | "overdue" | "paused" | "review" | "plan",
  ) => {
    if (variant === "success") {
      return "inline-flex w-fit items-center text-success bg-[#DCFCE7] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }
    if (variant === "progress") {
      return "inline-flex w-fit items-center text-primary bg-[#DBEAFE] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }
    if (variant === "overdue") {
      return "inline-flex w-fit items-center text-danger bg-[#FEE2E2] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }
    if (variant === "paused") {
      return "inline-flex w-fit items-center text-[#64748B] bg-[#EEF1F6] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }
    if (variant === "review") {
      return "inline-flex w-fit items-center text-[#D97706] bg-[#FEF3C7] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }
    if (variant === "plan") {
      return "inline-flex w-fit items-center text-[#7C3AED] bg-[#EDE9FE] rounded-full text-xs font-medium px-[12px] py-[7px]";
    }

    return "inline-flex w-fit items-center text-white bg-primary rounded-full text-sm font-semibold px-[18px] py-[14px] cursor-pointer duration-200 hover:bg-[#0f285e]";
  };
  return <div className={variantStyling(variant)}>{label}</div>;
};

export default Badge;
