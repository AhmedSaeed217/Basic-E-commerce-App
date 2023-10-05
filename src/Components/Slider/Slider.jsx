import React from 'react'
import img1 from "../imgs/img1.jpg"
import img2 from "../imgs/img2.jpg"
import img3 from "../imgs/img3.webp"
import './slider.css'
export default function Slider() {
    return <>
        <div className="container-fluid mainSlider mt-2">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active " data-bs-interval="500">
                            <img src={img1} className="d-block w-100 height-600 rounded" alt="img Slider one" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100 height-600 rounded" alt="img Slider two" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 height-600 rounded" alt="img Slider three" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>


    </>
}

