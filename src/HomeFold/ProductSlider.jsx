import React, { useRef } from 'react'
import Category from './Category'

import {FaLessThan, FaGreaterThan } from 'react-icons/fa'
import 'react-multi-carousel/lib/styles.css';

const ProductSlider = () => {
    const silderRef = useRef(null)

    const scrollBtn = (index) => {
        silderRef.current.scrollBy({
            left: silderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }

    return (<>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h2 className='ThePopCat'><span style={{color : '#0b605a'}}>Popular</span> Categories</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-lg-block d-md-block d-none">
                <div className="d-flex lessGre align-items-center gap-3 justify-content-end">
                    <button onClick={() => scrollBtn(-1)}><FaLessThan className='icont' /></button>
                    <button onClick={() => scrollBtn(1)}><FaGreaterThan className='icont' /></button>
                </div>
            </div>
            <section ref={silderRef} className=' d-flex theScroll align-items-center gap-3 p-2' style={{
                overflowX : 'scroll',
                scrollbarheight : '1rem'
            }}>
                <div className="d-flex align-items-center gap-3">
                    {Category.map((ele , index) => (
                        <div className="card" key={index} style={{width: '25rem'}}>
                            <div className="imgbox p-4">
                                <img className="card-img-top" src = {ele.imgsrc} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h2 className='text-center'>{ele.text}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
        <br />
        <br />
        <br />
    </>)
}

export default ProductSlider