import Head from "next/head";
import Image from "next/image";
import { Roboto_Flex, Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const robotoflex = Roboto_Flex({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Prototypes & Products</title>
        <meta name="description" content="Translate your ideas into Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <a href="https://www.linkedin.com/in/julien-leske/">
          <img src="/linkedinLogo.png" width="36px"></img>
        </a>

        <a href="https://github.com/mntzd">
          <img src="githubLogo.svg" width="36px"></img>
        </a>
      </nav>
      <main className={`${styles.main} ${inter.className}`}>
        <section className={`${styles.hero}`}>
          <div>
            <h1 className={`${montserrat.className}`}>
              Transform Ideas into Impact
            </h1>
            <p>Julien Leske</p>
            <span>Senior UX-Designer | Full Stack Web Developer</span>
          </div>
        </section>
        <section className={`${styles.section}`}>
          <h2>From Challenge to Concept in 2 weeks</h2>
          <div className="articleContainer">
            <article>
              <h3>Research</h3>
              <p>
                Quantify Market Opportunities through Qualitative and
                Quantitative Research to target the needs of relevant user
                segments
              </p>
              <span>User & Stakeholder Interviews</span>{" "}
              <span>Quantitative Data Analysis</span>{" "}
              <span>Market & Competitor Research</span>{" "}
              <span>Experience Analysis</span>
            </article>
            <article>
              <h3>Ideate</h3>
              <p>
                Get your stakeholders on board and find creative solutions to a
                common problem understandingä
              </p>
              <span>Design Thinking</span>
              <span>Google Sprint</span>
              <span>Lean UX</span>
            </article>
            <article>
              <h3>Align</h3>
              <p>
                Create a detailed concept describing Challenge, Quantified
                Market Opportunity and Solutionscenarios to align with important
                stakeholders
              </p>
              <span>Alignment Workshop</span>{" "}
              <span>Personas & Customer Journeys</span>{" "}
              <span>Service Blueprint</span>
            </article>
          </div>
        </section>

        <section className={`${styles.section}`}>
          <h2>Concept to Prototype in 4 weeks</h2>
          <div className="articleContainer">
            <article>
              <h3>Prototype</h3>
              <p>
                Create interactive proof of concepts in a few days to excite
                stakeholders for your ideas, A/B Test and gather market feedback
                efficiently
              </p>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>MVPs</span>
            </article>
            <article>
              <h3>Test & Iterate</h3>
              <p>
                Validate & prioritize solution ideas and their features to
                coordinate time and ressource investments where value creation
                is maximized
              </p>
              <span>Scaled User Research</span>
              <span>Usability Testing</span>
              <span>A/B Testing</span>
            </article>
            <article>
              <h3>Plan</h3>
              <p>
                Ramp-up the development process or hand-over to your
                development-team. Slice solution into releases
              </p>
              <span>Requirement Engineering</span>
              <span>Backlog Planning</span>
              <span>Alignment with Stakeholders</span>
            </article>
          </div>
        </section>

        <section className={`${styles.section}`}>
          <h2>From Prototype to Product</h2>
          <div className={`${styles.articleContainer}`}>
            <article>
              <h3>Build</h3>
              <p>
                Bring Prototypes into Production, also possible as Consulting
                Service for your Development Team
              </p>
              <span>Full-Stack Webdevelopment</span>
              <span>Design Systems</span>
              <span>Compliant (OZG, BfsG, 9241-110, A11y)</span>
            </article>
            <article>
              <h3>Roll-Out</h3>
              <p>Continuously deliver value to your user-segments</p>
              <span>Localized Roll-Out Strategy</span>
              <span>Performance Monitoring</span>
              <span>Bugfixes</span>
            </article>
            <article>
              <h3>Operate & Manage</h3>
              <p></p>
              <span></span>
              <span></span>
              <span></span>
            </article>
          </div>
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
          <h2>About</h2>
          <article>
            <p>
              Julien is a Product Engineer and Product-Innovation Consultant
              combining agile product development, User Experience Design, and
              corporate innovation. Julien helps clients build digital products
              & services with relevance - realized through full-stack
              webdevelopment powered by user-centered methodology. From 2019 -
              2023, Julien worked at KPMG and supported numerous software
              projects for mid-market, public and publicly traded companies with
              his expertise in design and development. Previously, he worked 1.5
              years in technology-focused consulting at Infosys Consulting, to
              drive & support topics such as user experience, the use of new
              technologies, and collaboration with startups. After studying
              psychology, he did research on algorithms & user experience in the
              automotive sector and gained experience as a UX designer and
              product owner (agile product development) in a Berlin-based
              digital agency. <br></br>
              Certified SAFe 5 Agilist, Certified SCRUM PO & SCRUM Master,
              Trained in GDPR, 🇩🇪 🇬🇧
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
