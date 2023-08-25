import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { algorithms } from "../../constants/algorithmInfo";

const Home: React.FC = () => {
  return (
    <div className="main">
      <div className="text-center py-3">
        <h1 className="text-3xl font-bold">Sorting Algorithm Visualization</h1>
      </div>
      <div className="cards">
        {algorithms.map((algorithm) => (
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/2 p-4 text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "5px",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to={algorithm.link} key={algorithm.id}>
              <div
                className="bg-white rounded-lg shadow-lg p-6"
                style={{ backgroundColor: `${algorithm.background}` }}
              >
                <div className="text-xl mb-2">{algorithm.name}</div>
                <div className="text-gray-500 mb-2">
                  Time Complexity: {algorithm.timeComplexity}
                </div>
                <div className="text-gray-500">
                  Space Complexity: {algorithm.spaceComplexity}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-gray-500 text-center py-4">
        © 2023{" "}
        <a
          className="underline text-blue-400"
          href="https://riaadmorshed.github.io/portfolio/"
          target="_blank"
        >
          morshed
        </a>
        . All rights reserved.
      </div>
    </div>
  );
};

export default Home;
