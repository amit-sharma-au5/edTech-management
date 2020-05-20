import React from 'react';
import './Footer.css';
import { withRouter } from 'react-router-dom'
class Footer extends React.Component {
    goToAdmin(e){
        e.preventDefault()
        this.props.history.push("/admin")
    }
    render() {
        return (
            <div id="footer-main" className="w-100">
                <div className="footer" id="queryForm">
                    <div className="footer-content" >
                        <button type="button" onClick={(e) => {this.goToAdmin(e)}} className="btn btn-warning"><b>Admin</b></button>
                    </div>
                    <div className="footer-content">
                        
                </div>
                    <div className="footer-content">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><img src="https://img.icons8.com/bubbles/35/000000/facebook-new.png"  alt="fb"/> <img className="ml-2" src="https://img.icons8.com/doodle/35/000000/linkedin--v2.png"/> <img className="ml-2" src="https://img.icons8.com/color/32/000000/twitter.png"/> <img className="ml-2" src="https://img.icons8.com/color/35/000000/instagram.png"/></li>
                            <li><img src="https://img.icons8.com/color/35/000000/send-mass-email.png" alt="gmail"/> saraswatilearningc@gmail.com</li>
                            <li><img src="https://img.icons8.com/color/35/000000/touchscreen-smartphone.png" alt="mob"/>  9001159538 , 9414412389</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-around" id="footer-end">
                    <div>Made with Love</div>
                    <div>&copy;saraswatilearningcenter</div>
                    <div>work.amitsharma@gmail.com</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer)