import React from 'react'

const ProFile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return (<>
        <div className="card w-100 theaccCard" >
            <div className="card-header">
                <h3 className='fs-3 p-3'>My Profile</h3>
            </div>
            <ul className="list-group list-group-flush">
                <div className="d-flex w-100">
                    <li className="list-group-item w-50 p-3">Name</li>
                    <li className="list-group-item w-50 p-3">{user && user[0].Name}</li>
                </div>
                <div className="d-flex w-100">
                    <li className="list-group-item w-50 p-3">Email Id</li>
                    <li className="list-group-item w-50 p-3">{user && user[0].EmailId}</li>
                </div>
                <div className="d-flex w-100">
                    <li className="list-group-item w-50 p-3">Password</li>
                    <li className="list-group-item w-50 p-3">{user && user[0].Possword}</li>
                </div>
                <button className='btn btn-primary theEditBtn fs-4 mt-5 '>
                    Edit
                </button>
            </ul>
        </div>
    </>)
}

export default ProFile