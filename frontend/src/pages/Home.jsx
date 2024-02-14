import CustomNavbar from "../components/CustomNavbar"
// import S3Uploader from "../components/S3Uploader"
import { Link } from "react-router-dom"
import '../pages/Home.css'
import Footer from "./Footer"
const Home =()=>{
    return(
        <div className="container">
            <header>

            <CustomNavbar></CustomNavbar>
            </header>
            <main>
            <div className="container">
  <div className="card">
    <div className="card-header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYge4Dyw03KJ3JqZjQJBzmZq0V46XIA6vL0g&usqp=CAU"
        alt="rover"
      />
    </div>
    <div className="card-body">
      <br></br>
      <br></br>
      
      <h4>Add course</h4>
      <p>An exploration into the trucks polarising design</p>
      <div className="links">
    <a href="#"><Link to='/Add'>Add </Link></a>
    
  </div>
      {/* <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYge4Dyw03KJ3JqZjQJBzmZq0V46XIA6vL0g&usqp=CAU"
          alt="user"
        />
        <div className="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div> */}
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230711/pngtree-d-illustration-of-online-education-for-website-banners-posters-and-image_3831632.jpg"
        alt="ballons"
        
      />
    </div>
    <div className="card-body">
      <br></br>
      <br></br>
      <h4>View courses</h4>
      <p>The future can be scary, but there are ways to deal with that fear.</p>
      <div className="user">
      <a href="#"><Link to='/view'>view </Link></a>
      
        {/* <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230711/pngtree-d-illustration-of-online-education-for-website-banners-posters-and-image_3831632.jpg"
          alt="user"
        />
        <div className="user-info">
          <h5>Eyup Ucmaz</h5>
          <small>Yesterday</small>
        </div> */}
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <img
        src="https://www.shutterstock.com/image-photo/business-workplace-enquiry-concept-on-260nw-532398868.jpg"
        alt="city"
      />
    </div>
    <div className="card-body">
      
      <h4>View Enquiries</h4>
      <p>The future can be scary, but there are ways to deal with that fear.</p>
      <a href="#"><Link to='/enquiry'>Enquiry</Link></a>
      
      {/* <div className="user">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
          alt="user"
        />
        <div className="user-info">
          <h5>Eyup Ucmaz</h5>
          <small>Yesterday</small>
        </div>
      </div> */}
    </div>
 </div>

    
  </div>

            <Footer/>

                
            </main>
        </div>
    )
}
export default Home