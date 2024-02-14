// import { Button, ButtonToolbar, Form } from "rsuite"
// import "../assets/css/Signup.css";
// const Signup=()=>{
//     return(
//         <div className="signup">
//         <div>
//             <p>Signup</p>
//             <br></br>
//         </div>
//     <Form layout="vertical" >
//       <div className="maindiv">
//     <Form.Group controlId="username" >
//       <Form.ControlLabel>Username</Form.ControlLabel>
//       <Form.Control name="username" />
//       <Form.HelpText>Username is required</Form.HelpText>
      
//     </Form.Group>
//     <Form.Group controlId="email">
//       <Form.ControlLabel>Email</Form.ControlLabel>
//       <Form.Control name="email" type="email" />
//       <Form.HelpText tooltip>Email is required</Form.HelpText>
//     </Form.Group>
//     <Form.Group controlId="password">
//       <Form.ControlLabel>Password</Form.ControlLabel>
//       <Form.Control name="password" type="password" autoComplete="off" />
//     </Form.Group>
//     <Form.Group controlId="Confirm Password">
//       <Form.ControlLabel> Confirm Password</Form.ControlLabel>
//       <Form.Control name="Confirm password" type="Confirm password" autoComplete="off" />
//     </Form.Group>
//     <Form.Group controlId="Number">
//       <Form.ControlLabel> Mobile Number</Form.ControlLabel>
//       <Form.Control name="Number" type="Number" autoComplete="off" />
//     </Form.Group>
    
    
//     <Form.Group>
//       <ButtonToolbar>
//         <Button appearance="primary">Submit</Button>
//         <Button appearance="default">Cancel</Button>
//       </ButtonToolbar>
//     </Form.Group>
//     </div>
//   </Form>
//   </div>
//     )}
//     export default Signup
// import { Message } from 'rsuite';
import '../assets/css/Signup.css'
import { Link, useNavigate } from "react-router-dom";
import { signUp } from '../services/auth';
import { useState } from 'react';
const Signup=()=>{
  const navigate = useNavigate(); // Access the navigation function
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  });
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    signUp(formData)
      .then(() => {        
        // toaster.push( 
        // <Message showIcon type='success' closable onClose={navigate('/')}>
        // Registration successful!
        //   </Message>, {
        //     placement:'topCenter',
        //   duration: 1000
        // });
       navigate('/login');

         // Navigate after setting the session token

      })
      .catch((err) => {
        console.log(err);
      });
  };
  return(
<form className="login">
  <h2>Welcome, User!</h2>
  <p>Please Sign up</p>
  <input type="text" placeholder="name"  onChange={(value) => handleChange("password", value)} />
  <input type="text" placeholder="Email" onChange={(value) => handleChange("username", value)}/>
  <input type="text" placeholder="Password"  onChange={(value) => handleChange("password", value)} />
  
  
  <input type="text" placeholder="Mobile Number"  onChange={(value) => handleChange("mobilenumber", value)}/>
  <input type="submit" defaultValue="Signup" onSubmit={handleSubmit} />
  
  <div className="links">
    <a href="#"><Link to='/login'>Login</Link></a>
    
  </div>
</form>
  )
}
export default Signup;