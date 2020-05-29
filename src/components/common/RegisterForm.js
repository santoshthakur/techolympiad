import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import Registerimg from '../images/Registerimg.jpg'

function RegisterFrom(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
<>
        <Button variant="btn btn-primary btn-regis"  onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose} id="loginModule" size="lg">
        <Modal.Body>
        <div className="row no-gutters">
            <div className="col-6"><img src={Registerimg} className="img-fluid" alt="" /></div>
            <div className="d-flex justify-content-center align-items-center col-6 frmh">
            <div className="col">
            <Modal.Header closeButton>
                <div className="h4">Register Now</div>
            </Modal.Header>
            <form className="mt-3">
                <div className="form-group">
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="school" name="userType" value="customEx" />
                    <label className="custom-control-label" htmlFor="school">School</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="userType" id="parents" />
                    <label className="custom-control-label" htmlFor="parents">Parents</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="userType" id="coach" />
                    <label className="custom-control-label" htmlFor="coach">Coach</label>
                </div>                               
                </div>

                <div className="form-group">
                    <label className="w-100" htmlFor="uname">Username</label>
                    <input type="text" name="uname" id="uname" className="form-control inputgray" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label className="w-100" htmlFor="pass">Password</label>
                    <input type="text" name="pass" id="pass" className="form-control inputgray" placeholder="Password" />
                </div>

                <button className="btn btn-primary d-block w-100 mt-3">Login</button>
            </form>
            </div>
        </div>
        </div>
        </Modal.Body>


      </Modal>
        </>
    )
}


export default RegisterFrom;