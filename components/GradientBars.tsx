import React from "react";

interface GradientBarsProps {
  colors?: [string, string];
  barCount?: number;
  maxHeight?: number;
  minHeight?: number;
}

const GradientBars: React.FC<GradientBarsProps> = ({
  colors = ["#F97316", "#FBBF24"],
  barCount = 8,
  maxHeight = 800,
  minHeight = 85,
}) => {
  const heights = Array.from(
    { length: barCount },
    (_, i) => maxHeight - ((maxHeight - minHeight) / (barCount - 1)) * i,
  );

  const allHeights = [...heights, ...heights.slice().reverse()];

  return (
    <div className="absolute bottom-0 left-0 w-full flex items-end justify-between">
      {allHeights.map((h, idx) => (
        <div
          key={idx}
          style={{
            height: `${h}px`,
            width: `${100 / allHeights.length}%`,
            background: `linear-gradient(to top, ${colors[0]}, ${colors[1]}00)`,
          }}
        />
      ))}
    </div>
  );
};

export default GradientBars;
