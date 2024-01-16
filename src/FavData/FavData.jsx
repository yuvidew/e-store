import React from 'react'
/* import image  */

import right from '../asets/right.png'
import { useSelector } from 'react-redux'
import useFetch from '../UseFetchFold/useFetch'
import FavCard from './FavCard'


const FavData = () => {
    const favData = useSelector(state => state.favList)
    const [data] = useFetch('http://localhost:2000/api/product')
    return (<>
        <section style={{
            backgroundColor : '#0B605A80',
            height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home <img src={right} alt="" /> Products <img src={right} alt="" /> <span className='fs-3'>Saved</span></h1>
            </div>
        </section>
        <section className=' container mb-5'>
            <div className="row mb-5">
                {data.map((ele , index) => {
                    if(favData.includes(ele._id)){
                        return (<div key={index} className="col-lg-3 col-md-6 col-sm-12 mt-4">
                            <FavCard ele = {ele} index = {index} />
                        </div>)
                    }
                })}
                {favData.length === 0 && <h1>List was is empty...</h1>}
            </div>
        </section>
        
    </>)
}

export default FavData