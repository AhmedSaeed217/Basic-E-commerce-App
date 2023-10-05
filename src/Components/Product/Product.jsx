import React from 'react'
import { Link } from 'react-router-dom'
export default function Product(props) {
    const { product } = props
    return <>
        <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="product position-relative h-100 d-flex flex-column justify-content-between border border-3 border-dark-subtle p-4 rounded">
                <div>
                    <img style={{ width: "200px" }} src={product.image} alt="..." />
                    <h5 className="mt-2 mb-2 text-center">{product.title.slice(0, 30)}...</h5>
                    <p className="">{product.description.slice(0, 150)}.......</p>
                    <div className="info position-absolute top-0 end-0 p-2 bg-success-subtle">
                        <span >Price: {product.price}$</span>
                        <br />
                        <span >Rate: {product.rating.rate}</span>
                        <br />
                        {product.rating.count > 1 ? <span className='text-success' >Available</span> :
                            <span className='text-danger' >Out Of Stock</span>}
                    </div>

                </div>
                <div>
                    <Link to={`/product/${product.id}`} className="btn btn-secondary w-100 mb-1">Details</Link>
                    <button onClick={() => props.deleteProduct(product.id)} className='btn btn-danger w-100 mb-1'>Delete</button>
                </div>
            </div>
        </div>

    </>
}

