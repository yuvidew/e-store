import React from 'react'

/*import image  */
import deal1 from '../asets/deals-1.jpg'
import deal2 from '../asets/deals-2.png'

const DealBaner = () => {
    const dealData = [
        {imgSrc : deal1, heading : 'Deal of the Day' , p : 'Limited quantities' , h3 : 'Summer collection New Morden Design' , newPrice : 139.00, oldPrice : 160.99 , },
        {imgSrc : deal2, heading : 'Women Clothing' , p : 'Shirt & Bag' , h3 : 'Try something new on vacation' , newPrice : 178.00, oldPrice : 256.99 , },
    ]
    return (<>
        <section>
            <div className="row">
                {dealData.map((ele , index) => (
                    <div key={index} className="col-lg-6 mt-4" style={{ height : '35rem' }}>
                        <article style={{position :'relative' , width : '100%' , height : '100%'}}>
                            <img style={{width : '100%' , height : '100%' }} className=' object-fit-cover' src={ele.imgSrc} alt="" />
                            <div className="textBox p-5" style={{position : 'absolute' , top : '0'}}>
                                <h1>{ele.heading}</h1>
                                <p>{ele.p}</p>
                                <h3>{ele.h3}</h3>
                                <br />
                                <h3><span>${ele.newPrice}</span> <del>${ele.oldPrice}</del></h3>
                                <br />
                                <p>Hurry Up! Offer End In:</p>
                                <div className="d-flex theDive gap-2 align-items-center">
                                    <div className='text-center'>
                                        <h4>02</h4>
                                        <p>Days</p>
                                    </div>
                                    <p>:</p>
                                    <div className='text-center'>
                                        <h4>22</h4>
                                        <p>Hours</p>
                                    </div>
                                    <p>:</p>
                                    <div className='text-center'>
                                        <h4>57</h4>
                                        <p>Mine</p>
                                    </div>
                                    <p>:</p>
                                    <div className='text-center'>
                                        <h4>24</h4>
                                        <p>Sec.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    </>)
}

export default DealBaner