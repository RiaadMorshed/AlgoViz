import React, { useState } from "react";
import propsType from "../../types/barPropsType";
import { initialArray } from "../../constants/initialArray";
import BarLayout from "../common/BarLayout";

const QuickSortVisualizer: React.FC = () => {
  const [sortingArray, setSortingArray] = useState<propsType>({
    animatedArray: [...initialArray],
    from: -1, // Initialize with -1
    to: -1, // Initialize with -1
  });
  const [arr, setArr] = useState<number[]>([...initialArray]);

  const quickSort = async (arr: number[], left: number, right: number) => {
    if (left < right) {
      const pivotIndex = await partition(arr, left, right);
      await quickSort(arr, left, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, right);
    }
  };

  const partition = async (arr: number[], left: number, right: number) => {
    const pivotValue = arr[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        // Swap elements and update state
        let temp = arr[i];
        arr[i] = arr[pivotIndex];
        arr[pivotIndex] = temp;
        setSortingArray({
          animatedArray: arr,
          from: pivotIndex,
          to: i,
        });
        pivotIndex++;
        // Wait for a short delay before the next step
        await new Promise<void>((resolve) => setTimeout(resolve, 50));
      }
    }

    // Swap pivot element and update state
    let temp = arr[right];
    arr[right] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    setSortingArray({
      animatedArray: arr,
      from: pivotIndex,
      to: right,
    });
    // Wait for a short delay before the next step
    await new Promise<void>((resolve) => setTimeout(resolve, 50));

    return pivotIndex;
  };

  const handleSortClick = async () => {
    await quickSort(arr, 0, arr.length - 1);
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
      title="Quick Sort"
      handleSort={handleSortClick}
      handleReset={handleReset}
      array={sortingArray}
    />
  );
};

export default QuickSortVisualizer;
