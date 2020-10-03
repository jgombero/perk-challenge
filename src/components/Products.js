import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Grid from '@material-ui/core/Grid';


// API url for products
const productsUrl = "https://jsonplaceholder.typicode.com/photos";


function Products({ addToCart }) {
  
  // States
  const [products, setProducts] = useState([]);
  

  // Material UI styling
  const padding = {
    padding: '0, 40px, 0 20px'
  };


  // Axios request to retrieve products from external API
  useEffect(() => {
    axios.get(`${productsUrl}`)
      .then(res => {

        // Creating fake prices for each product
        res.data.forEach(product => {
          product.price = Math.floor(Math.random() * 100) + 1;
        });

        setProducts(res.data);
      });

  }, []);


  // Mapping over all products with albumId of 1
  const productsList = products.map((product => {
    
    if (product.albumId === 1) {
      return < Product key={product.id} albumId={product.albumId} id={product.id} title={product.title} url={product.url} thumbnailUrl={product.thumbnailUrl} price={product.price}  addToCart={addToCart} product={product} />
    };
  }));


  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        style={padding}
      >
        {productsList}
      </Grid>
    </React.Fragment>
  );
};

export default Products;