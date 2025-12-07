import './Projects.css'
import project1 from '../assets/Random.png'
import project2 from '../assets/How_to_for_automatic_Email.png'
import project3 from '../assets/Mc_Donalds.png'

function Projects() {
  return (
    <div className="page-container">
      <h1>Our Projects</h1>
      <div className="content">
        <p>Check out some of our recent work and projects.</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A modern web application built with React and Vite.</p>
            <div className="image-placeholder">
              <img src={project1} alt="Project 1" className="project-image" />
            </div>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>An innovative solution for modern challenges.</p>
            <div className="image-placeholder">
              <img src={project2} alt="Project 2" className="project-image" />
            </div>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>A cutting-edge application with excellent UX.</p>
            <div className="image-placeholder">
              <img src={project3} alt="Project 3" className="project-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
