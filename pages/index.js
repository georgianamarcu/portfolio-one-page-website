import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Homepage3jsAnimation from "../components/Homepage3jsAnimation";
import Script from "next/script";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

export default function IndexPage() {
  const controls = useAnimation();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const form = useRef();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 50,
      transition: { delay: i * 0.3 },
    }));
  }, []);

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <motion.span
              custom={0}
              animate={controls}
              className="homepage--text text-0"
            >
              Hi,
              <br />
            </motion.span>
            <motion.span
              custom={1}
              animate={controls}
              className="homepage--text text-1"
            >
              I'm Georgiana <br />
            </motion.span>
            <motion.span
              custom={2}
              animate={controls}
              className="homepage--text text-2"
            >
              Front-End Developer
              <br />
            </motion.span>
            <motion.span
              custom={3}
              animate={controls}
              className="homepage--text text-3"
            >
              Based in Belgium
            </motion.span>
          </div>
          <nav className="navbar">
            <Link href="#home">
              <a>Home</a>
            </Link>
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
      </section>
      <section ref={aboutRef} id="about">
        <div className="about--container">
          <h2 className="about--title">ABOUT</h2>
          <div className="about--content">
            <div className="about--content--text about--text--1">
              I've started my web development journey in January 2022 by
              enrolling in an active pedagogy bootcamp called BeCode in
              Brussels.
            </div>
            <div className="about--content--text about--text--2">
              I am currently in the midst of deepening my knowledge of HTML,
              CSS, JavaScript, React.js, Next.js and Three.js to develop ideas
              into engaging websites.
            </div>
            <div className="about--content--text about--text--3">
              Perpetually curious, I'm always up for learning new things.
            </div>
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
            <Link href="/BeTogether">
              <div className="projects--content--preview-1 project-tile"></div>
            </Link>
            <Link href="/NotAnotherCookbook">
              <div className="projects--content--preview-2 project-tile"></div>
            </Link>
            <Link href="/GIdle-Tour">
              <div className="projects--content--preview-3 project-tile"></div>
            </Link>
          </div>
        </div>
      </section>
      <section ref={contactRef} onSubmit={sendEmail} id="contact">
        <div className="contact--container">
          <div className="contact--title--div">
            <h2 className="contact--title">WANT TO WORK</h2>
            <h2 className="contact--title contact--title--right--align">
              TOGETHER?
            </h2>
          </div>
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
                  placeholder="First Name"
                />
                <label htmlFor="last"></label>
                <input
                  type="text"
                  id="last"
                  name="last"
                  placeholder="Last Name"
                />
              </div>
              <div className="contact--form--mail">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                />
              </div>
              <div className="contact--form--message">
                <textarea
                  id="message"
                  rows="10"
                  cols="88"
                  name="description"
                  placeholder="Enter your message here"
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
          <div className="contact--animation"></div>
        </div>
      </section>
    </>
  );
}
