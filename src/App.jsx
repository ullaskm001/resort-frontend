// import React from 'react'
// import HeroSection from './components/HeroSection'
// import ServicesSection from './components/ServicesSection'
// import GallerySection from './components/GallerySection'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <ServicesSection />
//       <GallerySection/>
//       <Footer/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminBookings from "./components/AdminBookings"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServicesSection />
              <GallerySection />
              <Footer />
            </>
          }
        />

        {/* Admin Bookings Page */}
        <Route path="/admin/bookings" element={<AdminBookings />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
