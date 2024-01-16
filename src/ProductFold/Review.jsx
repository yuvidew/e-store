import React from 'react'
import rating from '../asets/rating.png'

const Review = () => {
    const revDetal = [
        {imgSrc : 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1701365471~exp=1701366071~hmac=089269aebb6b53862d198deae7831f041c523ad04434c1e55a394daccf153b77' , userName : 'John Doe' , peraGraf : 'Thanks you very fast shopping from Poland from 3 day'},
        {imgSrc : 'https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?w=996&t=st=1701365521~exp=1701366121~hmac=d77f2b8957a7dc7e8b0eba172ea12f289856555a291f8cba21d96a38c7a79724' , userName : 'Nathasa lin' , peraGraf : 'Great low price and work well'},
        {imgSrc : 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?w=996&t=st=1701365498~exp=1701366098~hmac=0d847467a5393c4a59d4f45f423f56514f91223651c5a34211e914f3b4119e48' , userName : 'Jony Woker' , peraGraf : 'Thanks you very fast shopping from Poland from 3 day'},
    ]
    return (<>
        <div className="review p-2" >
            <h2>Reviews({revDetal.length})</h2>
        </div>
        <section className='row mb-5'>
            {revDetal.map((ele , index) => (
                <div key={index} className="col-lg-6 mt-4" >
                    <div className="ReviwImg d-flex align-items-center gap-3">
                        <div className="left d-flex align-items-center justify-content-center flex-column h-100">
                            <div className="imgBox">
                                <img src={ele.imgSrc} alt="" />
                            </div>
                            <h4 className='text-center'>{ele.userName}</h4>
                        </div>
                        <div className="right h-100">
                            <img src={rating} alt="" />
                            <p style={{
                                marginTop : '-1.8rem'
                            }}>{ele.peraGraf}</p>
                            <p>Date :- <i>12/04/2023</i></p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </>)
}

export default Review