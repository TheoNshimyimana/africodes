
import Customers from './pages/Customers'
import TeamSection from './pages/Team'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
// import VideoGallery from './pages/VideoGallery'
import Services from './pages/Services'
import Body from './pages/Body'
import Navbar from './Navbar'
// import VideoGallery from './pages/VideoGallery'
// import TrainingLinks from './pages/TrainingLinks'


function Layout() {
    return (
      <div className='font-open-sans'>
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
        {/* <VideoGallery /> */}
        {/* <TrainingLinks /> */}
        <Footer />
      </div>
    )
}

export default Layout
