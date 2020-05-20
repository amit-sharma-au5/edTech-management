import React from 'react'
import { editLecture } from '../ActionCreators/action'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import axios from 'axios'

toast.configure()
class ManageLecture extends React.Component {

    state = {
        class: "",
        subject: "",
        topicId: "",
        topicProp: [],
        lectureName:"",
        lectureLink:"",
        lectureDesc:"",
        id:""
    }

    subjectTopics = {
        physics11: [
            "1. Basic math for physics",
            "2. Kinematics",
            "3. Newtons law of motion",
            "4. Frcition",
            "5. Work Power and Energy",
            "6. Centre of Mass",
            "7. Rotational Motion",
            "8. SHM",
            "9. Wave Motion",
            "10. Mechanical Properties of matter",
            "11. Fluid",
            "12. Thermal properties of matter",
            "13. KTG",
            "14. Thermodynamics"],
        physics12: [
            "1. Electrostatic",
            "2. Capacitor",
            "3. Current electricity",
            "4. Electrical devices",
            "5. Magnetism",
            "6. Magnetic properties",
            "7. Magnetic induction",
            "8. AC current",
            "9. Ray optics",
            "10. Wave optics",
            "11. Dual nature of light",
            "12.atom",
            "13. Nucleus",
            "14. Electronics",
            "15. Communication systems"
        ],
        maths11: [
            "1. Set theory",
            "2. Relation and function",
            "3. Trigonometry function and equation",
            "4. Principle of mathematics induction",
            "5. Straight line",
            "6. circle",
            "7. Conic section",
            "8. Sequence and series",
            "9. Permutations and combination",
            "10. Binomial theorem",
            "11. Logarithmic",
            "12. Limits and derivatives",
            "13. Probability",
            "14. Statistics",
            "15. Complex number"
        ],
        maths12: [
            "1. Function and relation",
            "2. Inverse trigonometry",
            "3. Matrix and determinat",
            "4. Continuity and differential",
            "5. Differentiation",
            "6. Application of differentiation",
            "7. Intergration",
            "8. Definite Integration",
            "9. Area under the curve",
            "10. Differential equations",
            "11. Vectors",
            "12. 3-D geometry",
            "13. Linerar programming",
            "14. Probability"
        ],
        chemistry11: [
            "1. Some basic concepts of chemistry",
            "2. Structure of atom",
            "3. Periodic table",
            "4. Chemical bonding",
            "5. states of matter",
            "6. chemical thermodynamics",
            "7. Equilibrium",
            "8. Redox reaction",
            "9. Hydrogen",
            "10. S block element",
            "11. p block element",
            "12. Organic chemistry : GOC",
            "13. Hydrocarbon",
            "14. Environment chemistry"
        ],
        chemistry12: [
            "1. Solid state",
            "2. Solution",
            "3. Electro chemistry",
            "4. Chemical kinetics",
            "5. Surface chemistry",
            "6. Principle of Isoaltion of elements",
            "7. P block element",
            "8. d and f block element",
            "9. Coordination compound",
            "10. Helogen derivatives",
            "11. Organic compound with oxygen functional group",
            "12. Organic compound with nitrogen function group",
            "13. Biomolecules",
            "14. Polymers",
            "15. Stereo chemistry",
            "16. Chemistry in daily life"
        ],
        biology11: [
            "1. The living world",
            "2. Biological classification",
            "3. Plant kingdom",
            "4. Animal kingdom",
            "5. Morphology of flowering plants",
            "6. Anatomy of flowering plants",
            "7. Structural organization in animals",
            "8. Cell: the unit of life",
            "9. Biomolecules",
            "10. Cell cycle and cell division",
            "11. Transport in plant",
            "12. Mineral nutrition",
            "13. photosynthesis in higher plant.",
            "14. Respiration in plant.",
            "15. Plant growth and development",
            "16. Digestion and absorption",
            "17. Breathing and exchange of gases.",
            "18. Body fluids and circulation",
            "19. Excretory products and their elimination",
            "20. Locomotion and movement",
            "21. Neural control and coordination",
            "22. Chemical coordination and integration"

        ],
        biology12: [
            "1. Reproduction in angiosperm plant",
            "2. structure and development : male and female gametophyte",
            "3. Pollination, fertilization, and endosperm and development of embryo",
            "4. Specific method of reproduction in plant",
            "5. Plant water relation",
            "6. Water absorption and Asent of sap in plant.",
            "7. Transpiration",
            "8. Mineral absorption in plant",
            "9. Enzymes",
            "10. Photosynthesis",
            "11. Respiration",
            "12. Nitrogen metabolism and nitrogen cycle",
            "13. Plant growth",
            "14. Biotechnology: Introduction",
            "15. Genetic engineering",
            "16. Plant tissue culture",
            "17. Economical botany and human walfair",
            "18. Oil, fiber, spices and production of medicine plant",
            "19. Sustainable agreeculture",
            "20. Bioenergy",
            "21. Human integumentary system",
            "22. Human digestive system",
            "23. Human respiratory system",
            "24. Human blood circulatory system",
            "25. Human excretory system",
            "26. Human nervous system",
            "27. Human sensory organ",
            "28. Human reproductive system",
            "29. Chemical coordination in human",
            "30. Locomotion in human",
            "31. Gametogenesis in human",
            "32. Fertilization in human",
            "33. Embryonic development in human",
            "34. Menstrual cycle in human and estrous cycle",
            "35. Mendals law of inheritance",
            "36. Chromosomal abnormalities in human",
            "37. Mutation",
            "38. Human population",
            "39. Immune system",
            "40. Important and common human disease",
            "41. Domestication, culture and economic importance of animals",
            "42. Bio- Medical technology"
        ]
    }

