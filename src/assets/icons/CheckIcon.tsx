import React from "react";

const SvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img" as const,
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "#000",
  strokeWidth: 0,
};

const CheckIcon: React.FC = () => {
  return (
    <svg {...SvgProps} aria-label="Check Icon">
      <g strokeWidth={0} />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 12.611 8.923 17.5 20 6.5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
