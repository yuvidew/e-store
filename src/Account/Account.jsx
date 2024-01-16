import React, { useState } from 'react'
import ProFile from './ProFile'
import Order from './Order'
import Address from './Address'
import Database from './Database'


/*import css file */

import './Account.css'
import './ResAccount.css'

/**import image */
import right from '../asets/right.png'
import user from '../asets/user.png'
import location from '../asets/location.png'
import bag from '../asets/bag.png'
import logout from '../asets/logout.png'
import setting from '../asets/setting.png'
import padlock from '../asets/padlock.png'

import checkuser from '../asets/checkuser.png'
import checklocation from '../asets/checklocation.png'
import checkbag from '../asets/chekbag.png'
import checklogout from '../asets/checklogout.png'
import checksetting from '../asets/checkfilter.png'
import checkpadlock from '../asets/checkpadlock.png'
import ChangePas from './ChangePas'

const Account = () => {
    const [theIndex , setTheIndex] = useState(0)
    const btnData = [
        {imgSrc : user , cUser : checkuser , text : 'My Profile'},
        {imgSrc : bag , cUser : checkbag, text : 'Order'},
        {imgSrc : location , cUser : checklocation , text : 'My Address'},
        {imgSrc : setting , cUser : checksetting, text : 'Database'},
        {imgSrc : padlock , cUser : checkpadlock , text : 'Change Password'},
        {imgSrc : logout , cUser : checklogout , text : 'Log out'},
    ]

    const compArr = [
        {Name : <ProFile/>},
        {Name : <Order/>},
        {Name : <Address/>},
        {Name : <Database/>},
        {Name : <ChangePas/>},
    ]

    if(theIndex === 5){
        localStorage.removeItem('user')
        localStorage.removeItem('auth')
        window.location.reload()
    }
    return (<>
        <section style={{
                backgroundColor : '#0B605A80',
                height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>
                Home <img src={right} alt="" /> 
                <span className='fs-3'>Acount</span></h1>
            </div>
        </section>
        <div className="container ">
        <section className='theAccountSection d-flex align-items-lg-center  justify-content-start'>
            <div className="row w-100 h-100" >
                <div className="col-lg-4 col-2 h-100 ">
                    <section className='w-100 h-100 d-flex align-items-center justify-content-center'>
                        <div className="card w-100 h-75" >
                            <ul className="list-group list-group-flush " id='thiList'>
                            {btnData.map((ele , index) => (
                                <li key={index}  className="list-group-item theBtnList p-4" style={{
                                    backgroundColor : theIndex === index ? '#0b605a' : '#fefefe',
                                    cursor : 'pointer'
                                }} onClick={() => setTheIndex(index)}>
                                    <div className="d-flex align-items-center justify-content-lg-start justify-content-center gap-4">
                                        <img src={theIndex === index ? ele.cUser: ele.imgSrc} alt="" />
                                        <h3  style={{color : theIndex === index ? '#fefefe' : '#0d0d0c'}} className='mt-2 d-lg-block d-none'>{ele.text}</h3>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-lg-8 col-10 h-100">
                    <section className='w-100 h-100 d-flex align-items-center justify-content-center'>
                    {compArr.map((ele , index) => (
                        <div key={index} className={theIndex === index ? 'theaccCard w-100' : 'd-none'}>
                            {ele.Name}
                        </div>
                    ))}
                    </section>
                </div>
            </div>
        </section>
        </div>
    </>)
}

export default Account