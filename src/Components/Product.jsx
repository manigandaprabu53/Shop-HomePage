import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'

function Product({data ,cart, setCart}) {
    let [toogle, setToogle] = useState(true);
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
      }
  return <>
    <div className="col mb-5">
        <div className="card h-100">
            {/* <!-- Product image--> */}
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{data.name}</h5>
                    {/* <!-- Product price--> */}
                    {data.price}
                </div>
                <Rating onClick={handleRating} initialValue={rating} />
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {
                    toogle?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                        setCart(cart+1);
                        setToogle(toogle=>!toogle)
                    }}>Add To Cart</button></div>:
                    <div className="text-center"><button className="btn btn-dark mt-auto" onClick={()=>{
                        setCart(cart-1)
                        setToogle(toogle=>!toogle)
                    }}>Remove From Cart</button></div>
                }
            </div>
        </div>
    </div>
  
  </>
}

export default Product