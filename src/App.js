import React, { useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';


function App() {

  // Setting up State for cart items. Checks if state is in local storage, if not, state is an empty array
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : []);


  // Function to add items to cart (passed down as props)
  const addToCart = (product) => {
    // Copying cart state
    const items = cartItems.slice();
    let alreadyInCart = false;

    // Iterate over each item in cart to add quantity per item
    items.forEach(item => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      items.push({ ...product, count: 1 });
    }

    setCartItems(items);

    localStorage.setItem("cartItems", JSON.stringify(items));
  };


  // Function to remove items from cart (passed down as props)
  const removeFromCart = (product) => {
    const items = cartItems.slice();

    const removedList = items.filter((item) => item.id !== product.id);

    setCartItems(removedList);

    localStorage.setItem("cartItems", JSON.stringify(removedList));
  };


  return (
    <div className="App grid-container">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="content">
          <div className="main">
            <Products addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems} />
          </div>
        </div>
      </main>

      <footer>Josh Gomberoff</footer>
    </div>
  );
};

export default App;