    selectClass = (value) => {
        var stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.class = value
        this.setState({
            class: stateCopy.class
        }, () => {
            var url = this.state.subject + this.state.class
            var topicCopy = JSON.parse(JSON.stringify(this.subjectTopics))
            switch (url) {
                default:
                    this.setState({
                        topicProp: []
                    })
                    break
                case "physics11":
                    this.setState({
                        topicProp: topicCopy.physics11
                    })
                    break
                case "physics12":
                    this.setState({
                        topicProp: topicCopy.physics12
                    })
                    break
                case "maths11":
                    this.setState({
                        topicProp: topicCopy.maths11
                    })
                    break
                case "maths12":
                    this.setState({
                        topicProp: topicCopy.maths12
                    })
                    break
                case "chemistry11":
                    this.setState({
                        topicProp: topicCopy.chemistry11
                    })
                    break
                case "chemistry12":
                    this.setState({
                        topicProp: topicCopy.chemistry12
                    })
                    break
                case "biology11":
                    this.setState({
                        topicProp: topicCopy.biology11
                    })
                    break
                case "biology12":
                    this.setState({
                        topicProp: topicCopy.biology12
                    })
            }
        })
    }

    selectSubject = (value) => {
        var stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.subject = value
        this.setState({
            subject: stateCopy.subject
        }, () => {
            var url = this.state.subject + this.state.class
            var topicCopy = JSON.parse(JSON.stringify(this.subjectTopics))
            switch (url) {
                default:
                    this.setState({
                        topicProp: []
                    })
                    break
                case "physics11":
                    this.setState({
                        topicProp: topicCopy.physics11
                    })
                    break
                case "physics12":
                    this.setState({
                        topicProp: topicCopy.physics12
                    })
                    break
                case "maths11":
                    this.setState({
                        topicProp: topicCopy.maths11
                    })
                    break
                case "maths12":
                    this.setState({
                        topicProp: topicCopy.maths12
                    })
                    break
                case "chemistry11":
                    this.setState({
                        topicProp: topicCopy.chemistry11
                    })
                    break
                case "chemistry12":
                    this.setState({
                        topicProp: topicCopy.chemistry12
                    })
                    break
                case "biology11":
                    this.setState({
                        topicProp: topicCopy.biology11
                    })
                    break
                case "biology12":
                    this.setState({
                        topicProp: topicCopy.biology12
                    })
            }
        })
    }

    selectTopic = (val) => {
        this.setState({
            topicId: val
        }, () => {
            let data = {
                class: this.state.class,
                subject: this.state.subject,
                topicId: this.state.topicId
            }
            this.props.editLecture(data)
        })
    }

