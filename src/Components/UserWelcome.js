import React from 'react';
import './UserWelcome.css'
import director from '../public/img/director.png';
import HeaderCommon from './HeaderCommon';
import { getJwt } from '../Helpers/jwt'
class UserWelcome extends React.Component {
    

    componentDidMount(){
        const jwt = getJwt()
        if(!jwt){
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <HeaderCommon />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-7">
                        <p className="text-center"><img src={director} alt="director" className="img-thumbnail"></img></p>
                            <h3>Director</h3>
                            <p>Dear Students,

There is no substitute to hard work, you must have heard but hard work accompanied by smart work is the key to excellence in the present world of cut-throat competition. Students generally find themselves in the ocean of confusion and dilemma when it comes to preparing for any exam. Usually students do not know how to start and what to study. To crack any exam, a smart aspirant must know that the previous year exam papers can give the glimpse of the pattern of exam. Besides this targeted preparation under expert guidance coupled with unmatched study material makes the task much easier.

At KD CAMPUS, we strive to provide you the best. We have no competitors throughout India but we set extremely tough targets for ourselves because we compete with tough targets of impeccable quality, arduous level of honest delivery in classrooms and impeccable study materials. In this endeavour, KD PUBLICATION brought out extremely sought after books, test series and magazine.

Students are today enlightened and focused. They know what they are up to. They need just a ray of guidance. I feel I have accomplished the reason of my existence on this earth. Proud to be that faint ray of guidance, proud to be a reason of smile on certain lips, proud to be your teacher, friend and guide.</p>
                        </div>
                        <div className="col-5">
                        <div class="dropdown m-2">
                            <button class="dropbtn"><b>Class XI</b></button>
                            <div class="dropdown-content">
                            <div class="dropdown-content">
                                <a href="/dashboard/physics/11">Physics</a>
                                <a href="/dashboard/chemistry/11">Chemistry</a>
                                <a href="/dashboard/maths/11">Maths</a>
                                <a href="/dashboard/biology/11">Biology</a>
                            </div>
                            </div>
                        </div>
                        <div class="dropdown m-2">
                            <button class="dropbtn"><b>Class XII</b></button>
                            <div class="dropdown-content">
                                <a href="/dashboard/physics/12">Physics</a>
                                <a href="/dashboard/chemistry/12">Chemistry</a>
                                <a href="/dashboard/maths/12">Maths</a>
                                <a href="/dashboard/biology/12">Biology</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserWelcome;