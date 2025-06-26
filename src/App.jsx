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
const App =() => {
  return(
    <div>
      < Router >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<ApplyPage/>}/>
        </Routes>
        <Footer />
       </Router>
      <ChatbotComponent />

    </div>
  )
}

export default App;