import React from 'react'

const Address = () => {
    return (<>
        <div className="card">
            <h3 className="card-header fs-3 p-3">My Address</h3>
            <div className="card-body">
                <ul style={{listStyle : 'none' , padding : '0' , lineHeight : '2.5rem'}}> 
                        <li><span style={{color : '#4b4c4d'}}>Address </span> : 562 Wellington Road , Street 32 , San Franciso</li>
                        <li><span style={{color : '#4b4c4d'}}>Phone </span> : +01 222 333 444 / +02 123 456 789 </li>
                    </ul>
                <a href="#" className="btn btn-primary fs-4" style={{
                    backgroundColor : '#0b605a'
                }}>Edit</a>
            </div>
        </div>
    </>)
}

export default Address