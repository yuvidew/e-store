import React from 'react'

const BillingForm = () => {
    const fromPLacArr = [
        {text : 'text' , plac : 'Name'},
        {text : 'text' , plac : 'Address'},
        {text : 'text' , plac : 'City'},
        {text : 'text' , plac : 'Country'},
        {text : 'number' , plac : 'PostCode'},
        {text : 'number' , plac : 'Phone'},
        {text : 'email' , plac : 'Email'},
    ]
    return (<>
        <section className='mb-5'>
        {fromPLacArr.map((ele , index) => (
            <div key={index} className="mt-3 w-100 theInput">
                <input type={ele.text} className='w-100' placeholder={ele.plac} />
            </div>
        ))}
        </section>
    </>)
}

export default BillingForm