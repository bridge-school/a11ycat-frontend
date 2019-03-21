import React from "react";
import { Provider } from "react-redux";
import Styled from "styled-components";
import Router from "../components/Router";
// import "./App.css";
import { Header, Footer } from "../components/HeaderFooter";
import configureStore, { history } from "../store";

const store = configureStore();

const StyledApp = Styled.div`
	background-color: #f35f5f;
	width: 100%;
	height: 100vh;
`;

export const App = () => (
  <Provider store={store}>
    <StyledApp className="App">
      <Header />
      <Router history={history} />
      <Footer />
    </StyledApp>
  </Provider>
);
