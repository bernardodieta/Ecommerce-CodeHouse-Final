import React, { useEffect, useState } from 'react'
import FirestoreData from '../api/firestore-data-category'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductDetail.css'

const ProductsCategory = () => {
  const { category } = useParams();

  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const result = await FirestoreData({ category });
      setData(result.data);
    };
    fetchData();
  }, [category]);

  return (
    <div className='home-container'>
      {data && data.map((item, index) => (
        <div key={index} className='product-card'>
          <h2>{item.title.substring(0, 30) + '...'}</h2>
          <img src={item.image} alt="" />
          <h3>Precio: ${item.price}</h3>
          <button className='btn-comprar'>
          <Link to={{ pathname: `/product/${item.id}`, state: { product: item } }}>
            Buy
          </Link>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductsCategory