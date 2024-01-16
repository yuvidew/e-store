import React from 'react'

// import img
import rating from '../asets/star.png'
import addCart from '../asets/addCart.png'
import { Link } from 'react-router-dom'


const FavCard = ({ele, index}) => {
    return (<>
        <div className="card theCard" style={{width: '100%' , padding : '1rem' , position : 'relative'}} >
            <div>
                <img style={{borderRadius : '.5rem'}} className="card-img-top" 
                src={`/src/uploads/${ele.ImageName}`}alt="Card image cap" />
            </div>
            <div className="card-body">
                <p>Clothing</p>
                <h2>Colorfull pattern {ele.title}</h2>
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
                        <Link to={`/product/${String(index)}`} >
                            <button>
                                <img src={addCart} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default FavCard