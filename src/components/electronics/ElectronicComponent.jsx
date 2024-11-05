import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ElectronicComponent({ product }) {
    const [addedInCart, setAddedInCart] = useState(false);
    const { image, title, rating, price, id } = product
    return (
        <div className="card w-25 mt-4 my-3 ">
            <div className="card-header">
                <img src={image} width={"100%"} height={"200"} />

            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p>${price}</p>
                <p>{rating.rate}</p>

            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link to={`/productdetails/${id}`}>
                    <button className='btn btn-secondary'> Details</button>
                </Link>
                {
                    addedInCart ? (
                        <button className='btn btn-danger' onClick={() => setAddedInCart(false)}>Remove </button>
                    ) : (
                        <button className='btn btn-warning' onClick={() => setAddedInCart(true)}>Add to Cart</button>
                    )
                }
            </div>
        </div>
    )
}

export default ElectronicComponent