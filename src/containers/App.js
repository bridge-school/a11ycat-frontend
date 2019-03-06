import React from "react";
import { Provider } from "react-redux";
import Router from "../components/Router";
import "./App.css";
import { Header, Footer } from "../components/HeaderFooter";
import configureStore from "../store";

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  </Provider>
);
