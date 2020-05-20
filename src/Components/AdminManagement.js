import React from 'react';
import { withRouter } from 'react-router-dom'
import Question from './Question';
import AddLecture from './AddLecture';
import ManageLecture from './ManageLecture';
import { adminJwt } from '../Helpers/jwt'
import Footer from './Footer'
import './AdminManagement.css'
import logo from '../public/img/logo.png'

class AdminManagement extends React.Component {
    componentDidMount() {
        const admin = adminJwt()
        if (!admin) {
            this.props.history.push('/admin')
        }
    }
    state = ({
        isPage: "question"
    })

    question = (res) => {
        this.setState({
            isPage: res
        })
    }

    logout =() =>{
        localStorage.removeItem('adminAuth')
        this.props.history.push("/admin")
    }

    render() {
        return (
            <div>
                <div className="w-100">
                    <nav className="navbar navbar-expand-lg navbar-light bg-gradient-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand ml-5" href="/userwelcome"><img id="logo" src={logo} alt="logo"></img></a>


                        <div class="btn-group mr-5">
                            <button type="button" class="btn btn-outline-warning dropdown-toggle float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Set Profile</a>
                                <a class="dropdown-item" href="#">Suggestion Box</a>
                                <div class="dropdown-divider"></div>
                                <button type="button" className="dropdown-item" onClick={() => { this.logout() }}>Logout</button>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="row" id="lecManage">

                    <div className="col-3">
                        <button type="button" onClick={() => { this.question("question") }} class="btn d-block btn-warning mt-2 ml-2 w-75 btn-lg">Questions</button>
                        <button type="button" onClick={() => { this.question("addLecture") }} class="btn d-block btn-warning mt-2 ml-2 w-75 btn-lg">Add Lecture</button>
                        <button type="button" onClick={() => { this.question("manageLecture") }} class="btn d-block btn-warning mt-2 ml-2 w-75 btn-lg">Manage Lectures</button>
                    </div>
                    <div className="col-9">
                        {(() => {
                            if (this.state.isPage === "addLecture") {
                                return (
                                    <AddLecture />
                                )
                            } else if (this.state.isPage === "manageLecture") {
                                return (
                                    <ManageLecture />
                                )
                            } else {
                                return (
                                    <Question />
                                )
                            }
                        })()}

                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default withRouter(AdminManagement)