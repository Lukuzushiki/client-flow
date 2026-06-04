interface ProgressBarProps {
  value?: number;
  max?: number;
}

const ProgressBar = ({ value = 20, max = 100 }: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="h-4 w-full overflow-hidden rounded-full bg-[#E8EDF4]">
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
