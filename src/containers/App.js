import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from '../components/Main';
import './App.css';
import { Header, Footer } from '../components/HeaderFooter';
import configureStore from '../store';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
