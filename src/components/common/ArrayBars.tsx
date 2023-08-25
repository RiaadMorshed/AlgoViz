import React from "react";
import propsType from "../../types/barPropsType";

const ArrayBar: React.FC<propsType> = ({ animatedArray, from, to }) => {
  return (
    <div className="array-container p-4 border border-gray-300 rounded-md shadow-md">
      {animatedArray.map((ele: number, indx: number) => (
        <div
          className={`array-bar bg-lime-600 ${
            indx === from ? "bg-red-500" : indx === to ? "bg-green-500" : ""
          }`}
          key={indx}
          style={{ height: `${20 * ele}px` }}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default ArrayBar;
