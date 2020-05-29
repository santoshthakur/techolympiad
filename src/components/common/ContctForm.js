import React, { Component } from 'react'

class ContctForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:'',
             mobile:'',
             message:'',
             errorName:'',
             errorEmail:'',
             errorMobile:'',
             errorMessage:''
        }
    }
    changeHandler=(e)=>{
        //alert(e.target.name)
        this.setState({
           [e.target.name]:e.target.value

        })
    }
    formSubmitHandler=(e)=>{        
        e.preventDefault();
        let {name,message,mobile,email,errorName,errorEmail,errorMobile,errorMessage}=this.state;
        //let strregex= /^/

        if(name.length<4 || name===""){
            errorName='Enter your name'
        }
        if(errorName){
            this.setState({errorName});

        }
        if(email===""){
            //alert("dsfdsdfsds");
            errorEmail='Enter your email' 
        }
        if(errorEmail){
            this.setState({errorEmail});
        }
        if(mobile===""){
            errorMobile='Enter your mobile'
        }
        if(errorMobile){
            this.setState({errorMobile})
        }
        if(message===''){
            errorMessage='Enter your message'
        }
        if(errorMessage){
            this.setState({errorMessage})
        }
    }

    render() {
        //const nameError= (name.length<4)?'<div>{errorName}</div>':null;
        const {name,message,mobile,email,errorName,errorEmail,errorMobile,errorMessage}=this.state;
        const renderName= (name.length<4)?<div className="errortext">{errorName}</div>:'';
        const renderEmail= (email.length<4)?<div className="errortext">{errorEmail}</div>:'';
        const renderMobile= (mobile.length<4)?<div className="errortext">{errorMobile}</div>:'';
        const renderMessage= (message.length<4)?<div className="errortext">{errorMessage}</div>:'';
        return (
            <>
            <form className="frmcontct" onSubmit={this.formSubmitHandler}>
                <div className="form-group">
                    <input type="text" placeholder="Name"  className="form-control cinput" name="name" id="name" value={name} onChange={this.changeHandler}   />
                    {renderName}
                </div>
                <div className="form-group row">
                    <div className="col-6"><input type="text" placeholder="Email" className="form-control cinput" name="email" id="email" value={email} onChange={this.changeHandler}  />
                    {renderEmail}

                    </div>

                    <div className="col-6"><input type="text" placeholder="Mobile" className="form-control cinput" name="mobile" id="mobile" value={mobile} onChange={this.changeHandler} />
                    {renderMobile}
                    </div>
                </div>
                <div className="form-group">
                    <textarea row="3" className="form-control cinput" placeholder="Message" name="message" id="message" value={message} onChange={this.changeHandler} ></textarea>
                    {renderMessage}
                </div>
                <button className="btn btn-primary tech-btn">Submit</button>
            </form>
            </>
        )
    }
}

export default ContctForm
