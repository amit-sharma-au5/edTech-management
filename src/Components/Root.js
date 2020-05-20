import React from 'react';
import { toast } from 'react-toastify'
import Typical from 'react-typical'
import director from '../public/img/director.png';
import Header from './Header'
import Footer from './Footer'
import './Root.css'

toast.configure()
class Root extends React.Component {
    render() {
        return (
            <div className="root"> 
                <Header />

                <div className="content container">
                        <div>
                            <h2><Typical 
                                loop={Infinity} 
                                wrapper="h2"
                                steps = {
                                    [
                                        'Welcome To Saraswati Classes',
                                        2000,
                                        'Both Hindi & English medium',
                                        2000
                                    ]
                                }
                            /></h2>
                            <h4 className="mt-3 ml-3">One Stop solution for</h4>
                            <ul className="ml-3">
                                <li><h5>IIT JEE</h5></li> 
                                <li><h5>NEET</h5></li>
                                <li><h5>XI AND XII</h5></li> 
                                <li><h5>Both Hindi & English medium</h5></li>
                            </ul>
                        </div>
                </div>
                <section>
        <div className="d-flex align-items-end">
            <div className="container bg-mimosa">
                <div className="row mt-4 mb-4">
                    <div className="col-3">
                        <p className="text-center"><h4><b>Structured Courses</b></h4></p>
                    </div>
                    <div className="col-3">
                        <p className="text-center"><h4><b>Interactive Lectures </b></h4></p>
                    </div>
                    <div className="col-3">
                        <p className="text-center"><h4><b>Concept Building</b></h4></p>
                    </div>
                    <div className="col-3">
                        <p className="text-center"><h4><b>Practical Approach</b></h4></p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className="mt-5">
        <div className="container mt-3">
            <div className="row">
                <div className="headingfont col-12">
                    <h2 className="text-center">
                        Toppers
                    </h2>
                    <p className="text-center mt-1">Find inspiration for your Special Day. Yours could be the next Success
                        Story.</p>
                </div>
            </div>
            <div className="row justify-content-center  mt-3">
                <div className="col-xl-4 col-md-6">
                    <p className="text-center">
                        <div className="card mx-auto ">
                            <img className="card-img-top" src={director} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Deeksha & Nakul</h5>
                                <p className="card-text">Thanks a ton Anil Jha for finding perfect match for my daughter.
                                    She is settled in California and I ...</p>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="col-xl-4 col-md-6">
                    <p className="text-center">
                        <div className="card mx-auto ">
                            <img className="card-img-top" src={director} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Jyoti and Rahul</h5>
                                <p className="card-text">Thanks a ton Jyoti for finding perfect match for my daughter. She
                                    is settled in California and I ...</p>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="col-xl-4 col-md-6">
                    <p className="text-center">
                        <div className="card mx-auto ">
                            <img className="card-img-top" src={director} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Kanika and Siddharth</h5>
                                <p className="card-text">Thanks a ton Kanika for finding perfect match for my daughter. She
                                    is settled in California and I ...</p>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        
    </section>


                <Footer />
            </div>
        )
    }
}


export default Root;