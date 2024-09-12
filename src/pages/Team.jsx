import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useMediaQuery } from 'react-responsive'

import Frai from '../images/farai2.jpg'
import Dereck from '../images/dereck.png'
import Bless from '../images/blissful.jpg'
import Kenny from '../images/mynza.jpg'
import Tinashe from '../images/nzdwe.jpg'
import Manzi from '../images/manzi.jpg'
import Anotinda from '../images/anotind.jpg'
import Willy from '../images/willmun.jpg'
import Edgar from '../images/hard.jpg'
import Innocent from '../images/innocent.jpg'


import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Farai Mangwanda',
    role: 'Principal Consultant',
    image: Frai,
    social: {
      facebook: '#',
      twitter: 'https://twitter.com/fmangwanda',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Dereck Charimba',
    role: 'Senior Consultant',
    image: Dereck,
    social: {
      facebook: '#',
      twitter: 'https://twitter.com/derecktcharimb1',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Blessfull Dzimiri',
    role: 'Business Consultant',
    image: Bless,
    social: {
      facebook: '#',
      twitter: 'https://twitter.com/BlissfulDzimiri',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Kenny Munyaneza Roger',
    role: 'Technical Consultant',
    image: Kenny,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },

  {
    name: 'Tinashe Nedziwe',
    role: 'Senior Consultant',
    image: Tinashe,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },

  {
    name: 'Frank Manzi',
    role: 'Technical Consultant',
    image: Manzi,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Anotinda Mangwanda',
    role: 'Technical Consultant',
    image: Anotinda,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Edgar Tibeihaho',
    role: 'Business Management',
    image: Edgar,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Munezero Hirwa Willy Christel',
    role: 'Technical Consultant',
    image: Willy,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Innocent Ndahiriwe',
    role: 'Technical Consultant',
    image: Innocent,
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const settings = isMobile ? verticalSettings : horizontalSettings

  return (
    <section id="team" className="pb-16 px-4   pt-5 scroll-animate bg-slate-100">
      <h1 className="font-semibold text-custom-blue text-3xl sm:text-xl md:text-2xl lg:text-3xl text-center mt-10 mb-8">
        Our Team
      </h1>
      <div className="relative h-[900px] sm:h-[400px]">
        <Slider {...settings} className="w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 flex justify-center items-center h-full"
            >
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center min-h-[400px] group transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-t-lg "
                />
                <div className="absolute bottom-44 right-0 flex flex-col space-y-5 bg-black p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-700"
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
                <div className=" w-full text-center flex-1 pt-4 bg-slate-100 ">
                  <h2 className="font-bold text-blue-700 text-sm sm:text-lg md:text-lg mb-2">
                    {member.name}
                  </h2>
                  <p className="text-slate-800 text-base font-medium mb-4">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default TeamSection
