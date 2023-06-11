/**
 * @param {string | ReactNode}  children - принимает текст или дочерний компонент.
 * @param {string}  className - принимает строку стилистики tailwind.
 * @param {"green" | "black"}  variant - принимает одно из 2 значений. 1 - цвет кнопки зелёный, 2 - чёрный
 */

const Button = ({
  children,
  className,
  disabled,
  variant = "green",
  ...props
}) => {
  if (variant === "green") {
    return (
      <button
        disabled={disabled}
        className={`flex items-center justify-center rounded-[3px]
        font-medium
        bg-[#78B547] hover:bg-[#8FD457]
         ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "black") {
    return (
      <button
        disabled={...disabled}
        className={`flex items-center justify-center rounded-[3px]
        font-medium
        bg-[#303030] hover:bg-[#78B547]
        ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;