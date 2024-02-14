// import '../assets/css/Dashboard.css'
// const Dashboard = ()=>{
//     return(
//         <>
//   <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
//   />
//   <link rel="stylesheet" href="./sidebar.css" />
//   <title>SideBAr</title>
//   <div className="navigation">
//     <ul>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-house" />
//           </span>
//           <span className="title">Home</span>
//         </a>
//       </li>
//       {/* <li>
//           <a href="#">
//               <span class="icon"></span>
//               <span class="icon">Home</span>
//           </a>
//       </li> */}
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-user" />
//           </span>
//           <span className="title">Profile</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-message" />
//           </span>
//           <span className="title">Messages</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-circle-info" />
//           </span>
//           <span className="title">Help</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-gear" />
//           </span>
//           <span className="title">Settings</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-lock" />
//           </span>
//           <span className="title">Password</span>
//         </a>
//       </li>
//       <li>
//         <a href="#">
//           <span className="icon">
//             <i className="fa-solid fa-right-from-bracket" />
//           </span>
//           <span className="title">SignOut</span>
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div className="toggle"  />
// </>

      
//     )
// }
// export default Dashboard;
// import { Progress } from 'rsuite';
// import { Link } from "react-router-dom";
// import '../assets/css/Dashboard.css'

// const style = {
//   width: 140,
//   display: 'inline-block',
//   marginRight: 10,
//   marginTop:100
// };
// const Dashboard = ()=>{
//         return(
//           <div>
//             <div className='sidenav'>
//             <a href="#"><Link to='/home'>Home</Link></a>
//             <a href="#"><Link to='/about'>About</Link></a>
//             <a href="#">Course</a>
//             <a href="#">Contact</a>
//           </div>
//           <div className="Admin">
//             <h1>Admin dashboard</h1>
//             <br></br>
//             </div>
//     <div style={style}>
//       <Progress.Circle percent={30} strokeColor="#ffc107" />
//     </div>
//     <div style={style}>
//       <Progress.Circle percent={60} strokeColor="#ffc107" />
//     </div>
//     <div style={style}>
//       <Progress.Circle percent={100} status="success" />
//     </div>
//     <div style={style}>
//       <Progress.Circle percent={80} strokeColor="#ffc107" />
//     </div>
//     {/* <div style={style}>
//       <Progress.Circle percent={30} status="fail" />
//     </div> */}
    
//         </div>
          
          

//         )
// }
// export default Dashboard;

import { Progress } from 'rsuite';
import { Link } from "react-router-dom";
import '../assets/css/Dashboard.css';

const style = {
  width: '80%', // Set the width as needed
  margin: '20px auto', // Center the progress bar
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: '20px',  // Add space between progress and cards
};

const cardStyle = {
  width: '30%', // Adjust the width of each card as needed
  marginBottom: '20px',
};

const dashboardTitleStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  backgroundColor: 'silver',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  zIndex: '999',
};

const Dashboard = () => {
  return (
    <div>
      <div style={dashboardTitleStyle}>
        <h1>Admin dashboard</h1>
      </div>
      <div className='sidenav'>
        <a href="#"><Link to='/home'>Home</Link></a>
        <a href="#"><Link to='/about'>About</Link></a>
        <a href="#">Course</a>
        <a href="#">Enquiry</a>
        <a href="#">PAYMENT</a>
      </div>
      <div style={style}>
        <Progress.Line percent={30} strokeColor="#ffc107" />
      </div>
      <div style={style}>
        <Progress.Line percent={60} strokeColor="#ffc107" />
      </div>
      <div style={style}>
        <Progress.Line percent={100} status="success" />
      </div>
      <div style={style}>
        <Progress.Line percent={80} strokeColor="#ffc107" />
      </div>
      <div style={cardContainerStyle}>
        <div className="card" style={cardStyle}>
          {/* <div className="card-header">
            <img
              src="https://example.com/card-image-1.jpg"
              alt="Card Image 1"
            />
          </div> */}
          <div className="card-body">
            <h4>Course</h4>
            <h5>Completion</h5>
            <div style={style}>
        <Progress.Line percent={30} strokeColor="#ffc107" />
      </div>
          
          </div>
        </div>
        <div className="card" style={cardStyle}>
          {/* <div className="card-header">
            <img
              src="https://example.com/card-image-2.jpg"
              alt="Card Image 2"
            />
          </div> */}
          <div className="card-body">
            <h4>enquiry</h4>
            <p>This is the second sample card with some content.</p>
            
          </div>
        </div>
        <div className="card" style={cardStyle}>
          {/* <div className="card-header">
            <img
              src="https://example.com/card-image-3.jpg"
              alt="Card Image 3"
            />
          </div> */}
          <div className="card-body">
            <h4>payment</h4>
            
            <div style={style}>
        <Progress.Line percent={30} strokeColor="#ffc107" />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
