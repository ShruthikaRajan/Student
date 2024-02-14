import { Button, ButtonToolbar, Form } from "rsuite"

const Course=()=>{
    return(
        <div className="form">
        <Form>
        <div>
            <p>Signup</p>
            <br></br>
        </div>
    <Form.Group controlId="username">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="username" />
      <Form.HelpText>Username is required</Form.HelpText>
      
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
    )}
    export default Course