// React Hooks and icons
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

//Next.js components
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// Extra modules (mail, popup)
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Parallax } from "react-scroll-parallax";

// Animations
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Homepage3jsAnimation from "../components/Homepage3jsAnimation";

export default function IndexPage() {
  const controls = useAnimation();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const form = useRef();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 30,
      transition: { delay: i * 0.4 },
    }));
  }, []);

  // Setting the state for the inputs of the form

  const [inputsState, setInputsState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle change of the inputs

  const handleChange = (event, field) => {
    const value = event.target.value;
    setInputsState({
      ...inputsState,
      [field]: value,
    });
  };

  // EmailJS Setup/ onSubmit function of the form that includes the alert once it has been submitted

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          MySwal.fire({
            title: "Your message has been sent",
            icon: "success",
            background: "#1C2242",
            color: "white",
            confirmButtonColor: "#D7907B",
            confirmButtonText: "Go back",
          });

          setInputsState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //Scrolling to top function

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Georgiana Marcu - Portfolio</title>
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></Script>
        <Script type="text/javascript">
          (function(){emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY)})();
        </Script>
      </Head>
      <section id="homepage">
        <div id="scene">
          <Canvas>
            <ambientLight intensity={2} />
            <Homepage3jsAnimation position={[-2, 0, 0]} />
          </Canvas>
        </div>
        <div className="homepage--container">
          <div className="homepage--title">
            <Parallax translateX={[-20, 25]}>
              <motion.span
                custom={0}
                animate={controls}
                className="homepage--text text-0"
              >
                Hi,
                <br />
              </motion.span>
            </Parallax>
            <Parallax translateX={[20, -25]}>
              <motion.span
                custom={1}
                animate={controls}
                className="homepage--text text-1"
              >
                I'm Georgiana <br />
              </motion.span>
            </Parallax>
            <Parallax translateX={[-20, 25]}>
              <motion.span
                custom={2}
                animate={controls}
                className="homepage--text text-2"
              >
                Front-End Developer
                <br />
              </motion.span>
            </Parallax>
            <Parallax translateX={[20, -25]}>
              <motion.span
                custom={3}
                animate={controls}
                className="homepage--text text-3"
              >
                Based in Belgium
              </motion.span>
            </Parallax>
          </div>
          <nav className="navbar">
            <Link href="#about">
              <a>About</a>
            </Link>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
            <div className="line"></div>
          </nav>
        </div>
        <div className="homepage--scroll--indicator">
          <div className="homepage--icon--scroll"></div>
        </div>
        <a
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{ display: showTopBtn ? "inline-block" : "none" }}
        ></a>
      </section>
      <section ref={aboutRef} id="about">
        <div className="about--container">
          <h2 className="about--title">ABOUT</h2>
          <div className="about--content">
            <Parallax translateY={[-55, 35]}>
              <div className="about--content--text about--text--1">
                I've started my web development journey in January 2022 by
                enrolling in an active pedagogy bootcamp called BeCode in
                Brussels. Before that, I was active in marketing and had a short
                affair with the aviation domain.
              </div>
            </Parallax>
            <Parallax translateY={[-45, 30]}>
              <div className="about--content--text about--text--2">
                I am currently in the midst of deepening my knowledge of HTML,
                CSS, JavaScript, React.js, Next.js and Three.js to develop ideas
                into engaging websites.
              </div>
            </Parallax>
            <Parallax translateY={[-40, 55]}>
              <div className="about--content--text about--text--3">
                Perpetually curious, I'm always up for learning new things.
              </div>
            </Parallax>
          </div>
        </div>
      </section>
      <section ref={projectsRef} id="projects">
        <div className="projects--container">
          <h2 className="projects--title">PROJECTS</h2>
          <div className="projects--content">
            <div className="projects--content--see--more">
              <h3 className="projects--content--see--more--text">
                See Github Repositories
              </h3>
              <a
                href="https://github.com/georgianamarcu"
                className="projects--content-link"
                target="_blank"
              >
                <BsArrowRight className="projects--content-icon" />
              </a>
            </div>
            <Link href="https://github.com/robinlej/betogether">
              <div className="projects--content--preview-1 project-tile"></div>
            </Link>
            <Link href="https://github.com/georgianamarcu/gidle-worldtour-page">
              <div className="projects--content--preview-3 project-tile"></div>
            </Link>
            <Link href="https://github.com/RaphaCH/not-another-cookbook">
              <div className="projects--content--preview-2 project-tile"></div>
            </Link>
          </div>
        </div>
      </section>
      <section ref={contactRef} onSubmit={sendEmail} id="contact">
        <div className="contact--container">
          <div className="contact--title--div">
            <Parallax
              translateX={["-100px", "0px"]}
              scale={[0.85, 1]}
              easing="easeInQuad"
            >
              <h2 className="contact--title">WANT TO WORK</h2>
              <h2 className="contact--title contact--title--right--align">
                TOGETHER?
              </h2>
            </Parallax>
          </div>
          <div className="contact--page--flex">
            <div className="contact--form">
              <form
                ref={form}
                action="https://api.emailjs.com/api/v1.0/email/send"
                method="POST"
                id="contact--form"
              >
                <div className="contact--form--name">
                  <label htmlFor="first"></label>
                  <input
                    type="text"
                    id="first"
                    name="first"
                    placeholder="First Name*"
                    value={inputsState.firstName}
                    onChange={(event) => handleChange(event, "firstName")}
                    required
                  />
                  <label htmlFor="last"></label>
                  <input
                    type="text"
                    id="last"
                    name="last"
                    placeholder="Last Name"
                    value={inputsState.lastName}
                    onChange={(event) => handleChange(event, "lastName")}
                  />
                </div>
                <div className="contact--form--mail">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-mail address*"
                    value={inputsState.email}
                    onChange={(event) => handleChange(event, "email")}
                    required
                  />
                </div>
                <div className="contact--form--message">
                  <textarea
                    id="message"
                    rows="10"
                    cols="88"
                    name="message"
                    placeholder="Enter your message here*"
                    required
                    value={inputsState.message}
                    onChange={(event) => handleChange(event, "message")}
                  ></textarea>
                </div>
                <div className="contact--form-button-flex">
                  <button
                    className="contact--form--button"
                    type="submit"
                  ></button>
                </div>
              </form>
            </div>
            <div className="contact--social">
              {/* <GrLinkedin />
              <BsGithub /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
