import React, { useState, useEffect } from "react";

const InsertionSortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sortedIndexes, setSortedIndexes] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Generate a random array of numbers
  const generateRandomArray = () => {
    const newArray: number[] = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSortedIndexes([]);
    setCurrentIndex(null);
  };

  // Insertion sort algorithm
  const insertionSort = async () => {
    let tempArray: number[] = array.slice();
    let animations: [number, number][] = [];

    for (let i = 1; i < tempArray.length; i++) {
      let j = i;
      while (j > 0 && tempArray[j] < tempArray[j - 1]) {
        animations.push([j, j - 1]);
        [tempArray[j], tempArray[j - 1]] = [tempArray[j - 1], tempArray[j]];
        j--;
      }
    }

    for (const [index1, index2] of animations) {
      setCurrentIndex(index2);
      await new Promise((resolve) => setTimeout(resolve, 300));
      [tempArray[index1], tempArray[index2]] = [
        tempArray[index2],
        tempArray[index1],
      ];
      setArray([...tempArray]);
    }

    setSortedIndexes([...Array(tempArray.length).keys()]);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  return (
    <div>
      <div className="array">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${
              sortedIndexes.includes(index) ? "sorted" : ""
            } ${index === currentIndex ? "current" : ""}`}
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
      <button onClick={generateRandomArray}>Generate New Array</button>
      <button onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
};

export default InsertionSortVisualizer;
