import React from 'react'

function FooterSection() {
    return (
        <footer className="col-lg-12">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 footer-txt">
                        &copy; Tech olympiad   
                    </div>
                    <div className="col-sm-6 footer-txt text-right"><ul className="list-unstyled social d-inline-block"><li> <i className="fa fa-twitter" aria-hidden="true"></i> </li><li> <i className="fa fa-linkedin"></i> </li><li> <i className="fa fa-instagram"></i> </li></ul></div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
