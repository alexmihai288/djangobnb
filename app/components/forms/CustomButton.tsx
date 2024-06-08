import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const CustomButton = ({
  label,
  onClick,
  className,
}: CustomButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb text-center hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};
