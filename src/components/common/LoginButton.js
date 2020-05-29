import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import Loginimg from '../images/Loginimg.jpg'
function LoginButton (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button variant="outline-primary btn-login"  onClick={handleShow}>Login</Button>
        <Modal show={show} onHide={handleClose} id="loginModule" size="lg">
        <Modal.Body>
        <div className="row no-gutters">
            <div className="col-6"><img src={Loginimg} className="img-fluid" alt="" /></div>
            <div className="d-flex justify-content-center align-items-center col-6 frmh">
            <div className="col">
            <Modal.Header closeButton>
                <div className="h4">Login</div>
            </Modal.Header>
            <form className="mt-3">
                <div className="form-group">
                    <label className="w-100" htmlFor="uname">Username</label>
                    <input type="text" name="uname" id="uname" className="form-control inputgray" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label className="w-100" htmlFor="pass">Password</label>
                    <input type="text" name="pass" id="pass" className="form-control inputgray" placeholder="Password" />
                </div>
                <div className="custom-control custom-checkbox mt-3">
                    <input type="checkbox" className="custom-control-input" id="remember" name="remember" />
                    <label className="custom-control-label" htmlFor="remember">Remember me</label>
                </div>
                <button className="btn btn-primary d-block w-100 mt-3">Login</button>
                <div className="mt-3">                 
                    <div className="col-6 p-0 float-left"><p className="small size11">Forgot Username / Password?</p></div>
                    <div className="col-6 p-0 float-left"><p className="small size11">Not yet registered? <span className="font-weight-bold">Register</span></p></div>
                    
                </div>
            </form>
            </div>
        </div>
        </div>
        </Modal.Body>


      </Modal>
        </>
    )
}
export default LoginButton
