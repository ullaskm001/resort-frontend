import React from 'react'

const GallerySection = () => {
  return (
    <div className="py-16 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-center">Gallery</h2>

      {/* Responsive Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div>
          <img
            src="/images/room.jpg"
            alt="Room"
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        <div>
          <img
            src="/images/pool.jpg"
            alt="Pool"
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        <div>
          <img
            src="/images/hote.jpg"
            alt="Hotel"
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </div>
  )
}

export default GallerySection
