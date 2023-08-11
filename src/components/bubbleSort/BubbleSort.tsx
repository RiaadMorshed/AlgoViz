import React, { useState } from "react";

const BubbleSortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sortedIndexes, setSortedIndexes] = useState<number[]>([]);
  const [comparingIndexes, setComparingIndexes] = useState<number[]>([]);
  const [swappedIndexes, setSwappedIndexes] = useState<number[]>([]);

  // Generate a random array of numbers
  const generateRandomArray = () => {
    const newArray: number[] = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSortedIndexes([]);
    setComparingIndexes([]);
    setSwappedIndexes([]);
  };

  // Bubble sort algorithm
  const bubbleSort = async () => {
    let tempArray: number[] = array.slice();
    let animations: [number, number][] = [];

    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        animations.push([j, j + 1]);

        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          animations.push([j, j + 1]);
        }
      }
      setSortedIndexes((indexes) => [tempArray.length - i - 1, ...indexes]);
    }

    for (const [index1, index2] of animations) {
      setComparingIndexes([index1, index2]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setSwappedIndexes([index1, index2]);
      [tempArray[index1], tempArray[index2]] = [
        tempArray[index2],
        tempArray[index1],
      ];
      setArray([...tempArray]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setComparingIndexes([]);
      setSwappedIndexes([]);
    }
  };

  return (
    <div>
      <div className="array">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar 
              ${sortedIndexes.includes(index) ? "sorted" : ""}
              ${comparingIndexes.includes(index) ? "comparing" : ""}
              ${swappedIndexes.includes(index) ? "swapped" : ""}`}
            style={{ height: `${value * 3}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={generateRandomArray}>Generate New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default BubbleSortVisualizer;
