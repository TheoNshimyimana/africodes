import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useMediaQuery } from 'react-responsive'

import Frai from '../images/farai2.jpg'
import Dereck from '../images/dereck.png'
import Bless from '../images/blissful.jpg'
import Kenny from '../images/mynza.jpg'
import Boudoun from '../images/nkru.jpg'
import Tinashe from '../images/nzdwe.jpg'
import Musoni from '../images/musni.jpg'
import Manzi from '../images/manzi.jpg'
import Anotinda from '../images/anotind.jpg'
import Willy from '../images/willmun.jpg'

const teamMembers = [
  { name: 'Farai Mangwanda', role: 'Principal Consultant', image: Frai },
  { name: 'Dereck Charimba', role: 'Senior Consultant', image: Dereck },
  { name: 'Blessfull Dzimiri', role: 'Business Consultant', image: Bless },
  { name: 'Kenny Munyaneza Roger', role: 'Technical Consultant', image: Kenny },
  { name: 'Boudoun Nkurunza', role: 'Technical Consultant', image: Boudoun },
  { name: 'Tinashe Nedziwe', role: 'Senior Consultant', image: Tinashe },
  { name: 'Felicien Musoni', role: 'Technical Consultant', image: Musoni },
  { name: 'Frank Manzi', role: 'Technical Consultant', image: Manzi },
  { name: 'Anotinda Mangwanda', role: 'Technical Consultant', image: Anotinda },
  { name: 'Munezero Hirwa Willy Christel', role: 'Technical Consultant', image: Willy },
]

const TeamSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })

  const verticalSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
  }

  const horizontalSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isTablet ? 3 : 4, 
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const settings = isMobile ? verticalSettings : horizontalSettings

  return (
    <section id="team" className="mt-16 px-4 mx-auto max-w-6xl scroll-animate">
      <h1 className="font-bold text-custom-blue text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-center mb-8">
        Meet Our Team
      </h1>
      <div className="relative  h-[400px] sm:h-[400px]">
        <Slider {...settings} className="w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 flex justify-center items-center h-full"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h2 className="font-bold text-blue-700 text-xl sm:text-2xl md:text-2xl text-center mb-2">
                  {member.name}
                </h2>
                <p className="text-slate-800 text-base font-medium text-center mb-4">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default TeamSection
