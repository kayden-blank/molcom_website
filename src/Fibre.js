import Schedule from "./Schedule"
import NavBar from "./navBar"
import Footer from "./Footer"
import fibreImage from "./images/fibre.jpg"
import imageHead from "./images/fibreBackgroundimage.jpg";
import "./Fibre.css"
const Fibre =()=>{
    return (
      <div>
        <NavBar></NavBar>
        <img
          id="imageHead"
          className="headerImage"
          src={imageHead}
          alt="Our Team"
        />
        <h1 style={{ color: "white", marginTop: "-300px", marginLeft: "50px" }}>
          {" "}
          Fiber Internet Connectivity{" "}
        </h1>
        <div>
          <div
            style={{ display: "flex", marginTop: "300px", marginLeft: "50px" }}
          >
            <div style={{ flex: "1" }}>
              <p style={{ width: "80%" }}>
                Molcom Multi-Concepts Limited offers a comprehensive range of
                business applications driven by the power of satellite
                technology. We utilize the flexibility and freedom of satellite
                communications, especially through our VSAT internet solutions,
                which offer basic to highly advanced features. These solutions
                can be expanded as needed, and include:
              </p>
            </div>
            <div style={{ flex: "1" }}>
              <img alt="fibreImage" src={fibreImage} class="divImage" />
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <div style={{ flex: "1" }}>
              <img alt="fibreImage" src={fibreImage} class="divImage" />
            </div>
            <div style={{ flex: "1" }}>
              <p style={{width:"80%"}}>
               -  Identity and Access Management <br></br>- High-speed internet access
                for ISPs, cyber cafés, banks, universities, government
                institutions, hotels, research centers, corporate offices, and
                remote individual users <br></br>- IP Backbone Connectivity for telecom
                and financial institutions <br></br>- VPN – Secure global interconnection
                of branch offices <br></br>- Toll-quality Voice and Fax (VoIP) <br></br>- Video
                Conferencing and Presentations <br></br>- Interactive Distance Learning <br></br>
                - Remote Server Replication for Disaster Recovery <br></br>- Software
                Distribution and Remote Administration <br></br>- POS/ATM System
                Connectivity <br></br>- Alarm and Surveillance System Integration <br></br>- TV
                Broadcasting
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1> Looking to use our Executive Recruitment Service? </h1>
          <p>
            {" "}
            Complete this form to schedule a free consultation with us today.
          </p>
        </div>
        <Schedule></Schedule>
        <Footer></Footer>
      </div>
    );
}
export default Fibre;