import React from "react";

interface IProps {
  children?: React.ReactNode;
  onClick ?: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
