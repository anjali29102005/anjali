import '/src/styles/Pages.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ApplyPage from "./pages/ApplyPage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import ContactPage from './pages/ContactPage';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';
const App =() => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Anjali Ramchandra Arekar"
          studentPhotoUrl="/image/anjali.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      < Router >
      <Header />
      <div className="main-container">
      <div className="container">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<ApplyPage/>}/>
        </Routes>
        </div>
        </div>
        <Footer />
       </Router>
      <ChatbotComponent />

    </div>
    </>
  )
}

export default App;