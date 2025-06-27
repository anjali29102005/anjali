import { Link } from "react-router-dom";


const ContactPage=() => {
  return(
    

        <div id="contact">
        <h1>Contact Us </h1>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
        <h2>General Enquiries</h2>
        <p>Vivekanand College Main Campus
[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India <br />
Phone: **+91 12345 67890** <br />
Email: **info@vivekanandcollege.edu** <br />
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
    <h2>Admissions Office</h2>
    <p>For all admission-related queries regarding undergraduate or postgraduate programs: <br />
Phone: +91 98765 43210 <br />
Email: admissions@vivekanandcollege.edu</p>
    <h2>Student Support Services</h2>
    <p>For current student support, academic advising, or general assistance:
Phone: +91 87654 32109
Email: studentsupport@vivekanandcollege.edu</p>
<h2>Find us on the map</h2>
<p> [you can embaded a Google Map here later usingg an iframe or a React map liabray.]</p>
    <Link to="https://maps.app.goo.gl/HqrDZJGtxDyciiA79" target="_blank">
    View on the Google Map
    </Link>

    <h2>Send us a Message</h2>
    <p>[A contact form with fields for Name, Email, SUbject, Message can be added here.]</p>
    </div>

  )
}

export default ContactPage;