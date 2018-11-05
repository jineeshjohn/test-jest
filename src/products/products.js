// Products.js
import axios from 'axios';

class Products {
  static all() {
    return axios.get('/products.json').then(resp => resp.data);
  }
}

export default Products;
