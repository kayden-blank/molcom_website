import React from 'react'
import "./homeStyle.css"
import { useState, useEffect } from 'react';
import NavBar from './navBar.js';
import Footer from './Footer.js';
import CarouselSection from './Carousel.js';
const slides = [
  {
    image:
      "https://galooli.com/wp-content/uploads/2023/02/The-Professional-Guide-to-Tower-Maintenance-Cover-Image.jpg", // Repeat image
    header: "Advanced Telecom Solutions\n for Seamless Connectivity",
    description:
      "Future-ready communication systems designed to enhance connectivity",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/05/08/56/43/360_F_508564393_Z9cb4QRtHMD3h9DzDAB0dYM6t1R2ZMW6.jpg", // Repeat image
    header: "Innovative ICT Solutions\n for Modern Challenges",
    description: "Cutting-edge tech and connectivity for business success.",
  },
  {
    image:
      "https://www.abujadataschool.com/wp-content/uploads/2021/11/Project-Management-Training-In-Abuja.jpg",
    header: "Transforming Projects\n Exceeding Expectations",
    description: "Where Precision Meets Excellence",
  },
  {
    image:
      "https://www.molcomconcepts.com/wp-content/uploads/2016/02/Molcom-Construction.jpg",
    header: "Construction Excellence",
    description: "Building the future with precision and expertise.",
  },

  {
    image:
      "https://www.molcomconcepts.com/wp-content/uploads/2016/05/Molcom-Oil-and-Gas.jpg",
    header: "Empowering Energy Solutions \nfor a Sustainable Future",
    description: "Power and oil solutions for growth and sustainability.",
  },
];

const testimonies = [
  {
    testimony:
      "Molcom provided exceptional service that exceeded our expectations.",
    occupation: "Project Manager",
    name: "John Doe",
  },
  {
    testimony: "The team was professional and delivered the project on time.",
    occupation: "CEO",
    name: "Jane Smith",
  },
  {
    testimony:
      "Their attention to detail and commitment to quality is unmatched.",
    occupation: "Operations Manager",
    name: "Michael Johnson",
  },
  {
    testimony:
      "A pleasure to work with. Highly recommended for future projects.",
    occupation: "Consultant",
    name: "Emily Davis",
  },
  {
    testimony:
      "Molcom's expertise helped us achieve our business goals effectively.",
    occupation: "Business Analyst",
    name: "Robert Brown",
  },
];

