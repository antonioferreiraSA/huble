import React from 'react'

const YouCanDoCard = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 items-center justify-center transition-transform duration-500 ease-in-out transform -translate-y-0 hover:-translate-y-2">
      {/* Left side */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        {/* Replace the image URL with your actual image source */}
        <img
          src="https://www.hubledigital.com/hubfs/Asset%2049@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-full h-auto md:w-[400px]"
        />
      </div>

      {/* Right side */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          YOU CAN
          <span className="text-[#fc4f5a]"> DO YOU</span>
        </h1>
        <h2
          style={{ fontFamily: 'proxima_nova, sans-serif' }}
          className="text-xl text-gray-600 mb-4"
        >
          <ul className="list-disc pl-4">
            <li>You have the flexibility to work how and where you want</li>
            <li>Work from home, an office, or both</li>
            <li>
              Work from anywhere in the world with the opportunity to relocate
              internationally to open positions
            </li>
            <li>Have time for life, learning, and thinking</li>
            <li>
              Radical flexibility — giving you flexibility on all aspects of
              work
            </li>
          </ul>
        </h2>
        <div className="mb-4">
          <a
            href="https://www.hubledigital.com/" // Replace with the actual URL you want to open
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-grey-500 border-2 text-gray-600 px-4 py-2 mr-2 rounded-3xl">
              More Info
            </button>
          </a>
          <a
            href="https://www.hubledigital.com/careers/working-at-huble-digital" // Replace with the actual URL you want to open
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#fc4f5a] text-white px-4 py-2 rounded-3xl">
              The Team
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default YouCanDoCard
