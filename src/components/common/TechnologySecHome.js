import React from 'react'
import slantimg from '../images/slantimg.png'

const TechnologySecHome=()=>{
    return(
        <div className="tech-sec col-12 p-0">

                <div className="skew-div"><img src={slantimg} alt="" /></div>
                <div className="d-flex justify-content-center align-items-center h-100 tech-right">
                    <div className="float-left technology-section">
                    <h3><strong>Technology Matters!</strong></h3>
                    <p>Software is becoming the language of our world. In the future, not knowing the language of computers will be as challenging as being illiterate or innumerate are today. Combine this with sensors, electronic circuits, and structured thinking, and you have a world that is driven by technology.<br></br><br></br>
                    Computational thinking is a skill that child should have.  
                    </p>
                    <button className="btn btn-primary tech-btn">Read More</button>
                    </div>
                </div>
        </div>
    )
}

export default TechnologySecHome;
