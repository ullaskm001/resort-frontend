import React from 'react'

const ServicesSection = () => {
  return (
    <div className="py-16 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-center">Our Services</h2>

      {/* Responsive Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

        {/* Card 1 */}
        <div className="bg-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
          <img src="/images/accomodation.png" alt="" className="h-24 w-24 mx-auto"/>
          <h3 className="text-xl font-bold mt-5">Accommodation</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
          <img src="/images/hiking.png" alt="" className="h-24 w-24 mx-auto"/>
          <h3 className="text-xl font-bold mt-5">Adventure Activities</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
          <img src="/images/wellnessandspa.png" alt="" className="h-24 w-24 mx-auto"/>
          <h3 className="text-xl font-bold mt-5">Wellness & Spa</h3>
        </div>

      </div>
    </div>
  )
}

export default ServicesSection
