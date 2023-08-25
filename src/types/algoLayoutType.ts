type algoLayout = {
  title: string;
  handleSort: () => void;
  handleReset: () => void;
  array: {
    animatedArray: number[];
    from: number;
    to: number;
  };
};
export default algoLayout;
