import React, { useState } from 'react'

import save  from '../asets/seve.png'
import saved  from '../asets/seved.png'
import crown from '../asets/crown.png'
import exchange from '../asets/exchange.png'
import creditcard from '../asets/creditcard.png'
import Review from './Review'
import { useDispatch, useSelector } from 'react-redux';
import { addPro  , favPro} from '../ProductSlice.jsx/ProductSlice'

const ProDetelPageComp = ({ele , _id , title , brand , newPrice , oldPrice , ImageName , discription}) => {
    const [changeImg , setChangeImg] = useState(ImageName)
    const dispatch = useDispatch()
    const favData = useSelector(state => state.favList)
    
    console.log(favData.length);
    return (<>
        <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4 mt-3" >
                    <div className="card" style={{
                        height : '40rem',
                        position : 'relative'
                    }}>
                    
                        <img className="card-img-top w-100 h-100 object-fit-cover" 
                        src={`/src/uploads/${ImageName}`} alt="" />
                    </div>
                    <br />
                    <div className="nextImgs d-flex gap-2" >
                        <img className='w-50 h-100 object-fit-cover' 
                        src={`/src/uploads/${changeImg}`} onClick={() => setChangeImg(ImageName)} alt="" />
                    </div>
                </div>
                <div className="col-lg-8 mt-3">
                    <h1 style={{color : "#0b605a" , textTransform : 'capitalize'}}>{title}</h1>
                    <h4>Brand : <span style={{color : "#0b605a"}}>{brand}</span></h4>
                    <hr />
                    <h1 className='d-flex align-items-center gap-2'><span style={{color : "#0b605a"}}>
                    ${newPrice}</span> <p style={{fontSize : '1.3rem' , color : '#838685'}}>
                    <del style={{ color : '#838520'}}>${oldPrice}</del> 25% off</p></h1>
                    <hr />
                    <p className='detel'>
                        {discription}
                    </p>
                    <br />
                    <br />
                    <ul className='OtherDele' style={{listStyle : 'none' , paddingLeft : '0'}}>
                        <li><img src={crown} alt="" />1 Year AL Javeera Brand Warranty</li>
                        <li><img src={exchange} alt="" />30 Day Return Policy</li>
                        <li><img src={creditcard} alt="" />Cash on Delivery available</li>
                    </ul> 
                    <br />
                    <br />
                    <div className="theAddCartBox d-flex w-lg-25 w-75  align-items-center gap-2">
                        <button  className='w-75' 
                        onClick={() => dispatch(addPro(ele))} style={{padding : '.7rem 1.5rem'}}>Add To cart</button>
                        <button className='sevedbtn'
                        style={{
                            backgroundColor : 'transparent',
                            marginLeft : '3rem'
                        }}>
                            <img onClick={() => dispatch(favPro(_id))} src={favData.includes(_id) ? saved : save} alt="" />
                        </button>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <ul className='OtherDele' style={{listStyle : 'none' , paddingLeft : '0'}}>
                        <li><span>SKU</span>: FWM15VKT</li>
                        <li><span>Tags</span>: Cloth, Women, Dress</li>
                        <li><span>Availability</span>: 8 items In Stock</li>
                    </ul> 
                </div>
            </div>
            <br />
            <br />
            <br />
            <Review/>
        </div>
    </section> 
    </>)
}

export default ProDetelPageComp