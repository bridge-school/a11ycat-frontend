import React from "react";
import { Provider } from "react-redux";
import Styled from "styled-components";
import Router from "../components/Router";
// import "./App.css";
import { Header, Footer } from "../components/HeaderFooter";
import { black, pink } from "../style-variables";
import configureStore, { history } from "../store";

const store = configureStore();

const StyledApp = Styled.div`
	background-color: ${pink};
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = Styled.div`
	width: 70%;
	border: 2px solid ${black};
`;

export const App = () => (
  <Provider store={store}>
    <StyledApp className="App">
      <Wrapper>
        <Header />
        <Router history={history} />
        <Footer />
      </Wrapper>
    </StyledApp>
  </Provider>
);
