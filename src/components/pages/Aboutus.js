import React, { Component } from 'react'
import About from '../images/About.png'
class Aboutus extends Component {
    render() {
        return (
            <>
            <div className="BannerInner">
                <img src={About} alt="" className="img-fluid" />
            </div>
                <h1 className="text-center">About us</h1>
                <p className="mt-4 text-center">Tech Olympiad aims to test technology related concepts of students of grades 2 through 8. The goals of the competition are:

</p>
            </>
        )
    }
}

export default Aboutus
