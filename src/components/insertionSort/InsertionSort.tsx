import React, { useState } from "react";
import propsType from "../../types/barPropsType";
import { initialArray } from "../../constants/initialArray";
import BarLayout from "../common/BarLayout";

const InsertionSortVisualizer: React.FC = () => {
  const [sortingArray, setSortingArray] = useState<propsType>({
    animatedArray: [...initialArray],
    from: -1, // Initialize with -1
    to: -1, // Initialize with -1
  });
  const [array, setArray] = useState<number[]>([...initialArray]);
  const insertionSort = async () => {
    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        // Swap elements and update state
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        setSortingArray({
          animatedArray: array,
          from: j - 1,
          to: j,
        });
        j--;

        // Wait for a short delay before the next step
        await new Promise<void>((resolve) => setTimeout(resolve, 50));
      }
    }
  };

  const handleReset = () => {
    setArray([...initialArray]);
    setSortingArray({
      animatedArray: [...initialArray],
      from: -1,
      to: -1,
    });
  };

  return (
    <BarLayout
      title="Insertion Sort"
      handleSort={insertionSort}
      handleReset={handleReset}
      array={sortingArray}
    />
  );
};

export default InsertionSortVisualizer;
