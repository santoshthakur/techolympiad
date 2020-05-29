import React from 'react'

function EmailerSection() {
    return (
        <div className="col-lg-12 validate pt-4 pb-4 float-left">
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="text-left mt-5 mb-5 pb-2 text-light border-right validate-txt"><strong>Validate<br/>Certificate</strong></h2>
                    </div>
                    <div className="col-lg-8 mt-5">
                    <p>Enter your certficate code to validate.</p>
                    <div><form><div className="input-group mb-3"><input type="tex" className="form-control validate-input" placeholder="Certificate Code" aria-label="Certificate Code" /><div className="input-group-append"><button className="btn btn-primary validate-btn">Validate</button></div></div></form></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailerSection
