import React from 'react'

/*import imag */
import './CartPage.css'

// import img & icons
import btn from '../asets/bin.png'
import right from '../asets/right.png'
import print from '../asets/print.png'
import { FaShoppingBag } from 'react-icons/fa'
import AddresFrom from './AddresFrom'
import { useDispatch, useSelector } from 'react-redux'
import { removePro  , incresQuntity , dicrisQuntity} from '../ProductSlice.jsx/ProductSlice'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage = () => {
    const proData = useSelector(state => state.proList)
    const dispatch = useDispatch()
    const total = proData.reduce((accumulator , curenrValue) => {
        return accumulator + curenrValue.newPrice
    } , 0) 
    console.log(total);
    return (<>
        <section style={{
            backgroundColor : '#0B605A80',
            height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2' >
                Home <img src={right} alt="" /> 
                <span className='fs-3'>Card</span></h1>
            </div>
        </section>
        <section>
            <div className="container h-100">
                <div className=" w-100 mt-5">
                    <table className='thTable' style={{
                        width : '100%'
                    }}>
                        <thead>
                            <tr>
                                <th className='text-center fs-3'>Image</th>
                                <th className='text-center fs-3'>Name</th>
                                <th className='text-center fs-3'>Price</th>
                                <th className='text-center fs-3'>Quantity</th>
                                <th className='text-center fs-3'>Remove</th>
                            </tr>
                        </thead>
                        {proData.length !== 0 && proData.map((ele ) => {
                                return(
                                    <tbody key={ele._id}>
                                        <td><img src={`/src/uploads/${ele.ImageName}`} alt="" /></td>
                                        <td>
                                            <div>
                                                <h1 style={{color : "#0b605a" , textTransform : 'capitalize'}}>{ele.title}</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                        </td>
                                        <td style={{
                                            fontSize : '1.3rem'
                                        }}>${ele.newPrice}/-</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <button className='incresDisc btn btn-primary'
                                                onClick={() => dispatch(dicrisQuntity(ele._id))}>
                                                    <RemoveIcon style={{color : 'aliceblue'}} />
                                                </button>
                                                <input type="text" value={ele.Quantity} className='inputBoc text-center' disabled />
                                                <button className='incresDisc btn btn-primary'
                                                onClick={() => dispatch(incresQuntity(ele._id))}>
                                                    <AddIcon sx={{color : 'secondary'}} />
                                                </button>
                                            </div>
                                        </td>
                                        <td><img src={btn} alt="" 
                                        onClick={()=> dispatch(removePro(ele._id))}  /></td>
                                    </tbody>
                                )
                        })}
                    </table>
                    <div className="d-flex align-items-center justify-content-end gap-4 mt-5">
                        <button  className='p-3 orderbtn'><FaShoppingBag fill='#eaf0f0' style={{
                            marginRight : '.5rem'
                        }} /> Cuntinue Shooping</button>
                    </div>
                </div>
            <br />
            <br />
            <section className='d-flex align-items-center justify-content-center mt-5' style={{
                borderBottom : '.1px solid #abadac',
                position : 'relative'
            }}>
                <img style={{
                    position : 'absolute',
                    background : '#fff',
                    border : '2px solid #fff',
                    bottom : '-2rem'
                }} className='printImg' src={print} alt="" />
            </section>
            <AddresFrom total = {total} />
            </div>
        </section>
    </>)
}

export default CartPage