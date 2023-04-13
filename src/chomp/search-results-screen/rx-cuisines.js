import React from "react";

const RxCuisines = ({ cuisines }) => {
  const cuisinesArray = cuisines.map((c) => c.title);
  return (
    <div className="mt-1">
      {cuisinesArray.map((c) => (
        <span className="badge bg-light wd-badge" key={c}>
          {c}
        </span>
      ))}
    </div>
  );
};
export default RxCuisines;
