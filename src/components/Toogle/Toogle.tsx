interface ToogleProps {
  value?: boolean;
  onClickToogle?: () => void;
}

const Toogle = ({ onClickToogle, value = false }: ToogleProps) => {
  return (
    <button
      type="button"
      onClick={onClickToogle}
      aria-pressed={value}
      className={`relative h-[27px] w-[50px] cursor-pointer rounded-full transition-colors duration-200 ease-out ${value ? "bg-primary" : "bg-[#CBD5E1]"}`}
    >
      <div
        className={`absolute top-[3px] left-[3px] h-[21px] w-[21px] rounded-full bg-white shadow-sm transition-transform duration-200 ease-out ${value ? "translate-x-[23px]" : "translate-x-0"}`}
      />
    </button>
  );
};

export default Toogle;
