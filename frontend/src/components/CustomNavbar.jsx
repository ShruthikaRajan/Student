import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from "react-router-dom";
import '../pages/CustomNavbar.css'


const CustomNavbar=() =>{
    return(
      <div className="nav">
        <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
            
          <Nav.Item icon={<HomeIcon />}><Link to={`/home`}>Home</Link></Nav.Item>
          <Nav.Item><Link to={`/dashboard`}>Dashboard</Link></Nav.Item>
          
          <Nav.Item><Link to={`/Login`}>Login</Link></Nav.Item>
          {/* <Nav.Item><Link to={`/Signup`}>Signup</Link></Nav.Item> */}

          {/* <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item> */}
          {/* <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
        {/* <div className="app">
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </div> */}
      </Navbar>
      </div>
    )
}
export default CustomNavbar;