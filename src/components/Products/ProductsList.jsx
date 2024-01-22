import React from 'react'
import FirestoreData from "../api/firestore-allData.js"
import { Link } from 'react-router-dom';
import './ProductDetail.css'
const ProductsList = () => {
    const { data } = FirestoreData()


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

export default ProductsList