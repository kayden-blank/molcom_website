
import NavBar
 from "./navBar";
 import Footer from "./Footer";
 import Schedule from "./Schedule";
import fibreImage from "./images/fibre.jpg";
// import imageHead from "./images/procurementCopy.tiff";
const Procurement=()=>{
    return (
      <div>
        <NavBar></NavBar>
        <img
          id="imageHead"
          className="headerImage"
          src="https://www.shutterstock.com/image-vector/procurement-management-banner-web-icon-260nw-2419791321.jpg"
          alt="Our Team"
        />

        <div>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <div style={{ flex: "1" }}>
              <img alt="fibreImage" src={fibreImage} class="divImage" />
            </div>
            <div style={{ flex: "1" }}>
              <p style={{ width: "80%" }}>
                We are among the fastest-growing procurement companies in
                Nigeria, leveraging years of experience to assist clients in the
                oil & gas, power & energy, construction, and public sectors in
                making optimal product choices. Our consultants are dedicated to
                providing sustainable procurement strategies that align with
                your company’s goals, improve sourcing, reduce costs, and
                simplify operations. We emphasize best practices in procurement
                management and help optimize the sourcing and purchasing of
                goods and services.
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
export default Procurement;