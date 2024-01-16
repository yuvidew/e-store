import React, { useState } from 'react'
import axios from 'axios';

const FormComp = () => {
    const [title , setTitle] = useState('')
    const [brand , setBrand] = useState('')
    const [newPrice , setNewPrice] = useState('')
    const [oldPrice , setOldPrice] = useState('')
    const [img , setImg] = useState(null)
    const [dis , setDis] = useState('')

    const handelFormSub = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title' , title)
        formData.append('brand' , brand)
        formData.append('image' , img)
        formData.append('newPrice' , newPrice)
        formData.append('oldPrice' , oldPrice)
        formData.append('dis' , dis)

        handalthePostData(formData)
    }

    const handalthePostData = async (formData) => {
        try {
            const res = await axios.post('http://localhost:2000/api/store/product' , formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }) 

            if(res.data) alert(res.data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='card h-100'>
            <form onSubmit={handelFormSub} className='p-3' style={{
                width : '100%',
                height : '100%'
            }}>
                <h1 className="text-center theHeading pt-3">Create New Product </h1>
                <div className="d-flex align-items-center gap-5 w-100 p-2 mt-5">
                    <div
                        className='w-100'
                    >
                        <label htmlFor="title">Title</label>
                        <input value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" 
                        className='w-100 borderBox'
                        placeholder='Enter Title..' />
                    </div>
                    <div
                        className='w-100'
                    >
                        <label  htmlFor="brand">Brand</label>
                        <input value={brand}
                        onChange={(e) => setBrand(e.target.value)} type="text" 
                        className='w-100 borderBox'
                        placeholder='Enter Brand..' />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-5 w-100 p-2 mt-3">
                    <div
                        className='w-100'
                    >
                        <label  htmlFor="newPrice">New Price</label>
                        <input value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)} type="number" 
                        className='w-100 borderBox'
                        placeholder='Enter New Price..' />
                    </div>
                    <div
                        className='w-100'
                    >
                        <label  htmlFor="oldPrice">Old Price</label>
                        <input  value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)} type="number" 
                        className='w-100 borderBox'
                        placeholder='Enter Old Price..' />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-5 w-100 p-2 mt-3">
                <div className=" borderBox w-100">
                    <input onChange={(e) => setImg(e.target.files[0])} type="file" name="" id="" />
                </div>
                </div>
                <div className="  w-100">
                    <label  htmlFor="discription">Description</label>
                    <textarea value={dis}
                        onChange={(e) => setDis(e.target.value)} className='theTextter borderBox p-2 fs-4'></textarea>
                </div>
                <button className='btn  fs-3 p-2 btnBox mt-2 '>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormComp