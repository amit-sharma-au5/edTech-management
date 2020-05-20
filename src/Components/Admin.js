import React from 'react'
import axios from 'axios'
import './Admin.css'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'

class Admin extends React.Component {
    state = {
        email: "",
        password: ""
    }

    adminEmail = (val) => {
        this.setState({
            email: val
        })
    }

    adminPass = (val) => {
        this.setState({
            password: val
        })
    }

    adminAuth = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        if (data.email !== "" && data.password !== "") {
            axios.post("http://localhost:3010/admin", data).then(res => {
                localStorage.setItem('adminAuth', res.data.token)
                toast.success('Login Successfully', { position : toast.POSITION.BOTTOM_RIGHT, autoClose: 5000})
                this.props.history.push("/management")
            })
        }else{
            toast.error('Please Fill all details.', { position : toast.POSITION.BOTTOM_RIGHT, autoClose: 5000})
        }

    }
    render() {

        return (
            <div>
                <div className="container">
                    <p className="text-center">
                        <h2>Saraswati Learning Admin</h2>
                    </p>
                    <div id="admin-form">
                        <form>
                            <div className="form-group">
                                <label for="adminEmail"><b>Email address</b></label>
                                <input type="email" onChange={(e) => { this.adminEmail(e.target.value) }} className="form-control" id="adminEmail"
                                    aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label for="adminPass"><b>Password</b></label>
                                <input type="password" onChange={(e) => { this.adminPass(e.target.value) }} className="form-control" id="adminPass"
                                    placeholder="Password"></input>
                            </div>
                            <button type="submit" onClick={(e) => this.adminAuth(e)} className="btn btn-warning"><b>Submit</b></button>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default withRouter(Admin)