
import Customers from './pages/Customers'
import TeamSection from './pages/Team'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import VideoGallery from './pages/VideoGallery'
import Services from './pages/Services'
import Body from './pages/Body'
import Navbar from './Navbar'


function Layout() {
    return (
      <>
      <Navbar />
        {/* Body */}

        <Body />
        {/* Services Section */}

        <Services />

        {/* Customers */}

        <Customers />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Us Section */}

        <Contact />
        {/* Footer */}
        <VideoGallery />
        <Footer />
      </>
    )
}

export default Layout