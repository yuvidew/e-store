import React, { useEffect, useState } from 'react'
import sign from '../asets/sign.png'
import user from '../asets/user.png'
import email from '../asets/emailsign.png'
import oEye from '../asets/oEye.png'
import cEye from '../asets/cEye.png'
import right from '../asets/right.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const Registration = () => {
    const [isTrue , setIsTrue] = useState(false)
    const [infoData , setInfoData] = useState({Name : '' , EmailId : '', Possword : ''})
    const histry = useNavigate()
    const {enqueueSnackbar} = useSnackbar()

    const handalSignData = (e) => {
        e.preventDefault();
        let data = {
            Name : e.target.elements['name'].value,
            EmailId : e.target.elements['email'].value,
            Possword : e.target.elements['password'].value,
        }

        setInfoData(data)
    }

    useEffect( () => {
        const fetchData = async () => {
            try{
                const res = await fetch('http://localhost:2000/sign/api' , {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify(infoData),
                })

            const data = await res.json()

            if(data.auth){
                enqueueSnackbar('Registed successfully', { variant: 'success' });
                localStorage.setItem('user' , JSON.stringify(data.user))
                localStorage.setItem('auth' , JSON.stringify(data.auth))
                histry('/login')
            }else{
                enqueueSnackbar('This Email id is already exists', { variant: 'error' });
            }

            }catch(e){
                enqueueSnackbar('SameThink is worng from the front-end', { variant: 'error' });
            }
        }

        fetchData(infoData)

    },[infoData])
    
    return (<>
        <section style={{
                backgroundColor : '#0B605A80',
                height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home <img src={right} alt="" /> <span className='fs-3'>Sign Up</span></h1>
            </div>
        </section>
        <div className="container">
            <section className='w-100 d-flex align-items-center justify-content-center loginsection' >
                <form onSubmit={handalSignData} action="#" className='p-5 loginForm'>
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <h2>Create account</h2>
                        <img className='loginImg' src={sign} alt="" />
                    </div>
                    <div className='border' style={{
                        position : 'relative'
                    }}>
                        <input type="text" id='name' placeholder='Your Name' />
                        <img className='signImg'  src={user} alt="" />
                    </div>
                    <br />
                    <br />
                    <div className='border' style={{
                        position : 'relative'
                    }}>
                        <input type="text" id='email' placeholder='Your Email' />
                        <img  className='signImg' src={email} alt="" />
                    </div>
                    <br />
                    <br />
                    <div className='border' style={{
                        position : 'relative'
                    }}>
                        <input type={isTrue ? 'text' : "password"} id='password' placeholder='Password' />
                        <img onClick={() => setIsTrue(!isTrue)} className='signImg' src={isTrue ? oEye : cEye} alt="" />
                    </div>
                    <br />
                    <br />
                    <div className="d-flex align-items-center justify-content-center">
                    <NavLink to='/login' className={'fs-4'}>login your email</NavLink>
                    </div>
                    <br />
                    <button type='submit' className='w-100 btn btn-primary fs-2' style={{
                        background : '#0b605a'
                    }}>Create</button>
                </form>
            </section>
        </div>
    </>)
}

export default Registration