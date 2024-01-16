import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LinkComp from './LinkComp';
import SearchBox from './SearchBox';

/*import icon*/

/*import css*/
import './NavBar.css'
import './ResNav.css'

/*import image*/
import save from '../asets/heart.png'
import logo from '../asets/logoStore.jpg'
import bag from '../asets/bag.png'
import user from '../asets/user.png'
import menu from '../asets/menu.png'
import close from '../asets/close.png'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [istrue , setIsTrue] = useState(false)
    const favData = useSelector(state => state.favList)
    const proData = useSelector(state => state.proList)
    
    return (<>
        <div style={{
            position : 'relative'
        }}>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6 headCol">
                            <section className='d-flex align-items-center gap-5'>
                                <div>
                                <NavLink to={'/'}>
                                    <img className='logo .image-with-background' src={logo} alt=""  />
                                </NavLink>
                                </div>
                                <nav style={{
                                    right : istrue ? '0%' : '-100%'
                                }} className='h-100 theNavLink p-5'>
                                    <div className="row d-lg-none d-lg-block theRowNavLink" style={{
                                        height : '6rem'
                                    }}>
                                        <div className="col-6 h-100">
                                            <div className='d-flex h-100 align-items-center justify-content-start w-100'>
                                                <img className='theLogo' src={logo} alt=""  />
                                            </div>
                                        </div>
                                        <div className="col-6 h-100 ">
                                            <div className='d-flex h-100  align-items-center justify-content-end w-100'>
                                                <img className='closebtn' onClick={() => setIsTrue(!istrue)} style={{cursor : 'pointer'}} src={close} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-lg-none mt-5 d-md-flex align-items-center justify-content-center flex-column ">
                                        <SearchBox/>
                                    </div>
                                    <LinkComp value = {istrue} setValue = {setIsTrue} />
                                </nav>
                            </section>
                        </div>
                        <div className="col-6 headCol">
                            <section className='d-flex align-content-center gap-4 justify-content-end h-100 '>
                                <div className="theSearchFrom d-lg-block d-md-none d-none">
                                    <SearchBox/>
                                </div>
                                
                                <NavLink to='/login'
                                className={localStorage.getItem('user') ? 'd-none' : 'favcart'} 
                                >
                                    <img src={user} alt="" />
                                </NavLink>

                                {<>
                                <NavLink to='/save' className={localStorage.getItem('user') ? 'favcart' : 'd-none'}>
                                    <div className='w-100 h-100' 
                                    style={{position : 'relative'}}>
                                        <img src={save} alt="" />
                                        <span className='saveCout d-flex align-items-center justify-content-center'>
                                            {favData.length}
                                        </span>
                                    </div>
                                </NavLink>
                                <NavLink to='/cart' className={localStorage.getItem('user') ? 'favcart' : 'd-none'}>
                                    <div className='w-100 h-100' 
                                    style={{position : 'relative'}}>
                                        <img src={bag} alt="" />
                                        <span className="saveCout d-flex align-items-center justify-content-center">
                                        {proData.length}
                                        </span>
                                    </div>
                                </NavLink> 
                                </>}
                                
                                <div className='favcart d-lg-none d-block'>
                                    <img src={menu} onClick={() => setIsTrue(!istrue)} alt="" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>)
}

export default NavBar