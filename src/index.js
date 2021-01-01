import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavSearch from './component/all/NavSearch';
import Nav from './component/all/Nav';
import NavMobile from './component/all/NavMobile';
import HomeMain from './component/home/HomeMain';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavSearch />
    <Nav />
    <NavMobile />
    <HomeMain />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
