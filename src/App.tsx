import "./App.css";
import profilePhoto from "./assets/Shaik_Saniya_Profile.png";

function App() {
  return (
    <div>
      {/* =========================
          NAVIGATION
      ========================= */}
      <nav>
        <h2 aria-label="Shaik Saniya">SN.</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#languages">Languages</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <header>
        <img
          src={profilePhoto}
          alt="Shaik Saniya"
          className="profile-photo"
        />

        <p className="hero-greeting">Hi, I'm</p>

        <h1>Shaik Saniya</h1>

        <p className="hero-role">
          Computer Science & Engineering
        </p>

        <p className="hero-subtitle">
          Software & Data Analytics Developer
        </p>

        <p className="hero-location">
          📍 Hyderabad, India
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View Resume
          </a>

          <a href="#projects" className="secondary-button">
            View Projects
          </a>
        </div>

        <p className="hero-description">
          Aspiring Data Analyst and Software Developer passionate about
          building practical, data-driven solutions.
        </p>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <main>
        {/* ABOUT */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            I am a Computer Science & Engineering student at DRK Institute of
            Science and Technology, JNTU, with a strong interest in software
            development and data analytics. I enjoy learning new technologies,
            solving problems, and building practical applications.
          </p>

          <p>
            My current focus includes Python, SQL, Power BI, MySQL, and modern
            web technologies. I am particularly interested in turning data
            into useful insights and creating solutions that solve real-world
            problems.
          </p>

          <p>
            My goal is to grow as a Data Analyst and Software Developer while
            contributing to meaningful projects and continuously improving my
            technical skills.
          </p>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2>Education</h2>

          <div className="education-item">
            <h3>B.Tech — Computer Science & Engineering</h3>

            <p>
              <strong>
                DRK Institute of Science and Technology, JNTU
              </strong>
              <br />
              2023 – 2027
              <br />
              CGPA: 6.87/10
            </p>
          </div>

          <div className="education-item">
            <h3>Intermediate</h3>

            <p>
              <strong>
                Telangana Minorities Residential School and J.C. Karimnagar
                Girls-1
              </strong>
              <br />
              2023
              <br />
              Percentage: 83.3%
            </p>
          </div>

          <div className="education-item">
            <h3>SSC</h3>

            <p>
              <strong>
                Telangana MIN RES School (Girls-1), Asifabad
              </strong>
              <br />
              2021
              <br />
              GPA: 9.7/10
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2>Skills</h2>

          <p>
            My technical skills include programming, data analytics,
            databases, visualization, and web development.
          </p>

          <ul>
            <li>Python</li>
            <li>Data Analytics</li>
            <li>Power BI</li>
            <li>SQL & MySQL</li>
            <li>HTML, CSS & JavaScript</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2>Experience</h2>

          <div className="experience-item">
            <h3>Data Analytics Intern — THIRANEX</h3>

            <p className="experience-meta">
              1 Month | Remote | 2026
            </p>

            <p>
              Gained practical exposure to Power BI, data analytics, and data
              visualization during the internship.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
  <h2>Projects</h2>

  <p>
    A selection of projects showcasing my skills in software
    development, web development, databases, and data-driven
    applications.
  </p>

  <div className="project-card">
    <h3>Automatic Attendance Management System</h3>

    <p>
      A database-backed web application designed to simplify
      attendance management for educational institutions.
    </p>

    <p>
      <strong>Technologies:</strong> Python, MySQL, HTML, CSS,
      JavaScript
    </p>
  </div>

  <div className="project-card">
    <h3>Web-Based E-Learning Platform</h3>

    <p>
      An e-learning website featuring courses, videos, notes, quizzes
      and progress tracking.
    </p>

    <p>
      <strong>Technologies:</strong> HTML, CSS, JavaScript
    </p>
  </div>
</section>

        {/* CERTIFICATIONS */}
        <section id="certifications">
          <h2>Certifications</h2>

          <div className="certification-card">
            <h3>Internship Certificate — THIRANEX</h3>

            <p>Data Analytics Internship | 2026</p>

            <a
              href="/certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="certificate-button"
            >
              View Certificate
            </a>
          </div>
        </section>

        {/* STRENGTHS */}
        <section id="strengths">
          <h2>Strengths</h2>

          <p>
            Personal qualities that support my learning, development, and
            teamwork.
          </p>

          <ul>
            <li>Problem Solving</li>
            <li>Quick Learning</li>
            <li>Communication Skills</li>
          </ul>
        </section>

        {/* LANGUAGES */}
        <section id="languages">
          <h2>Languages</h2>

          <p>Languages I can communicate in:</p>

          <ul>
            <li>English</li>
            <li>Telugu</li>
            <li>Hindi</li>
            <li>Urdu</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2>Let's Connect</h2>

          <p>
            I'm open to learning opportunities, software development projects,
            and data analytics opportunities.
          </p>

          <p>📍 Hyderabad, India</p>

          <p>
            Email:{" "}
            <a href="mailto:shaiksanu2441@gmail.com">
              shaiksanu2441@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:9059042441">
              9059042441
             </a>
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/shaiksanu2441-png"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-saniya-23n71a0548"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Shaik Saniya. All rights reserved.</p>
        <p>Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;

