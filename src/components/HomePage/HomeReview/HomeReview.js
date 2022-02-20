import React, { useEffect, useState } from 'react';

const HomeReview = () => {
    const [homeReview, setHomeReview] = useState([])
    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setHomeReview(data))
    } ,[]);

    return (
        <div className="container text-center mt-5 mb-5">
            <h2 className="">Review Section</h2>
            <small className="mb-5">better experince help better review</small>
            
            <div className="row text-center row-cols-1 row-cols-md-2 g-4">
            
            {
                homeReview.map(homeReview =>
                <div class="card mx-3 border-0" style={{width: "18rem"}}>
                    <p style={{color:"#FFDC37", marginTop:'40px'}}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                    
                <div class="card-body">
                  <h5 class="card-title">{homeReview.name}</h5>
                  <p class="card-text">{homeReview.description}</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
              {/* </div>
            homeReview.map(homeReview => <div>
                <h3>{homeReview.name}</h3>
                <p>{homeReview.description}</p>
                <button  className="btn btn-danger">delete</button> */}

            </div>)
        }
        </div>
        </div>
    );
};

export default HomeReview;