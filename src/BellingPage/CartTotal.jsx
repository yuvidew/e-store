import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {
    const prodata = useSelector(state => state.proList)
    console.log(prodata);
    return (<>
            <section  style={{
                    border : '.1px solid #727373',
                }} >

            <div className="d-flex align-items-center justify-content-center " style={{
                height : '4rem'
            }}>
                <div className='w-75 h-100 text-center d-flex align-items-center justify-content-center' style={{
                    borderRight : '.1px solid #727373',
                }}>
                    <h4 >Product</h4> 
                    
                </div>
                <div className='w-25 h-100 text-center d-flex align-items-center  justify-content-center p-1'>
                    <h4 >Total</h4>
                </div>
            </div>
            {/* {NewPro.map((ele , index) => {
                if(cartPro[ele.id]){
                return (<div key={index} className="theBox d-flex w-100 align-items-center w-100" style={{
                    borderTop :'.1px solid #727373'
                }}>
                    <div className="imgBox w-25 h-100 p-3" style={{
                    borderRight :'.1px solid #727373'
                }}>
                        <img className='w-100 h-100 object-fit-contain' src={ele.imgsrc} alt="" />
                    </div>
                    <div className="proname w-50 h-100 text-center d-flex align-items-center justify-content-center" style={{
                    borderRight :'.1px solid #727373'
                }}>
                        <h3 className='titleText'>
                        {ele.text}
                        </h3>
                    </div>
                    <div className="price w-25 d-flex align-items-center justify-content-center">
                        <h4>${ele.newPrice}/-</h4>
                    </div>
                </div>)
                }
            })} */}
            </section>

            <h2 className='mt-4'>Payment</h2>

            <ul style={{
                listStyle : 'none',
                padding : '0'
            }}>
                <li>
                    <div className="d-flex align-items-center gap-2">
                        <input className='radionCol' type="radio" name="radio" id="" />
                        <h4 className='mt-2'>Direct Bank Transfer</h4>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center gap-2">
                        <input className='radionCol' type="radio" name="radio" id="" />
                        <h4 className='mt-2'>Direct Bank Transfer</h4>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center gap-2">
                        <input className='radionCol' type="radio" name="radio" id="" />
                        <h4 className='mt-2'>Direct Bank Transfer</h4>
                    </div>
                </li>
            </ul>

            <button className='formButton mt-3'>Palce Order</button>
    </>)
}

export default CartTotal