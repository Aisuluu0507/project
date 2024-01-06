import React from 'react';
import './index.css';
import Header from './Header';
import Menu from './Menu';
import SearchCakes from './CakeList';
import  Modal from './Modal';
import Alert from './Hidden';
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <h1>Добро пожаловать в мир сладости🥰😜</h1>
      <SearchCakes/>
      <Modal/>
      <Alert/>
    </div>
  );
}

export default App;
