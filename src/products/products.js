// Products.js
import axios from 'axios';

class Products {
  static all() {
    console.log( "RRRR:" , axios.jj );
    return axios.get('/products.json').then(resp => resp.data);
  }
}

export default Products;
