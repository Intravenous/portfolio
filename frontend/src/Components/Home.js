import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>

      <section className="hero is-info is-fullheight">
        {/* <!-- Added is-fullheight to make it take up the whole page-->
<!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <nav className="navbar">

          </nav>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              Gordon Gyakyi
            </h1>
            <h2 className="subtitle">
              Junior Software Engineer. Runner. Music and Travel Lover.
            </h2>
          </div>
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        <div clasclassNames="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a>Home</a></li>
                <li><a>About Me</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Experience</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* About me Section */}
      {/* Two columns - Left Picture & Right Words*/}
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              About Me
            </h1>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Skills
            </h1>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Projects
            </h1>
          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Experience
            </h1>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Contact
            </h1>
          </div>
        </div>
      </section>

    </main>
  )
}
export default Home
