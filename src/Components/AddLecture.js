import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class AddLecture extends React.Component {

    state = {
        class: "",
        subject: "",
        topicId: "",
        lecTitle : "",
        lecLink : "",
        desc: "",
        topicProp: []
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

    selectTopic =(val) => {
        this.setState({
            topicId : val
        })
    }
    lecName = (val) =>{
        this.setState({
            lecTitle : val
        })
    }

    lecLink = (val) =>{
        this.setState({
            lecLink : val
        })
    }

    description =(val) =>{
        this.setState({
            desc : val
        })
    }

    addLecture = (e) => {
        e.preventDefault()
        let data = {
            classId : this.state.class,
            subjectId : this.state.subject,
            topicId : parseInt(this.state.topicId),
            lectureName : this.state.lecTitle.trim(),
            lectureLink : this.state.lecLink.trim(),
            lectureDesc :this.state.desc
        }
        if(data.classId !== "" && data.subjectId !== "" && data.topicId !== null && data.lectureName !== "" && data.lectureLink !== "" && data.lectureDesc !== ""){
            axios.post("http://localhost:3010/addlecture",data).then(res => {
                if(res.data){
                    //console.log(res)
                    toast.warn('Lecture added successfully',{ position : toast.POSITION.BOTTOM_RIGHT, autoClose: 8000})
                }
                else{
                    toast.error('Lecture is not added: Retry',{ position : toast.POSITION.BOTTOM_RIGHT, autoClose: 8000})
                }
            })

        }else{
            toast.error('Please fill all Fields',{ position : toast.POSITION.BOTTOM_RIGHT, autoClose: 8000})
        }
    }



    render() {
        return (
            <div className="col-5 offset-3">
                <h2>New Lecture</h2>

                <div class="form-group">
                    <label for="selectClass"><b>Class:</b></label>
                    <select class="form-control" id="selectClass" onClick={(e) => { this.selectClass(e.target.value) }} required>
                        <option>Choose Class ...</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="selectSubject"><b>Select Subject :</b></label>
                    <select class="form-control" id="selectSubject" onClick={(e) => { this.selectSubject(e.target.value) }} required>
                        <option>Choose subject ...</option>
                        <option value="physics">Physics</option>
                        <option value="maths">Maths</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="selectTopic"><b>Select Topic :</b></label>
                    <select class="form-control" onClick={(e) => {this.selectTopic(e.target.value)}} id="selectTopic" required>
                        <option>Choose Topic ...</option>
                        {
                            this.state.topicProp.map((ele, index) => {
                                return <option value={index} key={index}>{ele}</option>
                            })
                        }
                    </select>
                </div>


                <div class="form-group">
                    <label for="lectureTitle"><b>Lecture Title :</b></label>
                    <input type="text" onChange={(e) =>{ this.lecName(e.target.value)}} class="form-control" id="lectureTitle" placeholder="Lecture Title"></input>
                </div>
                <div class="form-group">
                    <label for="lectureLink"><b>Lecture Link :</b></label>
                    <input type="text" onChange={(e) => {this.lecLink(e.target.value)}} class="form-control" id="lectureLink" placeholder="Lecture Link"></input>
                </div>
                <div class="form-group">
                    <label for="comment"><b>Description :</b></label>
                    <textarea onChange={(e) => {this.description(e.target.value)}} class="form-control" rows="3" id="comment"></textarea>
                </div>
                <button type="button" onClick={(e) => { this.addLecture(e) }} class="btn btn-warning btn-lg mb-3">Submit</button>
            
            </div>
        )
    }
}

export default AddLecture