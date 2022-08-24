import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home";
import Notfound from "../../../Pages/Notfound";

import { ProductList } from "../../../Pages/Products/Products";
import { Footer } from "../../Partials/Footer";
import Header from "../../Partials/Header";
import { Main } from "../../Partials/Main";
import { ProductNav } from "../../Partials/NavFromList";

import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
`;

export const AppRouter = () => {
  return (
    <>
      <Header />

      <Main>
        <StyledMain>
          <ProductNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductList />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </StyledMain>
      </Main>

      <Footer />
    </>
  );
};