const Home = () => {
 const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
   }, 10000); // Change slide every 10 seconds

   return () => clearInterval(interval);
 }, []);

 const goToPreviousSlide = () => {
   setCurrentSlide((prevSlide) =>
     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
   );
 };

 const goToNextSlide = () => {
   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
 };

 const [testimonyCurrentIndex, setTestimonyCurrentIndex] = useState(0);

 const nextSlide = () => {
   setTestimonyCurrentIndex((prevIndex) =>
     prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
   );
 };

 const prevSlide = () => {
   setTestimonyCurrentIndex((prevIndex) =>
     prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
   );
 };
  return (
    <div>
      <NavBar></NavBar>
      <div className="slider">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div style={{ backgroundColor: "#00000050", width: "750px", marginTop:"300px", marginLeft:"100px" , borderRadius:"10px"}}>
            <h2
              style={{
                marginTop: "20%",
                marginLeft:"10PX",
                fontSize: "312.5%",
              }}
            >
              {slides[currentSlide].header.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <br />
            <p style={{ marginLeft: "10px", fontSize: "25px", paddingBottom:"10px" }}>
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
        <button onClick={goToPreviousSlide} className="sliderButton">
          Previous
        </button>
        <button onClick={goToNextSlide} className="sliderButton" id="second">
          Next
        </button>
      </div>

      <section className="firstSection">
        <div className="elementor-container elementor-column-gap-default">
          <div>
            <div className="firstSectionBody">
              <div>
                <div className="headerClass">
                  <h2 className="">
                    Transform Challenges into Triumphs with MOLCOM
                  </h2>
                </div>
              </div>
              <div className="">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Putting our power to work
                  </h2>
                </div>
              </div>
              {/* <div className="youtubeVideoSection">
                <div className="elementor-widget-container">
                  <div className="elementor-wrapper elementor-open-inline">
                    <iframe
                      className="elementor-video"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Workforce Group Corporate Profile"
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/U5Bg8dZMbVg?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fworkforcegroup.com&amp;widgetid=1"
                      id="widget2"
                    ></iframe>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="secondSection">
        <div className="container">
          <div className="column">
            <div className="widget-wrap">
              <section className="second-Section-inner-boxed">
                <div className="container">
                  <div className="column">
                    <div className="widget-wrap">
                      <div
                        className="widget animated fadeInUp"
                        style={{ animationDelay: "200ms" }}
                      >
                        <h2 className="heading-title">Testimonials</h2>
                      </div>
                      <div className="widget">
                        <h2 className="heading-two">
                          Molcom Multi-Concept Limited's innovative approach,
                          industry expertise, and years of experience empower
                          clients to remain at the forefront of talent
                          acquisition and management across Africa
                        </h2>
                      </div>
                      <div className="widget">
                        <h2 className="heading-three">
                          See how we've helped bold clients achieve
                          extraordinary outcomes
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          className="testimonies-slider"
          style={{
            height: "55vh",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            paddingBottom: "300PX",
          }}
        >
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className={`slide ${
                index === testimonyCurrentIndex ? "active" : ""
              }`}
              style={{
                display: index === testimonyCurrentIndex ? "block" : "none",
                height: "100%",
                transition: "all 0.5s ease",
                padding: "20px",
                color: "black",
              }}
            >
              <h2>{testimony.testimony}</h2>
              <p>{testimony.occupation}</p>
              <p>
                <strong>{testimony.name}</strong>
              </p>
            </div>
          ))}

          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "20%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "20%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            &#9654;
          </button>
          <div style={{ marginTop: "300px" }}>
            <h1 style={{ fontSize: "100px", opacity: "0.1" }}>Client</h1>
            <p
              style={{
                marginTop: "-150px",
                fontSize: "36px",
                fontWeight: "bolder",
              }}
            >
              Our Loyal
            </p>
            <CarouselSection></CarouselSection>
          </div>
        </div>
      </section>
      <section className="thirdSection">
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a5f04d6"
            data-id="a5f04d6"
            data-element_type="column"
          >
            <div className="third-section-content">
              <div>
                <div className="third-section-header">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Our Industry-Leading Services
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-b45e5c4 elementor-widget elementor-widget-heading"
                data-id="b45e5c4"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="third-section-words">
                  <p className="elementor-heading-title elementor-size-default">
                    At Molcom Multi-Concept Limited, we specialize in
                    technology, construction, power, and project management
                    solutions designed to help businesses across Africa thrive.
                    <br />
                    <b>
                      Our mission is to provide the expertise and tools needed
                      to excel in a rapidly evolving world.
                    </b>
                    <br />
                    With a diverse range of advanced services and a team of
                    seasoned professionals, we deliver tailored solutions to
                    meet your unique needs. If your business is aiming high but
                    facing challenges, Molcom Multi-Concepts is here to help you
                    reach your full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-section">
        <div className="layout-container">
          <div className="layout-row">
            <div className="layout-column column-1"> 
              <div className="cell-content">
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we recognize that the telecommunications landscape
                  is ever-evolving and that your business needs a partner who
                  understands these complexities. Whether you're expanding your
                  network infrastructure, enhancing connectivity, or
                  implementing innovative communication solutions, we are here
                  to ensure your success. With our expertise in designing,
                  constructing, and maintaining telecommunication systems, we
                  provide the reliable support your business needs to stay ahead
                  in this dynamic industry. Partner with us, and together, we'll
                  build a stronger, more connected future.
                </h2>
                <a href="/molcom-advisory" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
            <div className="layout-column column-2">
              <div className="cell-content">
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we understand that every client's needs are unique,
                  especially in the realm of ICT. Whether you’re seeking
                  advanced fiber internet connectivity, reliable satellite
                  solutions, cutting-edge wireless technology, or robust VPN
                  services, we’re committed to supporting your business at every
                  stage of its digital transformation. Partner with us, and
                  you’ll have a dedicated ally in navigating the complexities of
                  technology to ensure your continued success.
                </h2>
                <a href="/molcom-outsourcing" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
          </div>

          <div className="layout-row">
            <div className="layout-column column-1row1">
              <div className="cell-content">
                {/* <img
                  src="https://workforcegroup.com/wp-content/uploads/2021/04/wfr.svg"
                  alt="Logo 3"
                /> */}
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we revolutionize project management by providing
                  clients with innovative solutions that streamline project
                  execution and enhance efficiency. Our team utilizes advanced
                  methodologies and digital tools to manage every phase of your
                  projects with precision, ensuring that your objectives are met
                  on time and within budget.
                </h2>
                <a href="/molcom-resourcing" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
            <div className="layout-column column-2row2">
              <div className="cell-content">
                {/* <img
                  src="https://workforcegroup.com/wp-content/uploads/2021/04/wfr.svg"
                  alt="Logo 4"
                /> */}
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we are dedicated to transforming construction
                  projects with precision and efficiency. We specialize in
                  delivering expert consulting in construction, engineering, and
                  architecture to help you maximize your project's potential and
                  achieve impactful results. Partner with us to turn your vision
                  into reality while ensuring optimal use of resources and
                  expertise.
                </h2>
                <a href="/molcom-resourcing" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
          <div className="layout-row">
            <div className="layout-column column-3row3">
              <div className="cell-content">
                {/* <img
                  src="https://workforcegroup.com/wp-content/uploads/2021/04/wfr.svg"
                  alt="Logo 3"
                /> */}
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we empower businesses by offering comprehensive
                  training and advisory services tailored to enhance
                  organizational growth and operational excellence. Our expert
                  team provides customized solutions that address your unique
                  challenges, equipping you with the tools and strategies needed
                  to drive innovation, optimize performance, and achieve
                  sustainable success in an ever-evolving marketplace.
                </h2>
                <a href="/molcom-resourcing" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
            <div className="layout-column column-2row3">
              <div className="cell-content">
                {/* <img
                  src="https://workforcegroup.com/wp-content/uploads/2021/04/wfr.svg"
                  alt="Logo 4"
                /> */}
                <h2 style={{ textAlign: "justify" }}>
                  At MOLCOM, we empower clients in the power and energy sectors
                  to innovate and excel. By leveraging advanced technologies and
                  industry expertise, we provide cutting-edge solutions to
                  enhance your energy infrastructure and optimize power
                  generation. Our focus is on delivering high-performance
                  results and helping you navigate the complexities of the
                  energy landscape with confidence.
                </h2>
                <a href="/molcom-resourcing" className="find-out-more-button">
                  Find Out More
                </a>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </section>

      <section className="fourth-section">
        <div className="fourth-content">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0a09a1b"
            data-id="0a09a1b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-ed140e7 elementor-widget elementor-widget-heading"
                data-id="ed140e7"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <p className="fourthSectionHeader">
                    Working with Us is Simple
                  </p>
                </div>
              </div>

              <section className="steps-section">
                <div className="steps-container">
                  <div className="step-column">
                    <img
                      src="https://workforcegroup.com/wp-content/uploads/2021/04/Group-48.svg"
                      alt="Workforce Group Logo"
                    />
                    <h2>Step 1</h2>
                    <h3>Schedule Your Consultation</h3>
                    <p>
                      We will have a free consultation with you to understand
                      what you are trying to achieve.
                    </p>
                  </div>
                  <div className="step-column">
                    <img
                      src="https://workforcegroup.com/wp-content/uploads/2021/04/Group-49.svg"
                      alt="Workforce Group Logo"
                    />
                    <h2>Step 2</h2>
                    <h3>Develop a Custom Plan</h3>
                    <p>
                      We will co-create a fit-for-purpose solution that meets
                      your business needs.
                    </p>
                  </div>
                  <div className="step-column">
                    <img
                      src="https://workforcegroup.com/wp-content/uploads/2021/04/Group-50-1.svg"
                      alt="Workforce Group Logo"
                    />
                    <h2>Step 3</h2>
                    <h3>Achieve Your Goals</h3>
                    <p>
                      We will implement the plan, and measure our success
                      against your business objectives.
                    </p>
                  </div>
                </div>
              </section>
              <button className="client-button">BECOME A CLIENT</button>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-section">
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-840a56f"
            data-id="840a56f"
            data-element_type="column"
          >
            <div className="fift-section-content">
              <div className="elementor-element elementor-element-d02127e elementor-invisible elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="fifth-section-header">
                    Are Your Business Systems and HR Processes Designed for
                    Optimum Performance?
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-753a0bd elementor-widget elementor-widget-heading"
                data-id="753a0bd"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <p className="fifth-section-word">
                    Take the Organisational Effectiveness Assessment to identify
                    any key issues and critical areas for improvement.
                  </p>
                </div>
              </div>
              <button className="assessmentButton">TAKE FREE ASSESSMENT</button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home
