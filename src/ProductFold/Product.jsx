import React, { useMemo, useState } from 'react'

// import css file
import './Product.css'

// import img
import right from '../asets/right.png'
import useFetch from '../UseFetchFold/useFetch'
import ProCardComp from './ProCardComp'
import LoadingComp from '../LoadingFold/LoadingComp'


const Product = () => {
  const [filter , setFilter] = useState('all')
  const [data] = useFetch('http://localhost:2000/api/product')

  return (<>
    <section style={{
            backgroundColor : '#0B605A80',
            height : '6rem'
    }}>
        <div className="container h-100">
            <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home <img src={right} alt="" /> <span className='fs-3'>Products</span></h1>
        </div>
    </section>

    <section className='mb-5'>
      <div className="container">
        <div className="filterBox mt-5">
          <div className="d-flex align-items-center gap-2">
            <h2 className='price'>Price : </h2>
              <select id="selecter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all" selected> All</option>
                <option value="100" > 100</option>
                <option value="130" > 130</option>
                <option value="150" > 150</option>
                <option value="170" > 170</option>
                <option value="200" > 200</option>
              </select>
          </div>
        </div>
        <div className="row mt-4">
          { data.length === 0 
          ?  <LoadingComp/>
          :
            data.map((ele) => (
            <div key={ele._id} className={filter === 'all' || ele.newPrice >= filter ?  "col-lg-3 col-md-6 col-sm-12 mt-4" : 'd-none'} >
              <ProCardComp ele = {ele} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </>)
}

export default Product