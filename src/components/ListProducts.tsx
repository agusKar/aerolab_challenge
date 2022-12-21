import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "~/context";
import {Filter, Product} from '~/types/appTypes'
import Filters from './Filters';

const ListProducts = () => {
  const { products } = useContext(AppContext);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>(products)
  const [filter, setFilter] = useState<Filter>(Filter.MostRecent)

  const orderProducts = (filter: Filter) => {
    switch (filter) {
      case Filter.HighestPrice:
        return [...products].sort((a, b) => b.cost - a.cost);

      case Filter.LowestPrice:
        return [...products].sort((a, b) => a.cost - b.cost);

      case Filter.MostRecent:
      default:
        return products;
    }
  };
  useEffect(() => {    
    setProductsFiltered(orderProducts(filter))
  }, [filter])
  
  return (
    <div className="container mx-auto 2xl:px-10">
      <Filters filter={filter} setFilter={setFilter} />
      {productsFiltered.map((product) => (
        // Llevar esto a un componente propio
        <ul className="mb-5" key={product._id}>
          <li>{product._id}</li>
          <li>{product.name}</li>
          <li>{product.cost}</li>
          <li><img src={product.img.url} alt={product.name} /></li>
          <li>{product.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListProducts;

const fn = () => "asd";
