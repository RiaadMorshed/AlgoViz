import BubbleSortVisualizer from "./components/bubbleSort/BubbleSort";
import InsertionSortVisualizer from "./components/insertionSort/InsertionSort";
import SelectionSortVisualizer from "./components/selectionSort/SelectionSort";
import MergeSortVisualizer from "./components/mergeSort/mergeSort";
import QuickSortVisualizer from "./components/quickSort/QuickSort";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "bubble-sort",
      element: <BubbleSortVisualizer />,
    },
    {
      path: "insertion-sort",
      element: <InsertionSortVisualizer />,
    },
    {
      path: "selection-sort",
      element: <SelectionSortVisualizer />,
    },
    {
      path: "merge-sort",
      element: <MergeSortVisualizer />,
    },
    {
      path: "quick-sort",
      element: <QuickSortVisualizer />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
