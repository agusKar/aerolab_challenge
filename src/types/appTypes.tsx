export interface AppContextInterface {
  coins: number;
  products: Product[];
  changeCoins?: () => void;
}
export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  }
}
export enum Filter {
  MostRecent = "mostRecent",
  LowestPrice = "lowestPrice",
  HighestPrice = "highestPrice"
}