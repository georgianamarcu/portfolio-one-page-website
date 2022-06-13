import Link from "next/link";
import { gsap } from "gsap";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { HiMoon } from "react-icons/hi";
import Test from "../public/js/mainTitleOnLoad";

export default function IndexPage() {
  useEffect(() => {
    //GSAP timeline
    const tl = gsap.timeline();
    // Selecting the text
    const mainTitle = document.querySelectorAll(".homepage--text");
    // Making the title visible
    tl.to(mainTitle, {
      duration: 2,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      y: "40px",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Georgiana Marcu - Portfolio</title>
      </Head>
      <section id="homepage">
        <div className="homepage--container">
          <div className="homepage--header">
            <HiMoon className="homepage--theme-toggle" />
          </div>
          <div className="homepage--title">
            <span className="homepage--text">
              Hi,
              <br />
            </span>
            <span className="homepage--text">
              I'm Georgiana <br />
            </span>
            <span className="homepage--text">
              Front-End Developer
              <br />
            </span>
            <span className="homepage--text">Based in Belgium</span>
          </div>
        </div>
      </section>
      <section id="about"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}
