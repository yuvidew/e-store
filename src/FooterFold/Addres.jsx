import React from 'react'
import { FaFacebook , FaTwitter , FaInstagram , FaYoutube } from 'react-icons/fa';

import logo from '../asets/logoStore.jpg'
import payment from '../asets/payment.png'

const Addres = () => {
    const addresArr = [
        {add : 'About Us'},
        {add : 'Delivry Information'},
        {add : 'Privacy Policy'},
        {add : 'Terms & Conditions'},
        {add : 'Contact Us'},
        {add : 'Support Center'},
    ]

    const accountArr = [
        {acc : 'Sign In'},
        {acc : 'view Cart'},
        {acc : 'My Wishlist'},
        {acc : 'Track My Order'},
        {acc : 'Help'},
        {acc : 'Order'},
    ]
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <img className='logoFolt' src={logo} alt="" />
                    <h4>Contact</h4>
                    <br />
                    <ul style={{listStyle : 'none' , padding : '0' , lineHeight : '2.5rem'}}> 
                        <li><span style={{color : '#4b4c4d'}}>Address </span> : 562 Wellington Road , Street 32 , San Franciso</li>
                        <li><span style={{color : '#4b4c4d'}}>Phone </span> : +01 222 333 444 / +02 123 456 789 </li>
                        <li><span style={{color : '#4b4c4d'}}>Address </span> : 562 Wellington Road , Street 32 , San Franciso</li>
                    </ul>

                    <br />
                    <h4>Follow me</h4>
                    <div className="d-flex gap-3 align-content-center mt-3">
                    <FaFacebook fill='#4b4c4d' style={{fontSize : '2rem'}} />
                    <FaTwitter fill='#4b4c4d' style={{fontSize : '2rem'}} />
                    <FaInstagram fill='#4b4c4d' style={{fontSize : '2rem'}} />
                    <FaYoutube fill='#4b4c4d' style={{fontSize : '2rem'}} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="mt-5 theList d-flex align-items-center justify-content-around">
                        <div>
                            <h3>Address</h3>
                            <ul className='mt-4' style={{listStyle : 'none' , padding : '0' , lineHeight : '3rem'}}>
                                {addresArr.map((ele , index) =>(
                                    <li key={index}>{ele.add}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>My Account</h3>

                            <ul className='mt-4' style={{listStyle : 'none' , padding : '0' , lineHeight : '3rem'}}>
                                {accountArr.map((ele , index) =>(
                                    <li key={index} style={{textTransform : 'capitalize'}}>{ele.acc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="thePy col-lg-4 col-12">
                    <h3 className='mt-5 '>Secured PayMent GateWays</h3>
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-3 w-100">
            <p className='text-center textLast' 
                style={{color: '#585959'}} > 
                Created By <span style={{color : '#1c1b19'}}> Mr. yuvi dew...</span> | All Right Reserved!
            </p>
        </div>
    </>)
}

export default Addres