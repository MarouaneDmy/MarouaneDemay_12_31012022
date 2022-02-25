import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
import Footer from './components/footer';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/sign-in" element={<SignIn/>}/>
          <Route exact path="/user" element={<User/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
