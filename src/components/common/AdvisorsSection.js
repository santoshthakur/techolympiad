import React from 'react'
import {Carousel} from 'react-bootstrap'
import advisor1 from '../images/advisor1.png'
import advisor2 from '../images/advisor2.png'
import advisor3 from '../images/advisor3.png'

const AdvisorsSection =()=>{
    return(
        <div className="container pt-5 pb-5 text-center advisor">
        <Carousel id="advisorsSection">
        <Carousel.Item>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor1} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Yvonne Burkhouse</strong></h4><p className="card-text">Yvonne is the CIO of HAAH Auto, an automotive holdings company that aims to bring vehicles fromaround the world to the US...</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor2} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Kate McGregor</strong></h4><p className="card-text">Kate manages Family and Community Programs at the famed Computer History Museum in Mountain View, California. Kate....</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor3} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Omar J. Rivas</strong></h4><p className="card-text">Omar is the CEO of Growth Café – a disruptive, innovative company with roots in the technology. Growth Café focuses on culturally...</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>            
        </Carousel.Item>
        <Carousel.Item>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor1} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Yvonne Burkhouse4444</strong></h4><p className="card-text">Yvonne is the CIO of HAAH Auto, an automotive holdings company that aims to bring vehicles fromaround the world to the US...</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor2} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Kate McGregor5555</strong></h4><p className="card-text">Kate manages Family and Community Programs at the famed Computer History Museum in Mountain View, California. Kate....</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>
            <div className="col-md-4 float-left">
                <span className="advisor-cover">
                  <div className="card mb-2">
                        <div className="advisor-box">
                            <img src={advisor3} alt="" className="card-img-top2" />
                        </div>
                        <div className="card-body"><h4 className="card-title"><strong>Omar J. Rivas</strong></h4><p className="card-text">Omar is the CEO of Growth Café – a disruptive, innovative company with roots in the technology. Growth Café focuses on culturally...</p><a className="btn btn-primary advisor-btn" href="/About#Yvonne">Read More <i className="fa fa-long-arrow-right"></i></a></div>
                   </div>  
                </span>
            </div>            
        </Carousel.Item>
      </Carousel>

        </div>
    )
}

export default AdvisorsSection;