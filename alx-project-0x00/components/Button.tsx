import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`text-white px-4 py-2 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
