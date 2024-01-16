import React , {useState } from 'react'
import login from '../asets/login.png'
import right from '../asets/right.png'
import { NavLink, useNavigate } from 'react-router-dom'
import email from '../asets/emailsign.png'
import oEye from '../asets/oEye.png'
import cEye from '../asets/cEye.png'
import { useSnackbar } from 'notistack'

import './Registration.css'
const Login = () => {
    const [isTrue , setIsTrue] = useState(false)
    const histry = useNavigate()
    const {enqueueSnackbar} = useSnackbar()

    const handalLoginData = (e) => {
        e.preventDefault();
        let data = {
            EmailId : e.target.elements['email'].value,
            Possword : e.target.elements['password'].value,
        }
        fetchData(data)
    }

    const fetchData = async (infoData) => {
        try{
            const res = await fetch('http://localhost:2000/login/api' , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(infoData),
            })
        const data = await res.json()
        if(data.auth){
            console.log(data)
            enqueueSnackbar('Welcome to E-Store', { variant: 'success' });
            localStorage.setItem('user' , JSON.stringify(data.user))
            localStorage.setItem('auth' , JSON.stringify(data.auth))
            histry('/')
            window.location.reload()
        }
        }catch(e){
            enqueueSnackbar('SameThink is worng from the Client', { variant: 'error' });
        }
    }
    return (<>
        <section style={{
                backgroundColor : '#0B605A80',
                height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home <img src={right} alt="" /> <span className='fs-3'>Login</span></h1>
            </div>
        </section>
        <div className="container">
            <section className='w-100 d-flex align-items-center justify-content-center loginsection' >
                <form onSubmit={handalLoginData} action="#" className='p-5 loginForm'>
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <h2>Login</h2>
                        <img className='loginImg' src={login} alt="" />
                    </div>
                    <div className='border' style={{
                        position : 'relative'
                    }}>
                        <input type="text" id='email' className='w-100' placeholder='Your Email' />
                        <img  className='signImg' src={email} alt="" />
                    </div>
                    <br />
                    <br />
                    <div className='border' style={{
                        position : 'relative'
                    }}>
                        <input type={isTrue ? 'text' : "password"} className='w-100' id='password' placeholder='Password' />
                        <img onClick={() => setIsTrue(!isTrue)} className='signImg' src={isTrue ? oEye : cEye} alt="" />
                    </div>
                    <br />
                    <br />
                    <div className="d-flex align-items-center justify-content-center">
                    <NavLink to='/sign' className={'fs-4'}>Create your account</NavLink>
                    </div>
                    <br />
                    <button type='submit' className='w-100 btn btn-primary fs-2' style={{
                        background : '#0b605a'
                    }}>Login</button>
                </form>
            </section>
        </div>
    </>)
}

export default Login