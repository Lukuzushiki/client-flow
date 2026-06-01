import Badge from "../Badge/Badge";

interface CardProps {
  label: string;
  value: string | number;
  badge: "success" | "progress" | "overdue";
  badgeLabel: string;
}
const Card = ({ label, value, badge, badgeLabel }: CardProps) => {
  return (
    <div className="min-w-[220px] border rounded-[18px] border-[#E5E7EB] py-[1.125rem] px-[1.25rem]">
      <p className="m-0 text-[#64748B] font-medium text-[0.875rem]">{label}</p>
      <p className="mt-[0.875rem] mb-[0.25rem] font-bold text-[1.875rem]">
        {value}
      </p>
      <Badge label={badgeLabel} variant={badge} />
    </div>
  );
};

export default Card;
