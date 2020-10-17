import React, { useEffect } from 'react';
import { useState } from 'react';
// import picOne from '../../../images/customer-1.png';
// import picTwo from '../../../images/customer-2.png';
// import picThree from '../../../images/customer-3.png';
import ShowFeedback from '../ShowFeedback/ShowFeedback';

// const review=[
//     {
//         id: 1,
//         name: 'Donald Trump',
//         comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
//         company: 'CEO, Brain Campus',
//         pic: picOne
//     },
//     {
//         id: 2,
//         name: 'Norendro Modi',
//         comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
//         company: 'CEO, Oregami Soluation',
//         pic: picTwo
//     },
//     {
//         id: 3,
//         name: 'Karlos Pike',
//         comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus!",
//         company: 'CEO, Leaders Board',
//         pic: picThree
//     }
// ]

const Feedback = () => {
    const [review, setReview] = useState([]);
    
    useEffect(()=>{
        fetch('https://agile-tundra-08472.herokuapp.com/reviewList')
        .then(res=> res.json())
        .then(data=>setReview(data))
    } ,[])
    return (
        <section>
            <div>
                <h2 style={{textAlign: "center", paddingTop: '200px'}}>Client's <span style={{color: "green"}}>Review</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" w-75 row d-flex" style={{marginTop: '50px'}}>
                    {
                        review.map(comment => <ShowFeedback comment={comment} key={comment.id}></ShowFeedback>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;