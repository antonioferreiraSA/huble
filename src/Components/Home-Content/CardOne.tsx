import React from 'react'

const CardOne = () => {
  return (
    <div className="flex p-8">
      {/* Left side */}
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#fc4f5a]">WHO</span> WE ARE
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          To always be a company where employees can thrive and provide lasting
          solutions for our customers, we’re committed to five core values here
          at Huble. Five things that we hold dear, and that guide us in the
          things that we do every day. This short video explains - these are our
          people, they are all our voices, this is who we are.
        </h2>
        <div className="mb-4">
          <a
            href="https://www.hubledigital.com/" // Replace with the actual URL you want to open
            target="_blank"
          >
            <button className="border-grey-500 border-2 text-gray-600 px-4 py-2 mr-2  rounded-3xl">
              More Info
            </button>
          </a>
          <a
            href="https://www.hubledigital.com/careers/working-at-huble-digital" // Replace with the actual URL you want to open
            target="_blank"
          >
            <button className="bg-[#fc4f5a] text-white px-4 py-2 rounded-3xl">
              The Team
            </button>
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2">
        {/* Embed your video component here */}
        <iframe
          title="Sample Video"
          className="w-full h-64"
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default CardOne
