import React from 'react'
import {Carousel} from 'react-bootstrap'
import banner2 from '../images/banner2.png'
import banner1 from '../images/banner1.png'
import banner3 from '../images/banner3.png'

function Banner(){
    return(
        <Carousel id="homebanner">
        <Carousel.Item>
         <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
        <Carousel.Caption>
          <div className="container text-left">
            <h1>Any sufficiently
          <span className="d-block text-uppercase text-yellow">advanced technology</span>
              <span> is equivalent to magic</span>
          </h1>
          <p>- Arthur C. Clarke</p>
          </div>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />
            <Carousel.Caption>
            <div className="container text-left">
            <h1>We live in a society exquisitely dependent on
          <span className="d-block text-uppercase text-yellow">IF YOU ARE NOT INVESTING IN NEW TECHNOLOGY,</span>
              <span> in which hardly anyone knows anything about science and technology.</span>
          </h1>
          <p>-  Carl Sagan</p>
          </div>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
            <Carousel.Caption>
            <div className="container text-left">
          <h1>Good, bad or indifferent,
              <span className="d-block text-uppercase text-yellow">ADVANCED TECHNOLOGY</span>
              <span> you are going to be left behind.</span>
          </h1>
          <p>- Arthur C. Clarke</p>
          </div>
         </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Banner