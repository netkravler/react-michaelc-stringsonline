import { useEffect, useState } from "react";
import appService from "../../Components/App/Appservices/App.service";
import { ProductCard, ProductDetails } from './ProductBlocks'
import {  useParams } from "react-router-dom";

export const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await appService.getDetails("products/group", id);

        if (response.data) {
          console.log("Products ", response.data);
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getResults();
  }, [id]);

  return products && (
    <ul>
      {products.map((product, j) => {
        return (
          <li key={j}>
            <h5>
              <ProductCard id={product.id} /> 
            </h5>
          </li>
        );
      })}
    </ul>
  ) 
};
