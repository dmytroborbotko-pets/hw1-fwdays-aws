import './Home.css'
import homeImage from '../assets/Great_Random.png'

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Home Page</h1>
      <div className="content">
        <p>This is the home page of our React Vite application.</p>
        <div className="image-placeholder">
          <img src={homeImage} alt="Home page banner" className="page-image" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Home
