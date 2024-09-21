import "./homeStyle.css";


const Footer = () => {
  return (
    <div class="footStart">
      <div>
        <img
          src="http://www.molcomconcepts.com/wp-content/uploads/2016/04/Screen-Shot-2016-04-29-at-13.30.16.png"
          alt="Molcom Logo"
          style={{
            width: "150px",
          }}
        />
      </div>
      <section class="four-column-section">
        <div class="column">
          <div class="rowHead">OUR LOCATIONS</div>
          <div class="row">No 21 IBM Haruna Street, Utako, Abuja/FCT</div>
          <div class="row">
            11 Adeyinka Street, off Sura Mogaji, Ilupeju, Lagos
          </div>
          <div class="row">+2348137184429</div>
          <div class="row">info@molcomconcepts.com</div>
          <div class="row">enquiries@molcomconcepts.com</div>
        </div>
        <div class="column">
          <div class="rowHead">OUR SERVICES</div>
          <div class="row"> Telecommunication Services</div>
          <div class="row">Information And Communication Technology</div>
          <div class="row">Project Management</div>
          <div class="row">Construction</div>
          <div class="row">Training And Business Advisory</div>
          <div class="row">Power And Energy</div>
        </div>
        <div class="column">
          <div class="rowHead">LINKS</div>
          <div class="row">Career</div>
          <div class="row">Connect with us</div>
          <div class="row">Contact</div>
          <div class="row">Quality policy</div>
          <div class="row">Privacy policy</div>
        </div>
        <div class="column">
          <p>
            Stay Ahead in the Rapidly Changing World of Work Subscribe to
            Business and HR Insights, our bi-monthly publication focused on the
            critical issues shaping talent management across Africa. Stay
            informed, stay competitive.
          </p>
          <input style={{height:"40px", padding:"10px"}} placeholder="Enter your email address"/>
          <br></br>

          <label>
            <input type="checkbox" style={{ width: "20px" }} />I authorize
            MOLCOM Multi-Concept Limited to send me updates and process my
            information in connection with this request. I understand that I may
            withdraw my consent at any time.
          </label>
          <button style={{width:"200px", marginTop:"50px", height:"50px", fontSize:"20px", fontWeight:"bold"}}>Subscribe Now</button>
        </div>
      </section>

      <footer>
        <section class="lastFooter">
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61d3cc3"
              data-id="61d3cc3"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-1f703c4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="1f703c4"
                  data-element_type="widget"
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-bb1bc5e elementor-widget elementor-widget-text-editor"
                  data-id="bb1bc5e"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="last-section">
                    <p style={{ marginLeft: "20px" }}>
                      ©2024 MOLCOM MULTI-CONCEPT LIMITED
                    </p>
                    <p style={{ marginLeft: "auto", marginRight: "10%" }}>
                      <span class="foot">Terms of use</span> |
                      <span class="foot"> Privacy and cookies </span>|{" "}
                      <span class="foot">Sitemap</span> |
                      <span class="foot">Legal</span> |{" "}
                      <span class="foot">Cookie Settings</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
