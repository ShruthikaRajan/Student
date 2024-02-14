import CustomNavbar from "../components/CustomNavbar"

const About =()=>{
    return(
        // <div>
        //     <CustomNavbar></CustomNavbar>
        // </div>
        <div className="container">
            <header>
                   <CustomNavbar></CustomNavbar>
            </header>
            <main>
                <div>
                Teaching methodology that provides domain specific knowledge and focuses on 360-degree development of the learner
                <br></br>

                    Learn: Mentor-led online learning
                    <br></br>
                    Practice: Practice material for easy learning
                    <br></br>
                    Apply: Assignments for first-hand experience
                    <br></br>
                    Review: Personalised progress review and feedback
                    <br></br>
                    Refactor: Subject mastery with personalised assignments
                </div>
            </main>
        </div>
    )
}
export default About