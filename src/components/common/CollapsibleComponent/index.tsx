import {
  DownOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";

interface AccordianItem {
  key?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
}

interface AccordianProps {
  items?: AccordianItem[];
  className?: string;
  iconClassName?: string;
  bordered?: boolean;
}
const CollapsibleComponent: React.FC<AccordianProps> = ({
  items = [
    {
      key: "1",
      label: "This is default size panel header",
      children: (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          quidem nostrum, magnam officia eum corrupti, quisquam assumenda nemo
          iure libero quasi! Pariatur optio id quibusdam voluptatibus impedit
          quod autem consectetur.
        </p>
      ),
    },
  ],
  className,
  iconClassName,
  bordered = false,
}) => {
  return (
    <>
      <Collapse
        items={items}
        expandIcon={({ isActive }) => (
          <DownOutlined
            rotate={isActive ? 180 : 0}
            className={` ${iconClassName}`}
          />
        )}
        className={className}
        bordered={bordered}
      />
    </>
  );
};

export default CollapsibleComponent;
