import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { getFirestore, doc, getDoc } from "firebase/firestore";

import './ProductDetail.css'

const ProductsDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productDoc = await getDoc(doc(db, "products", id));

      if (productDoc.exists()) {
        setProduct(productDoc.data());


      } else {
        console.log("No such document!");
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    
    const productWithId = { ...product, id };
    addToCart(productWithId)

  }
  return (

   <div className='detail-container'>
      <div className='product-content'>
        {product && (
          <>
            <img src={product.image} alt="" className='img-detail' />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h2>$:{product.price}</h2>
            <button onClick={handleAddToCart} className='btn-pagar'>Add to Cart</button>

          </>
        )}
      </div>
    </div>
  )
}

export default ProductsDetail