import React, { useState, useEffect } from "react";

const SelectionSortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sortedIndexes, setSortedIndexes] = useState<number[]>([]);
  const [currentMinIndex, setCurrentMinIndex] = useState<number>(-1);

  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSortedIndexes([]);
    setCurrentMinIndex(-1);
  };

  const selectionSort = async () => {
    const n = array.length;
    const animations: [number, number, number][] = [];

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        animations.push([minIndex, j, 1]); // Comparing
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      animations.push([minIndex, i, 2]); // Swapping
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      animations.push([minIndex, i, 0]); // Reset color
      setSortedIndexes([...sortedIndexes, i]);
      setCurrentMinIndex(minIndex);
    }

    setSortedIndexes([...sortedIndexes, n - 1]);
    setCurrentMinIndex(-1);
  };

  return (
    <div>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${
              sortedIndexes.includes(index) ? "sorted" : ""
            } ${index === currentMinIndex ? "current-min" : ""}`}
            style={{ height: `${value}%` }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={generateRandomArray}>Generate New Array</button>
        <button onClick={selectionSort}>Selection Sort</button>
      </div>
    </div>
  );
};

export default SelectionSortVisualizer;
