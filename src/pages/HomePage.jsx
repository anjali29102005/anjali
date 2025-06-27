import { Link } from "react-router-dom";

const HomePage =() => {
  return(
    
    
        <div id="home">

          <div className="hero-section">
          <img src="./image/vck3.png" alt="collage" />

          <div className="hero-heading">

        <h1>welcome to Vivekanand Collage!</h1>
        <p>Your journey to Explore Start here</p>
        <Link to="/admission" className="button">
        Apply Now!
        </Link>
        </div>

        </div>

        <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        <h2>Why Choose Vivekanand Collage?</h2>
        <div className="home-ul">
        <ul type="disc">
            <li><b>Legacy of Excellence:</b>Decades of commitment to quality education. </li>
            <li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
            <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
            <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li> 
        </ul>
        </div>
        <h2> Campus Life & Facilities</h2>
        <div className="image">
        < img src="/image/vck.png" alt="collage" />
        <img src="/image/vck1.jpg.png" alt="collage " />
        </div>
        
        <div className="bottom">
          <p>Explore our vibrant campus and state-of-the- art facilities designed to enhance your learning experience and personal growth.</p>
          <p>Ready to start your journey with us?</p>
           <Link to="/courses" className="button">
               Explore Courses       
           </Link>
        </div>
    </div>
    
  

    
  )
}

export default HomePage;