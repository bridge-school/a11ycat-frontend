import React from "react";
import { Provider } from "react-redux";
import { Store } from "../store";
import Main from "../components/Main";
import "./App.css";
import { Header, Footer } from "../components/HeaderFooter";

export const App = {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}
