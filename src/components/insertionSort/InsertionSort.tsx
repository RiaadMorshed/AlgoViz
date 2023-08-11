import React, { useState, useEffect } from "react";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 100) + 10
    );
    setArray(newArray);
  };

  const selectionSort = async () => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        await sleep(100); // Add a delay for visualization
        swap(i, minIndex);
      }
    }
  };

  const swap = (index1: number, index2: number) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    setArray([...array]);
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="sorting-visualizer">
      {array.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${value * 2}px` }}>
          {value}
        </div>
      ))}
      <div className="controls">
        <button onClick={generateRandomArray}>Generate New Array</button>
        <button onClick={selectionSort}>Insertion Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
