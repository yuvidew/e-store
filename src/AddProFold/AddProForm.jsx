import React, { useState } from 'react'
import './AddProFrom.css'
import { Container } from 'react-bootstrap'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import right from '../asets/right.png'
import FormComp from './FormComp';
import ProListComp from './ProListComp';

const AddProForm = () => {
    const [index , setIndex] = useState(0)
    return (<>
        <section style={{
                backgroundColor : '#0B605A80',
                height : '6rem'
        }}>
            <div className="container h-100">
                <h1 className='theLinkHed d-flex align-items-center h-100 gap-2'>Home 
                <img src={right} alt="" /> 
                <span className='fs-3'>Add New Products</span></h1>
            </div>
        </section>
        <section className='fromCont'>
            <Container className='h-100'>
                <div className="row h-100 p-5">
                    <div className="col-3 ">
                        <div className='w-100 d-flex align-items-start justify-content-center'>
                            <ul className="list-group w-100">
                                <li 
                                className="list-group-item p-3 d-flex align-items-center gap-2"
                                id={index === 0 && 'active'}
                                onClick={() => setIndex(0)}
                                > 
                                <DashboardCustomizeIcon/> Product From</li>
                                <li className="list-group-item p-3 d-flex align-items-center gap-2"
                                id={index === 1 && 'active'}
                                onClick={() => setIndex(1)}
                                > 
                                <FormatListBulletedRoundedIcon sx={{
                                    color : '#fff'
                                }}/> Product List</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                    {index === 0 ? 
                            <div className="w-100 h-100">
                                <FormComp/>
                            </div>
                        : 
                            <div className="w-100 h-100">
                                <ProListComp/>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </section>
    </>)
}

export default AddProForm