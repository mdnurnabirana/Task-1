type ButtonOneProps = {
  children: string;
  extraClass?: string;
};

const ButtonOne = ({ children, extraClass = "" }: ButtonOneProps) => {
  return (
    <button
      type="button"
      className={`bg-[#4A69E2] py-2 sm:py-4 px-4 sm:px-8 uppercase text-white rounded-lg font-medium text-sm ${extraClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonOne;