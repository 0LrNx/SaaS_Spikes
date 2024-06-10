import React from "react";

interface ButtonProps {
  color: string;
  colorText: string;
  border: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button 
      className={`${props.color} ${props.colorText} h-[40px] px-[20px] py-[8px] rounded-full ${props.border}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
