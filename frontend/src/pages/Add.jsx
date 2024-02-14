// import { Form, ButtonToolbar, Button, } from 'rsuite';



// const Add = () => (
//   <Form>
//     <Form.Group controlId="name">
//       <Form.ControlLabel>Username</Form.ControlLabel>
//       <Form.Control name="name" />
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
    
//     <Form.Group>
//       <ButtonToolbar>
//         <Button appearance="primary">Submit</Button>
//         <Button appearance="default">Cancel</Button>
//       </ButtonToolbar>
//     </Form.Group>
//   </Form>
// );
// export default Add;
import  { useState ,useEffect} from 'react';
import '../assets/css/Add.css';
import { courseList } from '../services/user';
const Add = () => {
  const [setCourses]=useState([]);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [feesAmount, setFeesAmount] = useState('');

  useEffect(()=>{
    fetchCourses();
  },[]);
  const fetchCourses = () => {
    courseList()
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!courseName || !description || !duration || !feesAmount) {
      alert('Please fill out all fields');
      return;
    }

    // Proceed with form submission logic
    console.log('Form submitted:', { courseName, description, duration, feesAmount });

    // Reset form fields
    setCourseName('');
    setDescription('');
    setDuration('');
    setFeesAmount('');
  };

  return (
    <form className="Add" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Name:"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description:"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Duration:"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Fees Amount:"
        value={feesAmount}
        onChange={(e) => setFeesAmount(e.target.value)}
        required
      />
      <div className="links">
        <button type="submit">Add Course</button>
      </div>
    </form>
  );
};

export default Add;
