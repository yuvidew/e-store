import React from 'react'
import {  useSelector } from 'react-redux'

const Order = () => {
    const proData = useSelector(state => state.proList)
    return (<>
        <div className="card w-100 theaccCard" >
            <div className="card-header">
                <h3 className='fs-3 p-3'>My Order</h3>
            </div>
            <ul className="list-group list-group-flush" style={{
                overflowY : 'auto'
            }}>
            {proData.map((ele) => {
                    return(
                    <div key={ele._id} className="d-flex w-100" >
                        <li className="list-group-item w-25 p-3 d-flex align-items-center justify-content-center">
                            <img className='w-75 h-75 object-fit-contain' src={`/src/uploads/${ele.ImageName}`} alt="" />
                        </li>
                        <li className="list-group-item w-50 p-3 d-flex align-items-center fs-1" style={{
                            textTransform : 'capitalize'
                        }}>{ele.title}</li>
                        <li className='list-group-item w-25 p-3 d-flex align-items-center justify-content-end fs-6'>
                            ${ele.newPrice}/-
                        </li>
                    </div>)
            })}
            </ul>
        </div>
    </>)
}

export default Order