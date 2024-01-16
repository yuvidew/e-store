import React from 'react'

const ChangePas = () => {
    return (<>
        <div className="card">
            <div className="card-header">
            <h3 className='fs-3 p-3'>Change Password</h3>
            </div>
            <div className="card-body">
                <input type="text" className='w-100 fs-5 p-2' placeholder='Enter Password' />
                <br />
                <br />
                <input type="text" className='w-100 fs-5 p-2' placeholder='Conform Password' />
            </div>
            <button className="btn btn-primary fs-4 m-3 p-2 theEditBtn" style={{
                backgroundColor : '#0b605a',
            }}>Submit</button>
        </div>
    </>)
}

export default ChangePas