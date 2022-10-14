import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import ViewPdf from "../../ViewPdf";

import about from "../../assests/images/about.svg";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="about" className="row my-5 text-center justify-content-evenly">
      <Col sm={12} md={7} lg={6}>
        <h2 className="mb-4 text-warning fw-bold" data-aos="zoom-in-up">
          <u>About Me</u>
        </h2>
        <p className="my-3 text-dark text-wrap" data-aos="fade-right">
          Passionate Full-stack developer with 6+ months of hands-on-experience
          in developing scalable websites/applications using a wide range of
          front-end and back-end skills like
          <b>HTML ,CSS ,Python ,JavaScript ,ReactJs ,Django </b>etc.Developed 8+
          websites from Scratch.Looking to furthur enhance HTML5,CSS3,JS skills
          as the full stack developer.
        </p>

        <ul className="about-info px-md-0 px-2 my-md-5 my-3 fs-md-5">
          <li className="d-flex my-1" data-aos="fade-up">
            <span className="fw-bold fs-md-3">Name:</span>
            <span className="ms-md-3 ms-1 fs-md-3">Satyam Singh</span>
          </li>
          <li className="d-flex my-1" data-aos="fade-up">
            <span className="fw-bold fs-md-3">DOB:</span>
            <span className="ms-md-3 ms-1 fs-md-3 text-underline">
              16th November, 2002
            </span>
          </li>
          <li className="d-flex my-1" data-aos="fade-up">
            <span className="fw-bold fs-md-3">Address:</span>
            <span className="ms-md-3 ms-1 fs-md-3">
              Pune Maharashtra 412207 , India
            </span>
          </li>

          <li className="d-flex my-1" data-aos="fade-up">
            <span className="fw-bold fs-md-3">Email:</span>
            <a
              className="ms-md-3 ms-1 fs-md-3 nav-link"
              href="mailto:satyambsingh93@gmail.com "
            >
              satyambsingh93@gmail.com
            </a>
          </li>
          <li className="d-flex my-1" data-aos="fade-up">
            <span className="fw-bold fs-md-3">Phone: </span>
            <a
              className="ms-md-3 ms-1 fs-md-3 nav-link"
              href="tel:+919106643997"
            >
              +91-9106643997
            </a>
          </li>
        </ul>
        <button
          className="btn btn-warning my-3"
          onClick={() => setShowModal(true)}
        >
          View Resume
        </button>
        <ViewPdf show={showModal} onHide={() => setShowModal(false)} />
      </Col>

      <Col xs={10} md={4} className="mt-5" data-aos="flip-left">
        <img src={about} className="img-fluid bounce" />
      </Col>
    </section>
  );
};

export default About;

/*



*/
