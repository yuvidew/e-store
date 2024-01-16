import React from 'react'

/*import image  */
import right from '../asets/right.png'
import BillingForm from './BillingForm'

/*import css file  */
import './BellingPage.css'
import CartTotal from './CartTotal'

const BellingPage = () => {
    return (<>
        <section style={{
            backgroundColor : '#0B605A80',
            height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home <img src={right} alt="" /> Cart <img src={right} alt="" /> <span className='fs-3'>Beling</span></h1>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <h2 className='mt-5'>Billing Details</h2>
                        <BillingForm/>
                        <h2>Additianal information</h2>
                        <textarea className='thTexter mb-5' placeholder='Order Notes'>
                        </textarea>
                    </div>
                    <div className="col-lg-6" >
                    <section className='mt-5' style={{
                        border : '.1px solid #727373',
                        padding : '1rem'
                    }}>

                        <h2>Cart Tolals</h2>
                        <CartTotal/>
                    </section>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default BellingPage