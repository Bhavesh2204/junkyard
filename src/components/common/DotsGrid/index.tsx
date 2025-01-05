import React from "react";

interface DotGridProps {
  rows: number;
  columns: number;
  dotSize: number;
  dotColor: string;
  width: number;
  height: number;
  className?: string;
}

const DotsGrid: React.FC<DotGridProps> = ({
  rows = 12,
  columns = 12,
  dotSize = 4,
  dotColor,
  width = 140,
  height = 164,
  className,
}) => {
  const circles = [];
  const radius = dotSize / 2;

  const xStep = (width - dotSize) / (columns - 1);
  const yStep = (height - dotSize) / (rows - 1);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const cx = col * xStep + radius;
      const cy = row * yStep + radius;
      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          r={radius}
          fill={dotColor}
        />
      );
    }
  }

  return (
    <div className={`${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {circles}
      </svg>
    </div>
  );
};

export default DotsGrid;
