import React from 'react'
import FirestoreData from "../../api/firestore-allData.js"
import ProductsList from '../../Products/ProductsList.jsx'
import { Link } from 'react-router-dom';
import './Home.css'


function Home() {

  

    return (
        <ProductsList />
    )
}

export default Home