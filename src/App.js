import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/Home';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import OrderPage from './pages/OrderPage';
import ReviewPage from './pages/ReviewPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <div>App component</div>
  );
};

export default App;