    editLec = (val) =>{
        if(this.props.editLectures){
            this.setState({
                id: this.props.editLectures[val]._id,
                lectureName : this.props.editLectures[val].lectureName,
                lectureLink : this.props.editLectures[val].lectureLink,
                lectureDesc : this.props.editLectures[val].lectureDesc
            })
        }
    }

    changeTitle = (val) =>{
        this.setState({
            lectureName : val
        })
    }

    changeLink =(val) =>{
        this.setState({
            lectureLink : val
        })
    }

    changeDesc =(val) =>{
        this.setState({
            lectureDesc : val
        })
    }

    upDateLec =(e) =>{
        e.preventDefault()
        let data = {
            id : this.state.id,
            lectureName : this.state.lectureName.trim(),
            lectureLink : this.state.lectureLink.trim(),
            lectureDesc : this.state.lectureDesc.trim()
        }
        axios.patch("http://localhost:3010/addlecture",data).then(res =>{
            if(res.data){
                //console.log(res)
                toast.warn('Lecture Updated successfully',{ position : toast.POSITION.BOTTOM_RIGHT, autoClose: 5000})
            }
            else{
                toast.error('Server Error: Please Retry',{ position : toast.POSITION.BOTTOM_RIGHT, autoClose: 5000})
            }
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h2>Manage Lecture</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div class="form-group">
                            <label for="selectClass"><b>Class:</b></label>
                            <select className="form-control" id="selectClass" onClick={(e) => { this.selectClass(e.target.value) }} required>
                                <option>Choose Class ...</option>
                                <option value="11">11th</option>
                                <option value="12">12th</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label for="selectSubject"><b>Select Subject :</b></label>
                            <select className="form-control" id="selectSubject" onClick={(e) => { this.selectSubject(e.target.value) }} required>
                                <option>Choose subject ...</option>
                                <option value="physics">Physics</option>
                                <option value="maths">Maths</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label for="selectTopic"><b>Select Topic :</b></label>
                            <select className="form-control" onClick={(e) => { this.selectTopic(e.target.value) }} id="selectTopic" required>
                                <option>Choose Topic ...</option>
                                {
                                    this.state.topicProp.map((ele, index) => {
                                        return <option value={index} key={index}>{ele}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Link</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.editLectures.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index+1}</th>
                                        <th>{ele.lectureName}</th>
                                        <th><a class="btn btn-warning" target="_blank" href={ele.lectureLink} role="button"><b>Link</b></a></th>
                                        <td> <button type="button"  onClick={() =>{ this.editLec(index)}} value={ele} className="btn btn-warning mr-3" data-toggle="modal" data-target="#editLec">
                                                 <b>Edit</b>
                                             </button></td>
                                        <td><button type="button" className="btn btn-warning mr-5" data-toggle="modal" data-target="#pushAssignment" disabled>
                                             <b>Assignment</b> 
                                            </button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                <div className="modal fade" id="editLec" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Edit Lecture</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="lecTitle"><b>Lecture Title</b></label>
                                        <input type="email" onChange={(e) =>{this.changeTitle(e.target.value)}}  name="email" value={this.state.lectureName} className="form-control" id="lecTitle"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="lecLink"><b>Lecture Link</b></label>
                                        <input className="form-control" onChange={(e) => {this.changeLink(e.target.value)}} value={this.state.lectureLink} id="lecLink" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="desc"><b>Description</b></label>
                                        <textarea className="form-control" onChange={(e) => {this.changeDesc(e.target.value)}} value={this.state.lectureDesc} rows="3" id="desc"></textarea>
                                    </div>
                                    <button type="button" onClick={(e) =>{this.upDateLec(e)}} className="btn btn-warning"><b>Update</b></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="modal fade" id="pushAssignment" tabindex="-1" role="dialog"
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
                                        <input type="email"  className="form-control" id="userLoginEmail"
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
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("Lets edit our lecture", state.changeLecture)
    return {
        editLectures: state.changeLecture
    }
}
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ editLecture }, dispatch) }
export default connect(mapStateToProps, mapDispatchToProps)(ManageLecture) 