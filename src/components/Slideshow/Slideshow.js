import React from 'react';
import './Slideshow.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./Images/84157967_3024366287598844_2070334477606846464_o.jpg"
import img2 from "./Images/98301568_3008540372514769_6114077080490606592_o.jpg"
import img3 from "./Images/99142036_3007073962661410_8704192636312879104_n.jpg"
import img4 from "./Images/100086711_3008537892515017_6810711245369376768_o.jpg"
import img5 from "./Images/101311906_3024365594265580_1400891492981014528_o.jpg"
import img6 from "./Images/102261443_3047229795312493_4324057145758700523_o.jpg"
import img7 from "./Images/104105837_3057158304319642_8982315985857407794_o.jpg"

class Slideshow extends React.Component {
    render() {
        return (
            <div className="carouselContainer">
                
                {/* <div className="overlayText">
                    <div className="overlayImage"></div>
                    <h1>INNOVATING FOR AUTHENTIC MEXICAN FOOD SINCE 2009 </h1>
                    <p>—</p>
                    <p>Kiosco uses only the finest ingredients. 
                        Our food is prepared fresh daily and our sauces are made from 
                        scratch using our own special recipes.</p>
                </div> */}
                <Carousel className="carousel" interval={2500} controls={false} fade={false} indicators={false}>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img6}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                        className="d-block w-100"
                        src={img7}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div> 
            
        )
    }
}

export default Slideshow;