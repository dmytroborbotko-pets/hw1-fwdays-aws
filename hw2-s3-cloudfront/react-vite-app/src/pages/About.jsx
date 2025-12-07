import './About.css'

function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <div className="content">
        <p>Learn more about our team and mission.</p>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>We are a dedicated team focused on building amazing web applications using modern technologies like React and Vite.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To create innovative and user-friendly solutions that make a difference in people's lives.</p>
        </div>
      </div>
    </div>
  )
}

export default About
