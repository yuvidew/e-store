import React, { useContext, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewPro from '../HomeFold/NewPro'

// import css file
import './Product.css'
import './ResProduct.css'

// import img
import right from '../asets/right.png'
import useFetch from '../UseFetchFold/useFetch'
import ProDetelPageComp from './ProDetelPageComp'
import LoadingComp from '../LoadingFold/LoadingComp'

const ProDetel = () => {
    const proId = useParams()
    const [data] = useFetch('http://localhost:2000/api/product')
    const thedta = data.filter((ele) => ele._id === proId.slug)
    return (<>
    <section style={{
            backgroundColor : '#0B605A80',
            height : '6rem'
    }}>
        <div className="container h-100">
            <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>
            Home <img src={right} alt="" /> Products 
            <img src={right} alt="" /> <span className='fs-3'>{thedta.length !== 0 && thedta[0].title}</span></h1>
        </div>
    </section>
    {thedta.length !== 0 ?  <ProDetelPageComp 
        ele = {thedta[0]}
        _id = {thedta[0]._id}
        title = {thedta[0].title}
        brand = {thedta[0].brand}
        newPrice = {thedta[0].newPrice}
        oldPrice = {thedta[0].oldPrice}
        ImageName = {thedta[0].ImageName}
        discription = {thedta[0].discription}
    />
    : 
    <LoadingComp/>}
    </>)
}

export default ProDetel