// HomePageSection.tsx
import { Space, Typography } from "antd";
import React from "react";
import styles from "../../styles/HomePageSection.module.css"; 

interface SectionProps {
  text?: string;
  title?: string;
  paragraph?: string;
  className?: string;
  isDarkMode?: boolean;
  children?: React.ReactNode;
  textClassName?:string;
  titleClassName?:string;
  paragraphClassName?:string
}

const HomePageSection: React.FC<SectionProps> = ({
  text = "",
  title = "",
  paragraph = "",
  className = "",
  isDarkMode = false,
  textClassName,
  paragraphClassName,
  titleClassName,
  children,
}) => {
  return (
    <div className={`${className} ${isDarkMode ? styles.dark : ""}`}>
      <Space direction="vertical">
      <Typography.Text className={`${textClassName} ${styles.text}`}>
        {text}
      </Typography.Text>
      <Typography className={`${titleClassName} ${styles.title}`}>
        {title}
      </Typography>
      <Typography.Paragraph className={`${paragraphClassName} ${styles.paragraph}`}>
        {paragraph}
      </Typography.Paragraph>
      {children}
      </Space>
    </div>
  );
};

export default HomePageSection;
