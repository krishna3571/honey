import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";

import img1 from "../image/s-1.jpg";
import img2 from "../image/s-2.jpg";
import img3 from "../image/s-3.jpg";
import plane from "../image/plane.png";
import ship from "../image/ship.png";
import award from "../image/award.png";
import group from "../image/group.png";
import handshake from "../image/handshake.png";
import peace from "../image/peace.png";
import support from "../image/support.png";
import list from "../image/list.png";
import "./Home.css";
// import Swiper from "swiper";
import "./About.css";

import p1 from "../productimg/p-2.jpg";
import p2 from "../productimg/p-3.jpg";
import p3 from "../productimg/p-4.jpg";
import p4 from "../productimg/p-22.jpg";
import p5 from "../productimg/p-6.jpg";
import p6 from "../productimg/p-7.jpg";
import p7 from "../productimg/p-8.jpg";
import p8 from "../productimg/p-9.jpg";
import p9 from "../productimg/p-10.jpg";
import p10 from "../productimg/p-11.jpg";
import p11 from "../productimg/p-12.jpg";
import p12 from "../productimg/p-13.jpg";
import p13 from "../productimg/p-14.jpg";
// import p14 from "../productimg/p-18.jpg";
// import p15 from "../productimg/p-17.jpg";

import r1 from "../productimg/AEO.png";
import r2 from "../productimg/APEDA.png";
import r3 from "../productimg/FIEO.png";
import r4 from "../productimg/FSSAI.png";
import r5 from "../productimg/MSME.png";
import r6 from "../productimg/Spices-Board-of-India.png";
import r7 from "../productimg/rg.jpg";
import lg1 from "../productimg/lg-1.png";
import logo from "../productimg/logo-removebg-preview.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from '@emailjs/browser';

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide",
    image: img1,
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide",
    image: img2,
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide",
    image: img3,
  },
];

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [activeTab, setActiveTab] = useState("peace"); // Default active tab is "peace"

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const TabButton = ({ icon, title, tabId }) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div
          className="nav-item d-flex justify-content-center"
          role="presentation"
        >
          <button
            className={`border-0 bg-transparent ${activeTab === tabId ? "active" : ""
              }`}
            onClick={() => handleTabChange(tabId)}
          >
            <div className="support-container">
              <div className="icon-wrapper">
                <div className=" icon-border">
                  <div className="icon">
                    <img
                      src={icon}
                      alt="img"
                      className="position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="why-text">
              <h4 className="text-center py-3 text-dark">{title}</h4>
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Functional component for tab content
  const TabContent = ({ tabId, description }) => {
    return (
      <div
        className={`tab-pane fade ${activeTab === tabId ? "show active" : ""}`}
        id={tabId}
        role="tabpanel"
        tabIndex="0"
        aria-labelledby={`#${tabId}-tab`}
      >
        <p className="text-center support-text fs-4 text-body-tertiary">
          {description}
        </p>
      </div>
    );
  };

  //

  const images = [
    { id: 1, src: p1, category: "Nature", info: "Information about image 1" },
    { id: 2, src: p2, category: "City", info: "Information about image 2" },
    { id: 3, src: p3, category: "Nature", info: "Information about image 3" },
    { id: 4, src: p4, category: "City", info: "Information about image 4" },
    // Add more images with categories and information as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <button className="slick-prev" style={{ color: "black" }}>
        Previous
      </button>
    ), // Set color to black
    nextArrow: (
      <button className="slick-next" style={{ color: "black" }}>
        Next
      </button>
    ), // Set color to black
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs.send('service_iv8zzrl', 'template_6njp0xi', formData, 'Elk3MjnKbpyTSo-kv')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setError(true);
      });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10",
          padding: "10px 30px 10px 30px",
        }}
        className={`navbar navbar-expand-lg navbar-light bg-light action2 ${navActive ? "active" : ""
          }`}
      >
        <a style={{ marginLeft: "30px" }} className="navbar-brand" href="#">
          <img src={lg1} alt="img" width="100px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          style={{ marginRight: "70px" }}
          className={`collapse navbar-collapse ${navActive ? "show" : ""}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div> */}
          </div>
        ))}
        <div className="banner-content position-absolute top-50 start-50 translate-middle z-3 pt-5 mt-5 mt-xl-0">
          <h1 className="text-white text-center wow fadeInUp">
            Let's get together and start a new journey in the world of import
            export.
          </h1>
        </div>
      </div>

      <section class="about position-relative" id="about">
        <div class="position-absolute top-0 start-0 ">
          <img src={plane} alt="img" class="pt-4" width="300px" />
        </div>
        <div class="container">
          <div class="about-content py-5 py-lg-2">
            <div class="title">
              <h4
                class="fw-semibold wow fadeInUp pb-2 text-center"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Antarctico Export
              </h4>
            </div>
            <p class="col-11 col-lg-10 text-center">
              We specializes in sourcing premium agricultural products from the
              diverse landscapes of India. Our commitment to sustainability and
              fair trade practices ensures the delivery of top-quality crops,
              spices, and organic produce. Through strong partnerships with
              local farmers, we export the authentic flavors and richness of
              India's agriculture, maintaining stringent quality control to
              offer exceptional products to global markets. Join us in
              celebrating and sharing the bounty of India's fertile lands while
              supporting sustainable farming practices and local communities.{" "}
            </p>
          </div>
        </div>
        <div class="position-absolute bottom-0 end-0 pb-2">
          <img src={ship} alt="img" width="300px" class="pe-4 pb-2" />
        </div>
      </section>

      <section className="why-us py-5 mb-5" id="service">
        <div className="container">
          <div className="title pt-5 pt-lg-0">
            <h4 className="fw-semibold text-center wow fadeInUp">
              Why Choose Us?
            </h4>
          </div>
          <div className="why-us-items">
            <ul className="nav nav-pills my-5" id="pills-tab" role="tablist">
              {/* Render tabs */}
              {/* You can add more tabs by repeating this block */}
              <TabButton
                icon={award}
                title="EXCELLENCY"
                tabId="excellency"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <TabButton
                icon={handshake}
                title="COMMITMENT"
                tabId="handshake"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <TabButton
                icon={support}
                title="24X7 CUSTOMER SUPPORT"
                tabId="support"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <TabButton
                icon={peace}
                title="HONESTY & INTEGRITY"
                tabId="peace"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <TabButton
                icon={list}
                title="QUALITY & VALUE FOR MONEY"
                tabId="list"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
              <TabButton
                icon={group}
                title="SOCIAL CONTRIBUTION"
                tabId="group"
                activeTab={activeTab}
                onClick={handleTabChange}
              />
            </ul>
            {/* Render tab content */}
            <div className="tab-content" id="pills-tabContent">
              {/* You can add more tab content by repeating this block */}
              <TabContent
                tabId="excellency"
                description="Team of professionals which possess a customer-centric approach."
                activeTab={activeTab}
              />
              <TabContent
                tabId="handshake"
                description="At Antarctico International, we are committed to all our stakeholders adhering to ethical practices in business operations to honor our deliverables to every person, entity, or organization associated with us."
                activeTab={activeTab}
              />
              <TabContent
                tabId="support"
                description="We are sincerely dedicated to our customers' concerns; hence we promise to solve your concerns and get back to you round the clock. We are here to serve you."
                activeTab={activeTab}
              />
              <TabContent
                tabId="peace"
                description="For us, integrity implies honesty and transparency in our business processes and the highest level of ethical behavior and professional act in customer services."
                activeTab={activeTab}
              />
              <TabContent
                tabId="list"
                description="We are associated with brands trusted by your customers. We are dedicated to providing you the best quality product at a reasonable rate."
                activeTab={activeTab}
              />
              <TabContent
                tabId="group"
                description="We believe that our responsibility as a member of society is to create value in society through employment generation, uplifting the economy by export. We also support women empowerment by exporting the products of Small & Cottage Industries led by women."
                activeTab={activeTab}
              />
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <div id="services">
        <div class="title d-flex justify-content-center align-items-center">
          <h4
            class="fw-semibold wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Portfolio
          </h4>
          <h3
            class="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Check our Portfolio
          </h3>
        </div>

        {/* Category filter buttons */}
        <div className="port-1">
          <button className="btn1" onClick={() => handleCategoryChange("All")}>
            All
          </button>
          <button
            className="btn1"
            onClick={() => handleCategoryChange("Nature")}
          >
            Nature
          </button>
          <button className="btn1" onClick={() => handleCategoryChange("City")}>
            City
          </button>
          {/* Add more category buttons as needed */}
        </div>

        {/* Gallery of images */}
        <div className="gallery">
          <div className="row">
            {images.map((image) => {
              // Filter images based on selected category
              if (
                selectedCategory === "All" ||
                image.category === selectedCategory
              ) {
                return (
                  <div className="col-lg-4 col-xl-4 col-md-6 col-xl-4 col-xxl-3 all spices ">
                    <div
                      key={image.id}
                      className="image-container"
                      onMouseEnter={() => setHoveredImage(image)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src={image.src}
                        alt={image.category}
                        className="image"
                      />
                      {hoveredImage && hoveredImage.id === image.id && (
                        <div className="info-container">
                          <div className="info-2">
                            <div className="mar">
                              <h4 className="info">product</h4>
                              <p className="info">{image.info}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/*  */}

      <section class="testimonials py-5">
        <div class="container">
          <div class="title pt-5 pt-lg-0 mb-5">
            <h4
              class="fw-semibold text-center wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Testimonials
            </h4>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-xl-3">
              <div class="testimonials-about bg-light rounded-5 p-4 my-2">
                <div class="pb-3">
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </div>
                <p className="okover">
                  As Swarna Waves, we've been importing potatoes from Antarctico
                  International, and we're genuinely satisfied with their
                  service. Quality products and reliable deliveries have been
                  the key to our successful partnership.
                </p>
                <h6 class="text-end">- Swarnawaves Industries</h6>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <div class="testimonials-about bg-light rounded-5 p-4 my-2">
                <div class="pb-3">
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </div>
                <p className="okover">
                  In past When I was dealing with you first time, I was Quite
                  afraid for product quality and service but now I ca blindly
                  trust on #Antarcticointernational. keep it up
                  #internationaltrade
                </p>
                <h6 class="text-end">- Prakash</h6>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <div class="testimonials-about bg-light rounded-5 p-4 my-2">
                <div class="pb-3">
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </div>
                <p className="okover">
                  Their dedication to quality,reliability, and professionalism
                  is truly commendable. I highly recommend their services to
                  anyone looking for top-notch import-export solutions
                </p>
                <h6 class="text-end">- Drashti Rakholia</h6>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <div class="testimonials-about bg-light rounded-5 p-4 my-2">
                <div class="pb-3">
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <svg
                    class="svg-inline--fa fa-star text-warning"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </div>
                <p className="okover">
                  Good experience with staff and amazing products I am
                  recommended to try for once you will love it...just awesome..
                </p>
                <h6 class="text-end">- Dashu Jivani</h6>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <a
              href="#"
              class="text-decoration-none mx-2 button-secondary"
            >
              Write Review
            </a>
            <a
              href="#"
              class="text-decoration-none mx-2 button"
            >
              More Review
            </a>
          </div>
        </div>
      </section>

      {/*  */}

      <section class="contact py-5" id="contact">
        <div class="container">
          <div class="title d-flex justify-content-center align-items-center">
            <h4
              class="fw-semibold text-white wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Contact Us
            </h4>
            <h3
              class="pb-5 text-white text-center wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Check our Contact Details
            </h3>
          </div>
          <div class="contact-content">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464.8471586824674!2d72.8777612605839!3d21.24067905347878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb5f5a392a1%3A0xe39a3748b0358250!2sAngel%20Business%20Center%20%2F%20ABC%20mall%201!5e0!3m2!1sen!2sin!4v1718012868938!5m2!1sen!2sin"
                  width="100%"
                  height="450px"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form mt-5 mt-lg-0">
                  <form onSubmit={sendEmail} id="frmcontact">
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="my-2 mt-0 form-control rounded-0 shadow-none"
                          autoComplete="off"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          className="my-2 mt-0 form-control rounded-0 shadow-none"
                          autoComplete="off"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="my-2 form-control rounded-0 shadow-none"
                      autoComplete="off"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      placeholder="Message"
                      id="message"
                      name="message"
                      className="col-12 my-2 shadow-none px-2 py-2 border border-light"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <button
                      type="submit"
                      id="submitCForm"
                      className="button border-0"
                    >
                      Send Enquiry
                    </button>
                    {success && (
                      <div className="alert alert-success f-25" id="contactSuccess">
                        Thank you for showing your Interest, We will be in touch soon!
                      </div>
                    )}
                    {error && (
                      <div className="alert alert-danger f-25" id="contactError">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <div className="con3">
        <div class="title pb-lg-5 mt-5">
          <h4
            class="fw-semibold text-center wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Membership &amp; Registration
          </h4>
        </div>

        <Slider {...settings}>
          <div>
            <img src={r1} alt="Logo 1" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r2} alt="Logo 2" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r3} alt="Logo 2" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r4} alt="Logo 2" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r5} alt="Logo 2" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r6} alt="Logo 2" style={{ width: "150px" }} />
          </div>
          <div>
            <img src={r7} alt="Logo 2" style={{ width: "150px" }} />
          </div>

          {/* Add more images here */}
        </Slider>
      </div>

      {/*  */}

      <footer>
        <div className="footer p-3 p-md-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <h3
                  className="pb-3 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  About US
                </h3>
                <p>
                  We specialize in sourcing premium agricultural products from
                  the diverse landscapes of India. Our commitment to
                  sustainability and fair trade practices ensures the delivery
                  of top-quality crops, spices, and organic produce.
                </p>
                {/* <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      href="https://twitter.com/Antarcticoint/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter px-2 ps-0"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Antarctico-International/61550570355244/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook px-2"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/antarctico_international/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram px-2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in px-2"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div
                  className="d-flex justify-content-center py-4 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <img
                    src={logo}
                    alt="logo-img"
                    width="250px"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h3
                  className="pb-3 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  Contact Us
                </h3>
                <ul className="list-unstyled">
                  <li className="d-flex">
                    <i className="fas fa-location-dot pe-3 pt-2"></i>
                    <p>
                      S 228, Angle Bussiness Center, Near Sudama Chowk, Mota
                      Varachha, Surat - 394101, Gujarat, India.
                    </p>
                  </li>
                  <li className="d-flex">
                    <i className="fas fa-envelope pe-3 pt-2"></i>
                    <p>
                      <a
                        href="mailto:honeyinternational228@gmail.com"
                        style={{ color: "unset", textDecoration: "none" }}
                      >
                        honeyinternational228@gmail.com
                      </a>
                    </p>
                  </li>
                  <li className="d-flex">
                    <i className="fas fa-mobile pe-3 pt-2"></i>
                    <p>
                      <a
                        href="tel:+917778000318"
                        style={{ color: "unset", textDecoration: "none" }}
                      >
                        +91 777 8000 318
                      </a>
                      <br />
                      <a
                        href="tel:+919316579479"
                        style={{ color: "unset", textDecoration: "none" }}
                      >
                        +91 93165 79479
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-2">
          <div className="container d-md-flex justify-content-between">
            <p className="text-center text-light mb-0">
              Copyright © 2023 Antarctico International. All Rights Reserved
            </p>
            <p className="text-center text-light mb-0">
              Developed By{" "}
              <a
                href="https://www.craxus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                Krishna Vaghasiya
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
