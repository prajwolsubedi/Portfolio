import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideImage from '../components/SideImage'
import BlogContent from "../components/BlogContent"
const About = () => {
  return (
    <div>
      <Navbar />
      <SideImage heading="My Blogs."/>
      <BlogContent />
      <Footer />
    </div>
  )
}

export default About