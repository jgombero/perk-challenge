import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Product({ albumId, id, title, url, thumbnailUrl, price, addToCart }) {

  // Material UI styling
  const style = {
    padding: '10px'
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={style}>
        <div className="products">
          <h3 className="product-title">{title}</h3>
          <img src={url} alt={title} className="product-image" />
          <p className="product-price">${price}.00</p>
          <button className="button-primary" onClick={(prev) => addToCart({albumId, id, title, url, thumbnailUrl, price})}>Add To Cart</button>
        </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Product;