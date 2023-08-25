import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRepeat, faHouse } from "@fortawesome/free-solid-svg-icons";
import ArrayBar from "./ArrayBars";
import algoLayout from "../../types/algoLayoutType";

const BarLayout: React.FC<algoLayout> = ({
  title,
  handleSort,
  handleReset,
  array,
}) => {
  return (
    <div className="p-4">
      <div className="text-center py-3 flex justify-around">
        <Link className="text-blue-500 underline" to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
        <h1 className="text-3xl font-bold">{title}</h1>
        <a></a>
      </div>
      <div className="m-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleSort}
        >
          Start Sorting <FontAwesomeIcon icon={faPlay} />
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
      <ArrayBar {...array} />
    </div>
  );
};
export default BarLayout;
