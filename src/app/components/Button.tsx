import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  onClick?: () => void; // Add onClick prop
};

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-2 -ml-2 md:-ml-0 w-full rounded-full border ${variant}`}
      type={type}
      onClick={onClick} // Pass onClick to the button element
    >
      <label className="font-[500] whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  );
};

export default Button;