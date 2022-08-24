import { useEffect, useState } from "react";

import appService from "../../Components/App/Appservices/App.service";

import styled from "styled-components";

const StyledProduct = styled.figure`
  border: solid 1px #333;
  display: flex;
  max-height: 200px;
  img {
    width: 100%;
    height: auto;
    display: block;
    transform: rotate(-90deg);
  }
`;

const StyledDetails = styled(StyledProduct)`
  img {
    flex: 1;
  }
  section {
    flex: 1.5;
  }
`;

export const ProductByID = ({ id }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await appService.getDetails("products", id);

        if (response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getResults();
  }, [id]);

  return products ? products.item : null;
};

export const ProductDetails = (id) => {
  const item = ProductByID(id);

  return (
    <StyledDetails>
      {item ? (
        <><section>
          <img src={item.image.fullpath} alt={item.name} />
          {console.log(item)}
          
            <header>
              <h2>{item.name}</h2>
            </header>
            <pre>{item.description_short}</pre>
          </section>
        </>
      ) : (
        <>...Loading</>
      )}
    </StyledDetails>
  );
};
