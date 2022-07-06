import React from "react";

const Button = ({
  onClick,
  className,
  children,
  type = "primary",
  full = false,
}) => {
  let bgColor = "bg-primary";

  switch (type) {
    case "primary":
      bgColor = "bg-primary";
      break;
    case "secondary":
      bgColor = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`py-2 px-6 rounded-lg ${bgColor} text-white 
        font-medium 
        ${full ? "w-full" : ""} 
        mt-auto hover:opacity-70 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
