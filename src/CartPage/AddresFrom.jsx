import React from 'react'

// import icon 

import atm from '../asets/atm.png'
import paste from '../asets/paste.png'
import { NavLink } from 'react-router-dom'


const AddresFrom = ({total}) => {
    return (<>
        <section className='row mt-5'>
            <div className="col-lg-8 col-12">
                <h2>Fill Order From</h2>
                <form className='w-100 p-3'>
                    <input className='mt-2' type="text" placeholder='State/Country' />
                    <div className="d-flex align-items-center gap-3">
                        <input className='mt-3' placeholder='City' type="text" />
                        <input className='mt-3' placeholder='PostCods / ZIP' type="text" />
                    </div>
                    <button type='submit' className='mt-3 formButton'>Order Now</button>
                </form>
                <br />
                <br />
                <h2>Calculate Shipping</h2>
                <form action="#" className='d-flex w-lg-50 w-100 align-items-center p-3 gap-3 w-50'>
                    <input type="text" placeholder='Enter Your Coupon' />
                    <button className='formButton d-flex align-items-center gap-2'> <img className='theImgBtn' src={paste} alt="" /> Apply</button>
                </form>
            </div>
            <div className="col-lg-4 col-12 mt-5" style={{
                border : '.1px solid #abadac',
                padding : '.7rem'
            }}>
            <h2>Carts Totals</h2>
            <div className='w-100 theTb mt-4 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center justify-content-start' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>Cart Subtotle :- </h4>
                </div>
                <div className='d-flex align-items-center justify-content-end' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>${total}/-</h4>
                </div>
            </div>

            <div className='w-100 theTb mt-4 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center justify-content-start' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>Shooping :- </h4>
                </div>
                <div className='d-flex align-items-center justify-content-end' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>$10.00/-</h4>
                </div>
            </div>

            <div className='w-100 theTb mt-4 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center justify-content-start' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>Cart Subtotle :- </h4>
                </div>
                <div className='d-flex align-items-center justify-content-end' style={{
                    border : '.1px solid #abadac',
                    width : '100%',
                    padding : '.7rem'
                }}>
                    <h4>${total + 10}/-</h4>
                </div>
            </div>
            <button className='formButton mt-4'>
                <NavLink to='/belling' style={{
                    textDecoration : 'none', 
                    color : '#eaf0f0'
                }}>
                <img src={atm} alt="" />
                    Proceed To CHeckOut
                </NavLink>
            </button>
            </div>
        </section>
        <br />
        <br />
        <br />
        <br />
    </>)
}

export default AddresFrom