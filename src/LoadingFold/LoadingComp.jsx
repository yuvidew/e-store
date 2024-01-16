import { CircularProgress } from '@mui/material'
import React from 'react'
import logo from '../asets/logoStore.jpg'

const LoadingComp = () => {
    return (<>
        <section className='d-flex align-items-center justify-content-center flex-column' style={{
            width : '100%',
            height :'100vh'
        }}>
            <div>
                <img src={logo} style={{
                    mixBlendMode : 'multiply',
                    width: '20rem'
                }}/>
                <div className="d-flex align-items-center gap-3">
                    <CircularProgress />
                    <h1 className='fs-5' style={{color : '#1c1b19'}}>Loading..</h1>
                </div>
            </div>
        </section>
    </>)
}

export default LoadingComp