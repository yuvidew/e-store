import React, { useReducer } from 'react'
import uploder from '../asets/uploadImg.png'

const initialState = {
    title: '',
    brand : '',
    newPrice: '',
    oldPrice: '',
    imgsrc: '',
    discription: '',
};

const reducer = (state , action) => {
    switch(action.type){
        case 'SET_FIELD' : 
        return {
            ...state,
            [action.fieldName]: action.fieldValue,
        };
        case 'RESET_FORM':
        return initialState;
        default:
        return state;
    }
}

const ProForm = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
    const handalInputChane = (inputData) => {
        const {name , value} = inputData;
        dispatch({type : 'SET_FIELD' ,fieldName: name, fieldValue: value })
    }

    const handalSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }
    return (<>
        <form className='w-100 p-4 border-0 ' onSubmit={handalSubmit}>
            <div className="d-flex align-items-center gap-4">
                <div className='w-50 mt-3'>
                    <label htmlFor="ProductName" className='fs-4'>Product Name</label>
                    <input type="text" name='title'   onChange={(e) => handalInputChane(e.target)} value={state.title} placeholder='Enter Product Name' className='mt-2' />
                </div>
                <div className='w-50 mt-3'>
                    <label htmlFor="ProductName" className='fs-4'>Brand Name</label>
                    <input type="text" name='brand'  onChange={(e) => handalInputChane(e.target)} value={state.brand} placeholder='Enter Brand Name' className='mt-2' />
                </div>
            </div>
            <div className="d-flex align-items-center gap-4 mt-3">
                <div className='w-50 mt-3'>
                    <label htmlFor="ProductName" className='fs-4'>New Price</label>
                    <input type="number" name='newPrice'  onChange={(e) => handalInputChane(e.target)} value={state.newPrice} placeholder='Enter New Price' className='mt-2' />
                </div>
                <div className='w-50 mt-3'>
                    <label htmlFor="ProductName" className='fs-4'>Old Price</label>
                    <input type="number" name='oldPrice'  onChange={(e) => handalInputChane(e.target)} value={state.oldPrice} placeholder='Enter Old Price' className='mt-2' />
                </div>
            </div>
            <div className="d-flex align-items-center gap-4 mt-3">
                <label htmlFor="uploder" className='btn btn-primary w-100 uploder'>
                    <img  src={uploder} alt="" />
                    <input type="file" name='imgsrc'  onChange={(e) => handalInputChane(e.target)} value={state.imgsrc} accept='*/images' id='uploder' className='d-none' />
                </label>
            </div>
            <div className='mt-3'>
                <label htmlFor="descreiption" className='fs-4'>Product Description</label>
                <textarea style={{resize : 'none' , outline : 'none'}} 
                name='discription' className='w-100 thetextarea mt-2'  onChange={(e) => handalInputChane(e.target)} value={state.discription} ></textarea>
            </div>
            <button className='uploder w-25 mt-3 theSubmit'>Submit</button>
        </form>
    </>)
}

export default ProForm