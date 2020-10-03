import React from 'react';
import Paper from '@material-ui/core/Paper';

function CartItem({ cartItem, removeFromCart }) {

  // Material UI styling
  const style = {
    padding: '10px',
    margin: '10px'
  };

  return (
    <React.Fragment>
      <Paper elevation={3} style={style}>
      <div className="cart-items">
        <p className="cart-title">{cartItem.title}</p>
        <img src={cartItem.thumbnailUrl} alt={cartItem.title} className="cart-image" />
        <p>Quantity: {cartItem.count} x ${cartItem.price}.00</p>
        <button onClick={() => removeFromCart(cartItem)} className="button-secondary">Remove</button>
      </div>
      </Paper>
    </React.Fragment>
  );
};

export default CartItem;