import React from 'react';
import logo from '../public/img/logo1.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
    state = {
        email: "",
        password: "",
        cPass: "",
        mob: ""
    }

    setEmail = (val) => {
        this.setState({
            email: val
        })
    }

    setPass = (val) => {
        this.setState({
            password: val
        })
    }

    setMob = (val) => {
        this.setState({
            mob: val
        })
    }

    checkPass = (val) => {
        this.setState({
            cPass: val
        })
    }

    signUp = (e) => {
        e.preventDefault()
        if (this.state.password === this.state.cPass) {
            let data = {
                email: this.state.email,
                mob: this.state.mob,
                password: this.state.password
            }
            if (data.email !== "" && data.mob !== "" && data.password !== "") {
                axios.post('http://localhost:3010/signup', data).then(
                    res => {
                        if (res.data) {
                            toast.success('SignUp successfully, Please Login', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
                        } else {
                            if (res.data === false) {
                                toast.error('User already exists', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
                            } else {
                                toast.error('Server Error, Try Again', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
                            }
                        }
                    }
                )

                console.log(data)
            } else {
                toast.error('Please fill all fields', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
            }

        } else {
            toast.error('Password does not match', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
        }
    }

    loginEvent = () => {

        let data = {
            email: this.state.email,
            password: this.state.password
        }
        if (data.email !== "" && data.password !== "") {
            axios.post('http://localhost:3010/login', data).then(
                res => {
                    localStorage.setItem('myAuth', res.data.token);
                    this.props.history.push("userwelcome")
                }
            )
        }else{
            toast.error('Please Fill all filelds', { position : toast.POSITION.BOTTOM_RIGHT, autoClose: 3000})
        }

    }


    render() {
        return (
            <div className="row">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand ml-5" href="/userwelcome"><img id="logo" src={logo} alt="logo"></img></a>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                            <button type="button" className="btn btn-warning mr-3" data-toggle="modal" data-target="#userLogin">
                                <b>Login</b>
                            </button>
                            <button type="button" className="btn btn-warning mr-5" data-toggle="modal" data-target="#userSignup">
                                <b>SignUp</b>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="modal fade" id="userLogin" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="userLoginEmail"><b>Email address</b></label>
                                        <input type="email" onChange={(e) => { this.setEmail(e.target.value) }} className="form-control" id="userLoginEmail"
                                            aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="userLoginPassword"><b>Password</b></label>
                                        <input type="password" onChange={(e) => { this.setPass(e.target.value) }} className="form-control" id="userLoginPassward"
                                            placeholder="Password"></input>
                                    </div>
                                    <button type="button" onClick={() => { this.loginEvent() }} className="btn btn-warning"><b>Submit</b></button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <h6><b>New to Saraswati classes</b></h6>
                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#userSignup" data-dismiss="modal" >
                                    <b>SignUp</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="userSignup" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Sign up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="userEmail"><b>Email address</b></label>
                                        <input type="email" name="email" onChange={(e) => { this.setEmail(e.target.value) }} className="form-control" id="userEmail"
                                            aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="mobNum"><b>Mobile Number</b></label>
                                        <input className="form-control" onChange={(e) => { this.setMob(e.target.value) }} id="mobNum" type="text" placeholder="Mobile number"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1"><b>Password</b></label>
                                        <input type="password" onChange={(e) => { this.setPass(e.target.value) }} name="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Password"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1"><b>Confirm Password</b></label>
                                        <input type="password" onChange={(e) => { this.checkPass(e.target.value) }} className="form-control" id="exampleInputPassword1"
                                            placeholder="Confirm Password"></input>
                                    </div>
                                    <button type="button" onClick={(e) => { this.signUp(e) }} className="btn btn-warning"><b>Submit</b></button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <h6><b>Already have an Account</b></h6>
                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#userLogin" data-dismiss="modal" >
                                    <b>Login</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Header)