import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                className="home__image" 
                src="https://thewinchesterfamilybusiness.com/images/banners/WFB_Banners/WWB_S15.jpg" 
                alt=""
                />

                <div className="home__row">
                    <Product />
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                <img
                className="home__imageBottom"
                src="https://pm1.narvii.com/6410/d9ebf53bda7fcdd00d6c4e7ca4475e0be301d33d_hq.jpg"
                alt=""
                />
                
            </div>
        </div>
    )
}

export default Home
