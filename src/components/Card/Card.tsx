import Badge from "../Badge/Badge";

interface BaseCardProps {
  label: string;
  badge: "success" | "progress" | "overdue";
  badgeLabel: string;
}

interface StatCardProps extends BaseCardProps {
  type: "stat";
  value: string | number;
}

interface TaskCardProps extends BaseCardProps {
  type: "task";
  dueDate: string | Date;
  priority: "HIGH" | "MEDIUM" | "LOW";
  assigned: string;
}

type CardProps = StatCardProps | TaskCardProps;

const StatCard = ({ label, value, badge, badgeLabel }: StatCardProps) => {
  return (
    <div className="w-full border rounded-[18px] border-[#E5E7EB] py-[1.125rem] px-[1.25rem]">
      <p className="m-0 text-muted font-medium text-[0.875rem]">{label}</p>
      <p className="mt-[0.875rem] mb-[0.25rem] font-bold text-[1.875rem]">
        {value}
      </p>
      <Badge label={badgeLabel} variant={badge} />
    </div>
  );
};

const TaskCard = ({
  label,
  dueDate,
  priority,
  badge,
  badgeLabel,
  assigned,
}: TaskCardProps) => {
  return (
    <div className="w-full border rounded-[18px] border-[#E5E7EB] p-[1rem]">
      <p className="m-0 font-bold text-[0.875rem]">{label}</p>
      <p className="mt-[0.5rem] mb-[0.75rem] text-[0.75rem] text-muted capitalize">
        {dueDate.toString()} • {priority.toLowerCase()} Priority
      </p>
      <div className="flex justify-between items-center">
        <Badge label={badgeLabel} variant={badge} />

        <div className="flex justify-between items-center">
          <div className="uppercase flex justify-center items-center rounded-full h-[22px] w-[22px] bg-primary text-[0.625rem] text-white mr-[0.375rem]">
            {assigned.charAt(0)}
          </div>
          <p className="text-muted text-xs ">{assigned}</p>
        </div>
      </div>
    </div>
  );
};

const Card = (props: CardProps) => {
  if (props.type === "stat") {
    return <StatCard {...props} />;
  }

  return <TaskCard {...props} />;
};

export default Card;
