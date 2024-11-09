import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const coinHandle = () => {
    const newCoin = coin + 9000000;
    setCoin(newCoin);
  };
  const [activePlayer, setActivePlayer] = useState("available");

  const availablePlayer = () => {
    setActivePlayer("available");
  };

  const selectedPlayer = () => {
    setActivePlayer("selected");
  };
  const handlePlayerSelection = (biddingPrice) => {
    setCoin((prevCoin) => {
      if (prevCoin >= biddingPrice) {
        return prevCoin - biddingPrice;
      } else {
        alert("You do not have enough coins!");
        return prevCoin;
      }
    });
  };

  return (
    <>
      <Header coin={coin} />
      <div className="container mx-auto mt-5">
        <Banner coinHandle={coinHandle} />
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
            <div className="mt-10">
              <Cards onPlayerSelect={handlePlayerSelection} />
            </div>
          </div>
          <div className={activePlayer === "available" ? "hidden" : ""}></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
