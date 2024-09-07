export const Button = ({
  children,
  disabled,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-blue-700 py-4 px-5 min-w-20 text-slate-100 rounded-lg font-medium  ${
        disabled ? "cursor-not-allowed bg-slate-500" : ""
      }`}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
