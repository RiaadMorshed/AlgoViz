import React, { useState } from "react";
import propsType from "../../types/barPropsType";
import { initialArray } from "../../constants/initialArray";
import BarLayout from "../common/BarLayout";

const BubbleSortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([...initialArray]);

  const [sortingArray, setSortingArray] = useState<propsType>({
    animatedArray: [...initialArray],
    from: -1,
    to: -1,
  });

  const bubbleSort = async () => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          // Swap elements and update state
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          setSortingArray({
            animatedArray: array,
            from: i,
            to: i + 1,
          });
          swapped = true;
          // Wait for a short delay before the next step
          await new Promise<void>((resolve) => setTimeout(resolve, 50));
        }
      }
    } while (swapped);
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
      title="Bubble Sort"
      handleSort={bubbleSort}
      handleReset={handleReset}
      array={sortingArray}
    />
  );
};
export default BubbleSortVisualizer;
