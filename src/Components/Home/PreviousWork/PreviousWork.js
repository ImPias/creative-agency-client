import React from 'react';
import CarouselOne from '../../../images/carousel-1.png';
import CarouselTwo from '../../../images/carousel-2.png';
import CarouselThree from '../../../images/carousel-3.png';

const PreviousWork = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <img src={CarouselOne} className="d-block " alt="" />
                </div>
                <div className="carousel-item" data-interval="2000">
                    <img src={CarouselTwo} className="d-block " alt="" />
                </div>
                <div className="carousel-item">
                    <img src={CarouselThree} className="d-block " alt="" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default PreviousWork;