import React, { createContext, useState } from "react";
import { AppContextInterface, Product } from "~/types/appTypes";

const coinsState = {
  coins: 1000,
};

const productsState: Product[] = [
  {
    _id: "5a033eeb364bf301523e9b92",
    name: "Sandalia Pale Gold YSL",
    cost: 400,
    category: "Indumentaria",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
    },
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
    },
  },
];

export const AppContext = createContext({} as AppContextInterface);

const AppProvider: React.FC = ({ children }) => {
  const [coins, setCoins] = useState<number>(coinsState.coins);
  const [products, setProducts] = useState<Product[]>(productsState);

  const changeCoins = () => {
    setCoins(coins + 1000);
  };


  return (
    <AppContext.Provider
      value={{ coins, changeCoins, products }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
