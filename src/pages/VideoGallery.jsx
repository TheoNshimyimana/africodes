import { useState, useRef } from 'react'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import { FaPlay } from 'react-icons/fa'
import { MdOutlinePause } from 'react-icons/md'
import { BsFillPlayCircleFill } from 'react-icons/bs'

import video1Thumbnail from '../assets/video1-thumb.webp'
import video2Thumbnail from '../assets/video2-thumb.webp'
import video3Thumbnail from '../assets/video3-thumb.webp'
import video4Thumbnail from '../assets/video4-thumb.webp'
import video5Thumbnail from '../assets/video5-thumb.webp'
import video6Thumbnail from '../assets/video6-thumb.webp'

import Video1 from '../videos/video1.mp4'
import Video2 from '../videos/video2.mp4'
import Video3 from '../videos/video3.mp4'
import Video4 from '../videos/video4.mp4'
import Video5 from '../videos/video5.mp4'
import Video6 from '../videos/video6.mp4'

const videoLinks = [
  { id: 1, thumbnail: video1Thumbnail, videoUrl: Video1, title: 'Video 1' },
  { id: 2, thumbnail: video2Thumbnail, videoUrl: Video2, title: 'Video 2' },
  { id: 3, thumbnail: video3Thumbnail, videoUrl: Video3, title: 'Video 3' },
  { id: 4, thumbnail: video4Thumbnail, videoUrl: Video4, title: 'Video 4' },
  { id: 5, thumbnail: video5Thumbnail, videoUrl: Video5, title: 'Video 5' },
  { id: 6, thumbnail: video6Thumbnail, videoUrl: Video6, title: 'Video 6' },
]

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = (index) => {
    setCurrentIndex(index)
    setSelectedVideo(videoLinks[index])
  }

  const closeModal = () => {
    setSelectedVideo(null)
    setIsPlaying(false) // Stop playing when closing modal
  }

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
      setSelectedVideo(videoLinks[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < videoLinks.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setSelectedVideo(videoLinks[currentIndex + 1])
    }
  }

  return (
    <section className="relative px-4 py-10 max-w-7xl h-screen w-screen mx-auto bg-custom-gray">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <h1 className="relative text-3xl lg:text-4xl font-bold text-center text-custom-blue mb-8 z-10">
        T24 Video Training
      </h1>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLinks.map((video, index) => (
          <div
            key={video.id}
            className="relative cursor-pointer group"
            onClick={() => handleClick(index)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <BsFillPlayCircleFill className="text-white text-4xl" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
              <p className="text-sm">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected video */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-3xl w-full p-4 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white bg-red-500 rounded-full px-3 py-1 transition duration-300 transform hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:scale-95"
            >
              X
            </button>

            <video
              ref={videoRef}
              controls
              src={selectedVideo.videoUrl}
              className="w-full h-auto rounded-md"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                className={`bg-blue-700 text-white text-3xl py-2 px-4 rounded-md ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentIndex === 0}
              >
                <MdSkipPrevious />
              </button>

              <button
                onClick={handlePlayPause}
                className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 active:scale-95"
              >
                {isPlaying ? (
                  <MdOutlinePause className="text-lg" />
                ) : (
                  <FaPlay className="text-lg" />
                )}
              </button>

              <button
                onClick={handleNext}
                className={`bg-blue-700 text-white text-3xl py-2 px-4 rounded-md ${
                  currentIndex === videoLinks.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={currentIndex === videoLinks.length - 1}
              >
                <MdSkipNext />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoGallery
