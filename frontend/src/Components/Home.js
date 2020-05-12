import React from 'react'
import { Link } from 'react-router-dom'

// import 'devicon'
import LazyHero from 'react-lazy-hero'

const Home = () => {
  return (
    <main>

      <section id="hero-header" className="hero is-info is-fullheight">
        {/* <!-- Added is-fullheight to make it take up the whole page-->
<!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          {/* <nav className="navbar">

          </nav> */}
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container">
            <h1 id="gname" className="title">
              Gordon Gyakyi
            </h1>
            <h2 id="gsub" className="subtitle">
              Junior Software Engineer. Runner. Music and Travel Lover.
            </h2>
          </div>



        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a>Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a>TestBed</a></li> */}
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* About me Section */}
      {/* Two columns - Left Picture & Right Words*/}

      <section className="about hero is-fullheight">
        <div className="level-item has-text-centered">

        </div>
        <div id="about-section" className="hero-body">

          <div className="container">
            <h1 id="about" className="title has-text-centered section-head">
              About Me
            </h1>
            <div className="columns is-vcentered">
              <div className="column">
                {/* First column - Picture */}
                <img id="headshot" src="https://www.dropbox.com/s/cbz0kgl2a9s1uo2/Gordon-circle.png?raw=1" alt="Gordon's Profile" />

              </div>
              <div className="column">

                {/* <div className="tile is-parent">
                <article className="tile is-child box">
              <p>Hello, my name's Gordon! I'm an aspiring full stack web developer, enrolled on General Assembly's Software Enginnering Immersive course.
                In a previous life I was a senior Business Analyst with twenty years experience in the Investment Banking sector, primarily in the area of Reference Data Management. Although it was a career that I enjoyed and one where I had a proven track record of helping to deliver successful outcomes in a number of projects and business process re-engineering initiatives, I can to the colculsion that I both wanted an needed to try something different for the next stage of my career.</p>
                </article>
              </div> */}
                <div className="container">
                  <div className="notification">
                    <p>Hi, my name's Gordon! I'm an a Junior full-stack developer and a graduate of General Assembly's Software Engineering Immersive course.<br /><br />

                    In a previous life I was a Senior Business Analyst with twenty years experience in the Investment Banking sector, primarily in the area of Reference Data Management.<br /><br />

                    Although it was a career that I enjoyed and one where I had a proven track record of helping to deliver successful outcomes in a number of projects and business process re-engineering initiatives, I came to the conclusion that I both wanted and needed to try something different for the next stage of my career.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills hero is-danger is-fullheight">

        <div id="skills-section" className="hero-body">
          <div className="container has-text-centered">
            <h1 id="skills" className="title has-text-centered section-head">
              Skills
            </h1>
            <div className="container is-fluid">

              <div className="columns">
                <div className="column">
                  <i className="devicon-html5-plain is-size-1"></i>
                  <p>HTML5</p>
                </div>
                <div className="column ">
                  <i className="devicon-css3-plain is-size-1"></i>
                  <p>CSS3</p>
                </div>
                <div className="column">
                  <i className="devicon-git-plain is-size-1"></i>
                  <p>Git</p>
                </div>
                <div className="column">
                  <i className="devicon-github-plain is-size-1"></i>
                  <p>GitHub</p>
                </div>
                <div className="column">
                  <i className="devicon-trello-plain is-size-1"></i>
                  <p>Trello</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-visualstudio-plain is-size-1"></i>
                  <p>VS Code</p>
                </div>
                <div className="column">
                  <i className="devicon-mongodb-plain is-size-1"></i>
                  <p>MongoDB</p>
                </div>
                <div className="column">
                  <i className="devicon-react-original is-size-1"></i>
                  <p>React.js</p>
                </div>
                <div className="column">
                  <i className="devicon-javascript-plain is-size-1"></i>
                  <p>JavaScript</p>
                </div>
                <div className="column">
                  <i className="devicon-django-plain is-size-1"></i>
                  <p>Django</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-python-plain is-size-1"></i>
                  <p>Python</p>
                </div>
                <div className="column">
                  <i className="devicon-postgresql-plain is-size-1"></i>
                  <p>PostgreSQL</p>
                </div>
                <div className="column">
                  <i className="devicon-nodejs-plain is-size-1"></i>
                  <p>Node.js</p>
                </div>
                <div className="column">
                  <i className="devicon-express-original is-size-1"></i>
                  <p>Express.js</p>
                </div>
                <div className="column">
                  <i className="devicon-heroku-original is-size-1"></i>
                  <p>Heroku</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-slack-plain is-size-1"></i>
                  <p>Slack</p>
                </div>
                <div className="column">
                  <i className="devicon-webpack-plain is-size-1"></i>
                  <p>Webpack</p>
                </div>
                <div className="column">
                  <i className="devicon-babel-plain is-size-1"></i>
                  <p>Babel</p>
                </div>
                <div className="column">
                  <i className="devicon-mocha-plain is-size-1"></i>
                  <p>Mocha</p>
                </div>
                <div className="column">
                  <i className="devicon-sass-original is-size-1"></i>
                  <p>Sass</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section className="projects hero is-info is-fullheight">
        <div id="projects-section" className="hero-body">
          <div className="container has-text-centered">
            <h1 id="projects" className="title has-text-centered section-head">
              Projects
            </h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h4>Land of the Snake</h4>
                  <p>SEI Project One</p>
                  <figure>
                    <img src="https://i.imgur.com/fqvfPaGh.png" />
                  </figure>
                  {/* <Link target="_blank" rel="noopener noreferrer" to='/https://intravenous.github.io/project-1/'>Deployed Project</Link> */}
                  <a target="_blank" rel="noopener noreferrer" href="/https://intravenous.github.io/project-1">Deployed Project</a><br />
                  <a target="_blank" rel="noopener noreferrer" href="/https://github.com/Intravenous/project-1">Repository</a>
                  {/* <p className="title">One</p>
                  <p className="subtitle">Subtitle</p> */}
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h4>Soundtrack</h4>
                  <p>SEI Project Two</p>
                  <figure>
                    <img src="https://i.imgur.com/dRWtKn5h.jpg" />
                  </figure>
                  <a target="_blank" rel="noopener noreferrer" href="https://intravenous.github.io/project-2">Deployed Project</a><br />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/Project-2">Repository</a>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h4>BookedUp</h4>
                  <p>SEI Project Three</p>
                  <figure>
                    <img src="https://i.imgur.com/dflUP27h.png" />
                  </figure>
                  <a target="_blank" rel="noopener noreferrer" href="https://booked-up.herokuapp.com/">Deployed Project</a><br />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/project-3">Repository</a>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h4>L.A.B.S</h4>
                  <p>SEI Project Four</p>
                  <figure>
                    <img src="https://i.imgur.com/Fs7PSSfh.png" />
                  </figure>
                  <a target="_blank" rel="noopener noreferrer" href="https://proj-labs.herokuapp.com/#/">Deployed Project</a><br />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/project-4">Repository</a>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent is-3">
                <article className="tile is-child box">
                  <figure>
                    <img src="https://i.imgur.com/b291JuG.jpg" />
                  </figure>
                  <h4>The Crate</h4>
                  <p>Personal Side Project</p>
                </article>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section className="experience hero is-fullheight">

        <div id="experience-section" className="hero-body">
          {/* <div className="container"> */}
          <div className="container is-fluid">
            <h1 id="experience" className="title has-text-centered section-head">
              Experience
            </h1>
            <div className="notification">
              To be decided...
              {/* This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
                viewport size. */}
              {/* </div> */}
            </div>

          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="contact hero has-background-grey is-bold">
        <div id="contacts-section" className="hero-body">
          <h1 id="contact" className="title has-text-centered section-head">
            Contact
          </h1>
          <div className="container">

            <div className="columns has-text-centered">
              <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="mailto:gordon.gyakyi@btinternet.com">
                  <i className="fas fa-3x fa-envelope"></i>
                </a>
              </div>
              <div className="column ">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous">
                  <i className="fab fa-3x fa-github"></i>
                </a>
              </div>
              <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gordon-gyakyi-99419b1a/">
                  <i className="fab fa-3x fa-linkedin-in"></i>
                </a>
              </div>

            </div>

            <div className="content has-text-centered">
              <p>
                Made with ♥ and &#123; &#125; by Gordon Gyakyi
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* 
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with ♥ and &#123; &#125; by Gordon Gyakyi
          </p>
        </div>
      </footer> */}

    </main>
  )
}
export default Home
