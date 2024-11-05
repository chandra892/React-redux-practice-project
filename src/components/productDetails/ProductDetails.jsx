import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        rating: {
          rate: 0,
          count: 0,
        },
        category: "",
        price: 0,
        description: "",
        image: "",
      });
      const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).
            then((res) => {
                console.log(res.data);
                setProduct(res.data);
            }).catch((err) => {
                console.log("error in code :",err);
            })
    }, [id]) // add id to dependency array

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container shadow p-3 mt-4">
            <div className="row">
              <div className="col-4">
                <img src={product.image} width={"100%"} height={300} alt="product"/>
              </div>
              <div className="col-8">
                <dl>
                    {/* <dt>Product Name</dt> */}
                    <dd><h4>{product.title}</h4></dd>

                    {/* <dt>description</dt> */}
                    <dd>{product.description}</dd>

                    <dt>price</dt>
                    <dd>${product.price}</dd>

                    <b>rating </b> <p>{product.rating.rate} </p>

                    <button className='btn btn-primary mx-4'>Buy now</button>
                    <button className='btn btn-warning'>Add to Cart</button>
                    

                </dl>
              </div>
            </div>

        </div>
        

    );

}

export default ProductDetails
