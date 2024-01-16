import React from 'react'
import right from '../asets/right.png'
import ProForm from './ProForm'
import './ProductFromUploder.css'

const ProFromPage = () => {
    return (<>
        <section style={{
                backgroundColor : '#0B605A80',
                height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home 
                <img src={right} alt="" /> <span className='fs-3'>Product form</span></h1>
            </div>
        </section>
        <section className='container' style={{height : '70vh'}}>
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className=" m-auto w-75 " style={{height : '85%'}}>
                    <ProForm/>
                </div>
            </div>
        </section>
    </>)
}

export default ProFromPage