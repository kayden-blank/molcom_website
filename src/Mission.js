import "./homeStyle.css";
import "./AboutUs.css";
import "./Mission.css"
import NavBar from "./navBar";
import Footer from "./Footer";
import missionImage from "./images/mission.jpg"

const Mission = () => {
  return (
    <div>
      <NavBar></NavBar>
      <img
        className="headerImage"
        src={missionImage}
        alt="Our Team"
      />

      <div className="content-images-container" id="content-images-container">
        {/* Left Section - Text Content */}
        <div className="text-section">
          <h2 style={{ color: "#012B78" }}>| Our Mission</h2>
          <p
            style={{
              width: "600px",
            }}
          >
            To always achieve first class service delivery through
            competence-centered initiatives using cutting edge tools, and a
            continued focus on strengthening partnerships.
          </p>
          <h2 style={{ color: "#012B78", marginTop: "100px" }}>
            | Our Vission
          </h2>
          <p>
            To be Africa’s leading telecommunications solutions provider
            focusing on infrastructural and human capacity building within the
            sector.
          </p>
          <div class="vissionDiv">
            <div
              style={{
                width: "50px",
                border: "1px solid black",
                height: "30px",
                borderRadius: "20px",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginLeft: "5px", marginTop: "5px" }}
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                ></path>
              </svg>{" "}
            </div>
            <div class="something">
              <h3 style={{ color: "#012B78" }}>CREATIVITY </h3>
              <p>
                We pride ourselves on our ability to continuously create
                solutions that add value to our clients and society at large.
              </p>
            </div>
          </div>
          <div class="vissionDiv">
            <div
              style={{
                width: "50px",
                border: "1px solid black",
                height: "30px",
                borderRadius: "20px",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginLeft: "5px", marginTop: "5px" }}
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                ></path>
              </svg>{" "}
            </div>
            <div class="something">
              <h3 style={{ color: "#012B78" }}>EFFECTIVENESS </h3>
              <p>
                Our business is centered on being able to provide the best
                service at the least possible cost to the client.
              </p>
            </div>
          </div>
          <div class="vissionDiv">
            <div
              style={{
                width: "50px",
                border: "1px solid black",
                height: "30px",
                borderRadius: "20px",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginLeft: "5px", marginTop: "5px" }}
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                ></path>
              </svg>{" "}
            </div>
            <div class="something">
              <h3 style={{ color: "#012B78" }}>QUALITY </h3>
              <p>
                Being efficient is just as important to us as providing the best
                quality results. A solution is only worth its salt if it has
                lasting impact.
              </p>
            </div>
          </div>
          <div class="vissionDiv">
            <div
              style={{
                width: "50px",
                border: "1px solid black",
                height: "30px",
                borderRadius: "20px",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginLeft: "5px", marginTop: "5px" }}
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                ></path>
              </svg>{" "}
            </div>
            <div class="something">
              <h3 style={{ color: "#012B78" }}>INNOVATION </h3>
              <p>
                Being the best is determined largely by daring to tread new
                paths in a bid to make good solutions better.
              </p>
            </div>
          </div>
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
      <Footer></Footer>
    </div>
  );
};
export default Mission;
