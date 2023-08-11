import "./App.css";
import BubbleSortVisualizer from "./components/bubbleSort/BubbleSort";
import InsertionSortVisualizer from "./components/insertionSort/InsertionSort";
import SelectionSortVisualizer from "./components/selectionSort/SelectionSort";

function App() {
  return (
    <div className="main">
      <BubbleSortVisualizer />
      <SelectionSortVisualizer />
      <InsertionSortVisualizer />
    </div>
  );
}

export default App;
