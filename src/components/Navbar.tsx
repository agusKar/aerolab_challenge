import React, { useContext } from "react";
import coin from "~/assets/icons/coin.svg";
import logo from "~/assets/logo.svg";
import { AppContext } from "~/context";
import { AppContextInterface } from "~/types/appTypes";

const Navbar: React.FC = () => {
  const { coins, changeCoins } = useContext(AppContext) as AppContextInterface;
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeCoins?.();
  };
  return (
    <nav>
      <div className="py-2 px-4 flex flex-wrap items-center justify-between">
        <a href="./" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex flex-wrap items-center">
          <span>Jhon Kite</span>
          <span
            onClick={handleOnClick}
            className="flex flex-wrap items-center ml-4 bg-gray-200 rounded-full py-1 px-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            {coins}
            <img src={coin} alt="Coin Icon" className="pl-2" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
