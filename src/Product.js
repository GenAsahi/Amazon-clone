import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>title jsafjlksalkfnslanlwasflkamflsdmflksaflaslfnsda;lfnslanfl;asdjfl;ksjadfjas;l</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className="product__rating">
                    <p>🔥</p>
                </div>
            </div>           
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAFGDwiu6tFmBQUAU2DA7JhM5xdT2PWRuwBQ&usqp=CAU"
                        alt=""
                        />
                    <button>Add to Cart</button>
        </div>
    )
}

export default Product
