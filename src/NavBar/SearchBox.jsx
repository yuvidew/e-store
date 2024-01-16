import React, { useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import useFetch from '../UseFetchFold/useFetch'

const SearchBox = () => {
    const [inputData , setInputData] = useState('')
    const [data] = useFetch('http://localhost:2000/api/product')
    const filterPro = useMemo(() => 
    data.filter((ele) => 
    ele.title.toLowerCase().includes(inputData.toLowerCase()))
    , [data , inputData])
    return(<>
        <form className='d-flex w-100 form align-items-center gap-2'>
            <input 
            type="text" value={inputData} 
            onChange={(e) => setInputData(e.target.value)}  
            placeholder='Search for items...'
            style={{
                backgroundColor : 'transparent'
            }}
            />
            <button style={{backgroundColor : 'transparent'}}>{<FaSearch fill='#0b605a'/>}</button>
        </form>
        <section className='card theSearchCard mt-3 mb-3' style={{
            height : '50vh',
            overflowY : 'auto',
            display : filterPro.length !== 0 && inputData ? "block" : 'none',
            zIndex : '100'
        }}>
            <ul className="list-group list-group-flush">
            {filterPro.map((ele) => (
                <li key={ele._id} className="list-group-item" style={{
                    height : '15rem'
                }}>
                    <div className='row h-100' >
                        <div className="col-4 h-100">
                            <div className="imgBox h-100">
                                <img className='w-100 h-100 object-fit-contain' 
                                src={`/src/uploads/${ele.ImageName}`} alt="" />
                            </div>
                        </div>
                        <div className="col-4 h-100 ">
                            <div style={{
                                height : '100%'
                            }} className=" d-flex align-items-start flex-column h-100 justify-content-center">
                                <h1 className='fs-1 text-capitalize'>{ele.title}</h1>
                                <span>${ele.newPrice}/-</span>
                            </div>
                        </div>
                        <div className="col-4 h-100">
                            <div 
                            className="d-flex  h-100 align-items-center justify-content-end">
                                <button className='w-50 thebtnhbvas' >See</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </section>
    </>)
}

export default SearchBox