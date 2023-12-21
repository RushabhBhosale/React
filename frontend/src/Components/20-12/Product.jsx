import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleProduct = ({ match }) => {
   const [product, setProduct] = useState(null);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const response = await axios.get(`https://fakestoreapi.com/products/${match.params.id}`);
            console.log('Single Product Response:', response.data);
            setProduct(response.data);
         } catch (error) {
            console.error('Error fetching single product:', error);
         }
      };

      fetchProduct();
   }, [match.params.id]);

   if (!product) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <h1>{product.title}</h1>
         <img src={product.image} alt={product.title} />
         <p>{product.description}</p>
         <p>Price: ${product.price}</p>
      </div>
   );
};

export default SingleProduct;
