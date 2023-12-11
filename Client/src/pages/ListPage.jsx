import React, { useEffect, useState } from 'react'
import cacheService from '../services/cacheService'
import { useNavigate } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData';
import Product from '../components/Product';

function ListPage() {

    const [update, setUpDate] = useState(0);
    const { loading, err, data } = useFetchData("api/products", update);
    const navigate = useNavigate()

    useEffect(() => {
        if(!cacheService.isLoggedIn()) return navigate("/")
    }, [])
    
    console.log(data)

    return (
        <div className='list-page-wrapper'>



            <h1>Inköpslista</h1>
            <div className='products-container'>
                {loading && <div>Laddar...</div>}
                {err && <div>Ett fel uppstod</div>}
                {data && data.map((product, key) => <Product
                    title={product.title}
                    amount={product.amount}
                    id={product.id}
                    key={key}
                />)}
            </div>

        </div>
    )
}

export default ListPage