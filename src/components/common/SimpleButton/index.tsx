import React from "react";
import { Button } from "antd";

interface ButtonProps {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  disabled?: boolean;
  size?: "large" | "middle" | "small";
  shape?: "default" | "circle" | "round";
  onClick?: () => void;
  onMouseOver?: () => void;
  className?: string;
  children: React.ReactNode;
}

const SimpleButton: React.FC<ButtonProps> = ({
  type = "primary",
  disabled = false,
  size = "middle",
  shape = "default",
  onClick,
  onMouseOver,
  children,
  className = "",
}) => {
  return (
    <Button
      shape={shape}
      type={type}
      size={size}
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
