import React, { useState } from "react";
import propsType from "../../types/barPropsType";
import { initialArray } from "../../constants/initialArray";
import BarLayout from "../common/BarLayout";

const MergeSortVisualizer: React.FC = () => {
  const [sortingArray, setSortingArray] = useState<propsType>({
    animatedArray: [...initialArray],
    from: -1, // Initialize with -1
    to: -1, // Initialize with -1
  });
  const [arr, setArr] = useState<number[]>([...initialArray]);

  const mergeSort = async (arr: number[], left: number, right: number) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      await mergeSort(arr, left, mid);
      await mergeSort(arr, mid + 1, right);

      await merge(arr, left, mid, right);
    }
  };

  const merge = async (
    arr: number[],
    left: number,
    mid: number,
    right: number
  ) => {
    const temp: number[] = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        j++;
      }
    }

    while (i <= mid) {
      temp.push(arr[i]);
      i++;
    }

    while (j <= right) {
      temp.push(arr[j]);
      j++;
    }

    for (let k = left; k <= right; k++) {
      arr[k] = temp[k - left];
      setSortingArray({
        animatedArray: arr,
        from: left,
        to: right,
      });
      // Wait for a short delay before the next step
      await new Promise<void>((resolve) => setTimeout(resolve, 50));
    }
  };

  const handleSortClick = async () => {
    await mergeSort(arr, 0, arr.length - 1);
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
      title="Merge Sort"
      handleSort={handleSortClick}
      handleReset={handleReset}
      array={sortingArray}
    />
  );
};

export default MergeSortVisualizer;
