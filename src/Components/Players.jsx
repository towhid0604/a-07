const Players = () => {
  

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-bold">Available Players</h3>
        </div>
        <div className="flex gap-4 my-5">
          <button
            className={`py-3 px-5 rounded ${
              activePlayer === "available"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={availablePlayer}
          >
            Available
          </button>
          <button
            className={`py-3 px-5 rounded ${
              activePlayer === "selected"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={selectedPlayer}
          >
            Selected {}
          </button>
        </div>
      </div>
      <div className={activePlayer === "selected" ? "hidden" : ""}>
        <Cards />
      </div>
      <div className={activePlayer === "available" ? "hidden" : ""}>Sohan</div>

    </div>
  );
};

import Cards from "./Components/Cards";
import { useState } from "react";
export default Players;
