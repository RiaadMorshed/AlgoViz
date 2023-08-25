import React, { useState } from "react";
import { initialArray } from "../../constants/initialArray";
import propsType from "../../types/barPropsType";
import BarLayout from "../common/BarLayout";

const SelectionSortVisualizer: React.FC = () => {
  const [sortingArray, setSortingArray] = useState<propsType>({
    animatedArray: [...initialArray],
    from: -1, // Initialize with -1
    to: -1, // Initialize with -1
  });
  const [arr, setArr] = useState<number[]>([...initialArray]);

  const selectionSort = async () => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements and update state
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        setSortingArray({
          animatedArray: arr,
          from: i,
          to: minIndex,
        });
      }

      // Wait for a short delay before the next step
      await new Promise<void>((resolve) => setTimeout(resolve, 50));
    }
  };

  const handleReset = () => {
    setArr([...initialArray]);
    setSortingArray({
      animatedArray: [...initialArray],
      from: -1,
      to: -1,
    });
  };

  return (
    <BarLayout
      title="Selection Sort"
      handleSort={selectionSort}
      handleReset={handleReset}
      array={sortingArray}
    />
  );
};

export default SelectionSortVisualizer;
