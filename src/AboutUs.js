import "./homeStyle.css";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImageGrid from "./ImageGrid";
import NavBar from "./navBar.js";
import Footer from "./Footer";
const images = [
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/ihs.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo3.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo2.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo6.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo5.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo4.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo1.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/abuja.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/alcatel.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/micro.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/phcn.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/pnb.png",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/url.jpg",
  "https://www.molcomconcepts.com/wp-content/uploads/2016/02/url-1.jpg",
 
];
const AboutUs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <img
        className="headerImage"
        src="https://assets.euromoneydigital.com/dims4/default/0322ddf/2147483647/strip/true/crop/1000x666+0+0/resize/840x559!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2F23%2Fae%2F66958ea3499790f338e7fed1bf6d%2Fadobestock-5g-tower.jpg"
        alt="Our Team"
      />

      <div className="content-images-container">
        {/* Left Section - Text Content */}
        <div className="text-section">
          <h1 style={{ fontSize: "100px", opacity: "0.1", marginLeft: "0px" }}>
            About
          </h1>
          <p
            style={{
              marginTop: "-140px",
              fontSize: "36px",
              fontWeight: "bolder",
              marginLeft: "0px",
            }}
          >
            Molcom
          </p>
          <p>
            Molcom Multi-Concept Limited is a leading provider of comprehensive
            energy and telecom infrastructure solutions, specializing in
            energy-efficient systems integration. With a strong presence across
            Nigeria and beyond, our team of experts delivers cutting-edge power
            and telecom solutions tailored to meet the evolving needs of
            businesses and industries.<br></br>
            <br></br> Since our establishment, Molcom has built a reputation for
            operational excellence and innovation. We offer a wide range of
            customized hybrid power solutions, developed in-house with advanced
            design and manufacturing capabilities. Our end-to-end services
            encompass everything from conceptual design, manufacturing, and
            supply, to final integration, ensuring seamless delivery of quality
            solutions. Molcom is recognized for redefining standards in both the
            power and telecom sectors.<br></br>
            <br></br> We anticipate market needs, introducing energy-efficient
            solutions such as hybrid systems, DC generators, and cabinetized
            power systems that offer high fuel efficiency, significantly
            reducing operational costs. With these innovations, Molcom stands as
            a leader in power management and telecom infrastructure, providing
            "Power as a Service" through flexible OPEX models.<br></br>
            <br></br> Driven by a spirit of innovation, Molcom is committed to
            "Redefining power solutions and Reinventing telecom infrastructure"
            to support the growing digital and energy needs of businesses and
            communities in today’s hyper-connected world.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className="images-section">
          <div style={{ maxWidth: "100px" }}>
            <img
              className="section-image top-image"
              src="https://www.dnv.com/siteassets/images/cascade-foresight_1000x500.jpg?mode=crop&scale=both&quality=90&format=webp&width=768"
              alt="Our Team"
            />
          </div>
          <img
            className="section-image bottom-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAO0zolGzw-zCeYQp588YxIAa7EcWrWvIiNA&s"
            alt="Our Team"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          // marginTop: "200px",
          backgroundColor: "#1E242D",
          marginLeft: "30px",
          height: "200px",
          alignItems: "center", // Vertically center the content
        }}
      >
        {/* Image Section */}
        <img
          src="https://via.placeholder.com/150" // Replace with actual image URL
          alt="Sample"
          style={{ width: "25%", height: "100%", objectFit: "cover" }}
        />

        {/* Content Section */}
        <div style={{ display: "flex", width: "75%" }}>
          {/* First Column - User Icon and Text */}
          <div
            style={{ width: "33.33%", display: "flex", alignItems: "center" }}
          >
            <i
              className="fas fa-user"
              style={{ fontSize: "50px", marginRight: "10px" }}
            ></i>
            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#cf0a2c",
                  fontSize: "36px",
                  fontWeight: "bolder",
                }}
              >
                232
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#616161",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Clients
              </p>
            </div>
          </div>

          {/* Second Column - House Icon and Text */}
          <div
            style={{ width: "33.33%", display: "flex", alignItems: "center" }}
          >
            <i
              className="fas fa-home"
              style={{ fontSize: "50px", marginRight: "10px" }}
            ></i>
            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#cf0a2c",
                  fontSize: "36px",
                  fontWeight: "bolder",
                }}
              >
                721
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#616161",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Projects
              </p>
            </div>
          </div>

          {/* Third Column - Globe Icon and Text */}
          <div
            style={{ width: "33.33%", display: "flex", alignItems: "center" }}
          >
            <i
              className="fas fa-globe"
              style={{ fontSize: "50px", marginRight: "10px" }}
            ></i>
            <FontAwesomeIcon icon="fa-solid fa-globe" />
            <FontAwesomeIcon icon="fa-regular fa-user" />
            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#cf0a2c",
                  fontSize: "36px",
                  fontWeight: "bolder",
                }}
              >
                28
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#616161",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Professional Employees
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "300px",
          textAlign: "center",
          width: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#4F738A",
          lineHeight: "1.875",
          fontSize: "40px",
        }}
      >
        why choose us
        <p style={{ color: "#616161", fontSize: "20px" }}>
          “… Quality is our guiding principle to Service…” <br></br>Molcom Multi-concepts
          Limited provides a wide range of solution-oriented services to a
          cross-section of clients within the country and internationally. The
          company was borne out of a genuine aspiration to raise the bar within
          the telecommunications service industry in Africa and is led by a team
          of young, self-motivated, individuals with extensive relevant
          experience and an ever-growing desire to invest in skill acquisition
          and technology research. With our current rate of rapid growth, our
          continuous quest for excellence is evident in all our service areas.
          We have an exceptional track record with our current clients, and we
          intend to replicate and surpass this with our prospective clients. Our
          commitment to safety and world-class standards in our operations
          distinguishes our quality deliverables to all our clients.
        </p>
      </div>

      <div>
        <div>
          <h1 style={{ fontSize: "100px", opacity: "0.1", marginLeft: "30px" }}>
            Client
          </h1>
          <p
            style={{
              marginTop: "-140px",
              fontSize: "36px",
              fontWeight: "bolder",
              marginLeft: "30px",
            }}
          >
            Our Loyal
          </p>
          <ImageGrid images={images} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default AboutUs;
