import React from 'react'
/*import css */
import './ResHomePage.css'
import './HomePage.css'
/*import image Page*/
import Hero from '../asets/home-img.png'
import ProductSlider from './ProductSlider'
import HomePro from './HomePro'
import DealBaner from './DealBaner'


const HomePage = () => {
    return (<>
    <div className="container">
        <section className = "row">
            <div className="col-lg-6 col-12 ">
                <section className = "homeLeft d-flex align-items-center" >
                    <div className="textBox w-100" >
                        <h4>Hot promotions</h4>
                        <h2>Fashion Trending</h2>
                        <h1>Great Collection</h1>
                        <p>Save more with coupons & up to 20% off</p>
                        <button>Shop Now</button>
                    </div>
                </section>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
                <section className = "homeLeft theLeft d-flex align-items-center justify-content-center" >
                    <img src={Hero} alt="" />
                </section>
            </div>
        </section>
        <ProductSlider/>
        <HomePro/>
        <br />
        <br />
        <DealBaner/>
        <br />
        <br />
    </div>
    </>)
}

export default HomePage