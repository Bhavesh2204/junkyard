import React from "react";
import { Card } from "antd";

interface CardProps {
  title?: React.ReactNode;
  bordered?: boolean;
  className?: string;
  hoverable?: boolean;
  children?: React.ReactNode;
  cover?: React.ReactNode;
}
const CardComponent: React.FC<CardProps> = ({
  title,
  bordered = false,
  className = "",
  hoverable = false,
  cover,
  children,
}) => (
  <Card
    title={title}
    cover={cover}
    bordered={bordered}
    hoverable={hoverable}
    className={` dark:bg-gray-800 dark:border-gray-700 ${className}`}
  >
    {children}
  </Card>
);

export default CardComponent;
