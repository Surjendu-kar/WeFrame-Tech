import { useState } from "react";

const HeartIcon = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ cursor: "pointer" }}>
      <svg
        width="27"
        height="25"
        viewBox="0 0 24 24"
        onClick={() => setIsActive(!isActive)}
      >
        <path
          d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248"
          fill={isActive ? "#EE4197" : "transparent"}
          stroke={isActive ? "#EE4197" : "black"}
          strokeWidth="1"
        />
      </svg>
      <style>{`
        svg path {
          transition: all 0.2s ease;
        }
        svg:hover path:not([fill='#EE4197']) {
          fill: #7C5368;
          stroke: #7C5368;
        }
      `}</style>
    </div>
  );
};

export default HeartIcon;
