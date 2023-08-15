import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section>
          <h1>Julien Leske</h1>
          <span>UX-Design | Full Stack Web Developer</span>
        </section>
        <section>
          <h2>Projects</h2>
          <div>
            <article>
              <h3>Communio - Donations made Convenient</h3>
              <div className="tags">
                <span>Ownership</span>
                <span>Development</span>
                <span>UX</span>
              </div>
              <p>
                Ever wondered why everything in your life is digital, but
                helping others is not? How can you help feed the people in your
                neighbourhood with just one click?
              </p>
            </article>
            <article>
              <h3>Digital Product-Ecosystem for German State Agency</h3>
              <div className="tags">
                <span>UX</span>
                <span>Concept</span>
              </div>
              <p>
                A digital ecosystem for German citizens to apply for social
                benefits and manage everything around these topics digitally.
              </p>
            </article>
            <article>
              <h3>ArtSpot - Mobile WebApp to like and Comment Artwork</h3>
              <div className="tags">
                <span>UX</span>
                <span>Concept</span>
                <span>Development</span>
              </div>
              <p>
                Find, like and comment on your favorite artworks through a
                modern and attractive opensource WebApp
              </p>
            </article>

            <article>
              <h3>
                Digital Touchpoint optimization of Customer-Self-Service
                Platform
              </h3>
              <div className="tags">
                <span>UX</span>
              </div>
              <p>
                You have a Web-Service but your clients are not using it? Well
                maybeeee you forgot to pose the right questions and design an
                experience around your service.
              </p>
            </article>

            <article>
              <h3>MVP: Self-Service App for medical Laboratories</h3>
              <div className="tags">
                <span>UX</span>
                <span>Product Ownership</span>
              </div>
              <p>
                Even small technical errors can stop medical laboratories to
                work for hours. Technicians often arrive hours later with no
                exact briefing for issues that coudl have been fixed by
                personnel on-site. This can be optimzed!
              </p>
            </article>
          </div>
        </section>
        <section>
          <h3>About</h3>
          <article>
            <p>
              Julien is a Product Engineer and Product-Innovation Consultant
              combining agile product development, User Experience Design, and
              innovation in enterprise context. Julien helps clients build
              digital products & services with relevance - realized through
              full-stack development powered by user-centered methodology. From
              2019 - 2023, Julien worked at KPMG and supported numerous software
              projects for mid-market, public and publicly traded companies with
              his expertise in design and development. Previously, he worked 1.5
              years in technology-focused consulting (Infosys Consulting) to
              drive & support topics such as user experience, the use of new
              technologies, and interaction with startups. After studying
              psychology, he did research on algorithms & user experience in the
              automotive sector and gained experience as a UX designer and
              product owner (agile product development) in a Berlin-based
              digital agency from 2016.
            </p>
          </article>
          <article>
            <h3>Ideate</h3>
            <p>Design Thinking, Google Sprint & Lean UX Facilitator</p>
          </article>
          <article>
            <h3>Design</h3>
            <p>
              Scaled User Research, User & Usability Testing, Personas, Customer
              Journeys, Service Blueprints, Prototyping, MVPs, Design Systems,
              Usability Norms, OZG & BFSG compliance
            </p>
          </article>
          <article>
            <h3>Develop</h3>
            <p>
              React, Mongo, Express, Node, HTML, CSS, JS, Git, Bootstrap,
              Tailwind, Python, Webscraping
            </p>
          </article>
          <article>
            <h3>Manage</h3>
            <p>
              Certified SAFe 5 Agilist, Certified SCRUM PO & SCRUM Master,
              Trained in GDPR, 🇩🇪 🇬🇧{" "}
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
