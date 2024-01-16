import React from 'react'
import NewPro from './NewPro'
import { NavLink } from 'react-router-dom'

/**import the image  */
import rating from '../asets/star.png'
import addCart from '../asets/addCart.png'
import arrow from '../asets/arrow.png'

const HomePro = () => {
    return (<>
        <div className="d-flex align-items-center justify-content-between">
            <h1><span style={{color : '#0b605a'}}>New</span> Products</h1>
            <NavLink to='/product' style={{
                textDecoration : 'none',
                color : '#0b605a',
                fontSize : '1.2rem'
            }}>See more <img style={{width : '2rem'}} src={arrow} alt="" /></NavLink>
        </div>
        <section>
            <div className="row">
                {NewPro.map((ele , index) => {
                    if(index < 8){
                    return(
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mt-4" >
                        <div className="card" style={{width: '100%' , padding : '1rem'}}>
                            <div>
                                <img style={{borderRadius : '.5rem'}} className="card-img-top" src={ele.imgsrc} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p>Clothing</p>
                                <h2>Colorfull pattern {ele.text}</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='w-50'>
                                        <div className="d-flex align-items-center gap-2 mt-1 mb-1">
                                            <img style={{width : '1.5rem'}} src={rating} alt="" />
                                            <img style={{width : '1.5rem'}} src={rating} alt="" />
                                            <img style={{width : '1.5rem'}} src={rating} alt="" />
                                            <img style={{width : '1.5rem'}} src={rating} alt="" />
                                            <img style={{width : '1.5rem'}} src={rating} alt="" />
                                        </div>
                                        <h3 className='mt-3'><span>${ele.newPrice}</span> <del>${ele.oldPrice}</del></h3>
                                    </div>
                                    <div className='w-50 d-flex align-items-end justify-content-end'>
                                        <button>
                                            <img src={addCart} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    }
                })}
            </div>
        </section>
    </>)
}

export default HomePro