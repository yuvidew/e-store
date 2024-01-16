import React from 'react'
import './Footer.css'

// import image 

import email from '../asets/email.png'
import Addres from './Addres'

const Footer = () => {
    return (<>
        <footer>
            <section style={{
                    backgroundColor : '#0B605A80',
            }}>
                <div className="container" style={{height : '100%'}}>
                    <div className="row pt-3 pb-5" style={{height : '100%'}}>
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center h-100 gap-3">
                                <img className='theImgEmail' src={email} alt="" />
                                <h3>Sign up to Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-lg-block d-none mt-3">
                            <div className="d-flex align-items-center justify-content-lg-center h-100">
                                <h3 className='text-center'>...and receive $25 coupan for first shopping.</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3" >
                            <div className="d-flex align-items-center justify-content-lg-center justify-content-md-end h-100">
                                <form action="#" className='d-flex theFooterForm align-items-center w-lg-100 w-md-75'>
                                    <input type="text" className='w-100 h-100' placeholder='Enter your email' />
                                    <button className='theSub h-100' style={{
                                        background : '#0b605a'
                                    }}>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Addres/>
        </footer>
    </>)
}

export default Footer