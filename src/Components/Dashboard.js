import React from 'react';
import ReactPlayer from 'react-player'
import './Dashboard.css';
import Footer from './Footer'
import HeaderCommon from './HeaderCommon'
import { getJwt } from '../Helpers/jwt'
import { getLecture } from '../ActionCreators/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Dashboard extends React.Component {
    componentDidMount(){
        const jwt = getJwt()
        if(!jwt){
            this.props.history.push('/');
        }
        var url = window.location.pathname
        var urlId =  url.split('/');
        this.currentSubject()
        this.props.getLecture(urlId[2],urlId[3])
    }
    state = {
        topicProp: [],
        currentPlaying: 'https://youtu.be/Ps0S4TMtqrE',
        desc: "",
        assignment: [],
        doubt:[]

    }

    subjectTopics = {
        physics11: [
            "1. Basic math for physics",
            "2. Kinematics",
            "3. Newtons law of motion",
            "4. Friction",
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
            "15 . Communication systems"
        ],
        maths11 : [
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
        maths12 : [
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
            "5.states of matter",
            "6.chemical thermodynamics",
            "7. Equilibrium",
            "8. Redox reaction",
            "9. Hydrogen",
            "10. S block element",
            "11 p block element",
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
            "2.structure and development : male and female gametophyte",
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
 
    currentSubject = () => {
        var url = window.location.pathname
        var urlId =  url.split('/');
        url = urlId[2] + urlId[3]
            
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
                    topicProp : topicCopy.maths11
                })
                break
            case "maths12":
                this.setState({
                    topicProp : topicCopy.maths12
                })
                break
            case "chemistry11":
                this.setState({
                    topicProp : topicCopy.chemistry11
                })
                break
            case "chemistry12":
                this.setState({
                    topicProp : topicCopy.chemistry12
                })
                break
            case "biology11":
                this.setState({
                    topicProp : topicCopy.biology11
                })
                break
            case "biology12":
                this.setState({
                    topicProp : topicCopy.biology12
                })
                
        }

            
       
    }


    currentPlay = (val) => {
        console.log("currentPlaying", val)
        const assin = val.assignment
        this.setState({
            currentPlaying: val.lectureLink,
            desc: val.lectureDesc,
            assignment : assin 
        })
    }

    render() {
        return (
            <div className="dashboard">
                <HeaderCommon />
                <div className="row d-flex justify-content-end">
                    <div className="col-2 mr-3">
                        <button class="dropbtn" type="button"><b>Assignments</b></button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        {
                            this.state.topicProp.map((ele, index) => {
                                return (
                                    <div class="dropdown m-2">
                                        <button class="dropbtn" key={index}><b>{ele}</b></button>

                                        <div class="dropdown-content">
                                            {
                                                this.props.lectures.map((item) => {
                                                    if (item.topicId === index) {
                                                        return (<button type="button"  onClick={() => { this.currentPlay(item) }}>{item.lectureName}</button>)
                                                    }
                                                    else {
                                                        return false
                                                    }
                                                })
                                            }


                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>
                    <div className="col-9">

                        <ReactPlayer url={this.state.currentPlaying} controls={true} className="ml-4" width="800px" height="500px" />
                        <div className="row m-5">
                            <div className="col-12">
                                <h3>Description</h3>
                                <h5> {this.state.desc}</h5>
                            </div>
                        </div>
                        <div className="row m-5">
                            <div className="col-6">
                                <label for="doubt"><b>Add your Query</b></label>
                                <input className="form-control" id="doubt" placeholder="Soon We will be for you" disabled></input>

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mySuject", state.lectures)
    return {
        lectures: state.lectures
    }
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ getLecture }, dispatch) }


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 