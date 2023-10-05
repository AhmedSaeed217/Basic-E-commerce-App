import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';
import "./productdetails.css"
export default function ProductDetails() {
    const params = useParams()
    let apiUrl = `https://fakestoreapi.com/products/${params.productId}`;
    const [Product, setProduct] = useState(null);

    async function productDetails() {
        await fetch(apiUrl).then((res) => res.json()).then((product) => setProduct(product))
        console.log(Product)
    }

    useEffect(() => {
        productDetails()
    }, [])


    return <>
        <div className="py-5 mb-3 bg-light">
            <div className="container ">
                {Product === null ? < Spinner /> : <div className="position-relative row align-items-center  border border-3 border-dark-subtle p-4 rounded">
                    <div className="col-md-5">
                        <img src={Product.image} alt="" className='w-100' />
                    </div>
                    <div className="col-md-7 p-4">
                        <h2 className='mb-2'>{Product.title}</h2>
                        <p className='mb-2 fs-4'>{Product.description}</p>
                        <div className="info position-absolute top-0 end-0 p-4 bg-success-subtle">
                            <span >Price: {Product.price}$</span>
                            <br />
                            <span >Rate: {Product.rating.rate}</span>
                            <br />
                            {Product.rating.count > 1 ? <span className='text-success' >Available</span> :
                                <span className='text-danger' >Out Of Stock</span>}
                        </div>

                        <button className='btn btn-success mt-4 w-100 p-2'>Add To Cart</button>
                    </div>
                </div>}
            </div>
        </div>

    </>
}


