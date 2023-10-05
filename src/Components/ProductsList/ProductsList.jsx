import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import Spinner from '../Spinner/Spinner';
import Slider from '../Slider/Slider';

export default function ProductsList() {
    const apiUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    async function getProducts() {
        await fetch(apiUrl).then((res) => res.json())
            .then((data) => setProducts(data));
    }

    async function productsByCategory(category) {
        let url = `https://fakestoreapi.com/products/category/${category}`;
        await fetch(url).then((res) => res.json())
            .then((data) => setProducts(data));
    }

    function deleteProduct(productId) {
        let newProducts = [...products];
        newProducts = newProducts.filter((prod) =>
            prod.id !== productId
        )
        setProducts(newProducts);
        console.log(products)
    }


    useEffect(() => {
        getProducts();
    }, [])

    return <>
        <Slider />
        <div className=" py-3">
            <h2 className='text-center p-3 mt-2'>Our Products</h2>
            <div className="filter-btns w-50 mx-auto text-center d-flex justify-content-center p-2 mt-4 mb-3">
                <button onClick={() => getProducts()} className='btn btn-success p-2 me-1'>All</button>
                <button onClick={() => productsByCategory("men's clothing")} className='btn btn-success me-1 p-2'>Men</button>
                <button onClick={() => productsByCategory("women's clothing")} className='btn btn-success p-2 me-1'>Women</button>
                <button onClick={() => productsByCategory("jewelery")} className='btn btn-success p-2 me-1'>Jewelery</button >
                <button onClick={() => productsByCategory("electronics")} className='btn btn-success p-2 me-1'>Electronics</button >
            </div>

            <div className="container">
                <div className="row gy-4 ">
                    {products.length === 0 ? <Spinner /> :
                        products.map((product, index) => <Product deleteProduct={deleteProduct} key={index} product={product} />)
                    }
                </div>
            </div>
        </div>
    </>
}
