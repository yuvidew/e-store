import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// import img

import dot from '../asets/dot.png'

const LinkComp = ({value , setValue}) => {
    const history = useLocation()
    const [theIndex , setTheIndex] = useState(history.pathname)
    const navLink = [
        {path : '/', text : 'Home'},
        {path : '/product', text : 'Products'},
        {path : '/account', text : 'My Account'},
    ]
    return (<>
        <div className="theLinkboc d-flex align-items-center gap-4 h-100 mt-5">
            {navLink.map((ele , index) => (
                <NavLink key={index} to = {ele.path} className='navLink' onClick={() => setTheIndex(index)}>
                    <h3 
                    style={{color : history.pathname === ele.path || theIndex === ele.text ? '#44aba4' : ''}}
                    onClick={() => setValue(!value)}
                    >
                        {ele.text}
                    </h3>
                    {/* <br /> */}
                    {history.pathname === ele.path || theIndex === ele.text ? <img style={{width : '4rem' , height : '1,9rem'}} src={dot} alt="" />: <></>}
                </NavLink>
            ))}
        </div>
    </>)
}

export default LinkComp