import "./homeStyle.css";
import "./Team.css"
import NavBar from "./navBar";
import Footer from "./Footer";
import headImage from "./images/meetTheTeam.jpg"
import first from "./images/Screenshot 2024-09-12 at 11.18.19 AM.png"
import second from "./images/Screenshot 2024-09-12 at 11.18.25 AM.png"
import third from "./images/Screenshot 2024-09-12 at 11.18.31 AM.png"
import forth from "./images/Screenshot 2024-09-12 at 11.18.37 AM.png"

const Teams = () => {
    return (
      <div>
        <NavBar></NavBar>
        <img
          id="imageHead"
          className="headerImage"
          src={headImage}
          alt="Our Team"
        />
        <div class="imageSection">
          <div class="img">
            <img  src= {first} alt="first"/> <p>Chief Executive Officer </p>
          </div>
          <div class="img">
            <img src={second} alt="second"/> <p>Chief Operating Officer </p>
          </div>
          <div class="img">
            <img src={third} alt="third" /> <p>Head</p>
          </div>
          <div class="img">
            <img src={forth} alt="forth" /> <p>Projects</p>
          </div>
         
        </div>
        <Footer></Footer>
      </div>
    );
}
export default Teams