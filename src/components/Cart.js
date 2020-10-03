import React, { useState } from 'react';
import CartItem from './CartItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

function Cart({ cartItems, removeFromCart, setCartItems }) {

  // States
  const [showCheckout, setShowCheckout] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);


  // Function to open Dialog if the user input all of their information
  const handleClickOpen = () => {

    if (name && email && address) {
      setOpen(true);
    }
  };


  // Function to close Dialog box and delete cart items
  const handleClickClose = () => {
    setOpen(false);

    localStorage.removeItem('cartItems');

    setCartItems([]);
  };


  // Incomplete function that would eventually make a post request to complete an order
  const createOrder = (event) => {
    event.preventDefault();


    const order = {
      email,
      name,
      address,
      cartItems
    };


    // This is where I would make a post request to send the order to the backend

  };


  // Mapping over cart items to render each individual cart item
  const cartList = cartItems.map((cartItem) => {
    return (
      <CartItem cartItem={cartItem} removeFromCart={removeFromCart}/>
    );
  });


  return (
    <React.Fragment>
      {cartItems.length === 0 ? 
        <h3 className="cart cart-header">Cart is empty</h3> :
        <h3 className="cart cart-header">You have {cartItems.length} item(s) in your cart</h3>
      }
      <div className="cart cart-items">
        {cartList}
      </div>
      <div className="cart-total">
        <p className="cart">Total: ${cartItems.reduce((a, c) => a + (c.price * c.count), 0)}.00
        </p>
        { cartItems.length > 0 &&
          <button onClick={() => setShowCheckout(true)} className="cart button-primary">Checkout</button>
        }
      </div>
      <div>
        {showCheckout && cartItems.length > 0 &&
          <form className="form" onSubmit={createOrder}>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              />
            <label>Full Name:</label>
            <input
              type="text" 
              name="name" 
              required 
              placeholder="Full Name"
              onChange={(event) => setName(event.target.value)}
            />
            <label>Address:</label>
            <input
              type="text" 
              name="address" 
              required 
              placeholder="Address"
              onChange={(event) => setAddress(event.target.value)}
            />
            <button className="button-primary" onClick={handleClickOpen}>Place Order</button>
          </form>
        }
        <Dialog
          open={open}
          onClose={handleClickClose}
        >
          <DialogTitle>
            Thank you, <strong>{name}</strong> for your order!
          </DialogTitle>
          <DialogContentText>
            <p className="receipt-text">Email: {email}</p>
            <p className="receipt-text">Address: {address}</p>
            <p className="receipt-text">Total: ${cartItems.reduce((a, c) => a + (c.price * c.count), 0)}.00</p>
          </DialogContentText>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default Cart;