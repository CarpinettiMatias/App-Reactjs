import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './component/Router/Router';
import { CartProvider } from './component/CartContext/CartContext';

function App(){

 
  return (
        <CartProvider>
          <BrowserRouter>
                <header>
                  <badge />
                    <NavBar />
                    <Router />
                  </header>
              </BrowserRouter>
        </CartProvider>

  );
};

export default App;
