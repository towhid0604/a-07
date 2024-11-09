const Header = ({ coin }) => {
  return (
    <div className="py-5 sticky top-0 z-50 bg-white shadow-md">
      <div className=" mx-auto container flex justify-between items-center ">
        <div>
          <img src="../src/assets/logo.png" alt="Logo" />
        </div>
        <div className="flex text-2xl gap-5 items-center">
          <ul className="flex gap-5 text-gray-500">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <button className="flex gap-3 items-center border py-2 px-5 rounded-lg border-black">
            {coin} Coin
            <FaCoins />
          </button>
        </div>
      </div>
    </div>
  );
};

import { FaCoins } from "react-icons/fa6";

export default Header;
