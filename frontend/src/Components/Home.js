import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
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
            <strong>Aspiring</strong> Junior Software Engineer. Runner. Music and Travel Lover.
          </h2>
        </div>
      </div>
    </section>
  )
}
export default Home
