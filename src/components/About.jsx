import React from 'react'

const About = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-teal-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Welcome to NextGen Conveyor Solution Pvt. Ltd
        </h2>
        <p className="text-gray-700 text-center md:text-lg leading-relaxed mb-10">
          At NextGen Conveyor Solution Pvt. Ltd, we are pioneers in providing innovative conveyor systems that redefine efficiency and productivity for industries worldwide. With cutting-edge technology and a team of experienced professionals, we aim to transform the way businesses handle material transportation.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 text-center md:text-lg leading-relaxed mb-10">
          Our mission is to deliver exceptional conveyor solutions that meet the evolving demands of modern industries. We strive to enhance operational efficiency and contribute to our clients' success by offering reliable, customized, and high-performance systems.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Why Choose Us?
        </h3>
        <ul className="list-disc list-inside text-gray-700 md:text-lg leading-relaxed max-w-4xl mx-auto">
          <li>State-of-the-art conveyor technology designed to meet diverse industry needs.</li>
          <li>Dedicated team with decades of experience in engineering and manufacturing.</li>
          <li>Comprehensive services including design, installation, and maintenance.</li>
          <li>Commitment to sustainability and energy-efficient solutions.</li>
          <li>Strong focus on customer satisfaction and long-term partnerships.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-700 text-white text-center py-6">
        <p className="text-lg">Contact us to learn more about how we can help your business thrive.</p>
        <p>Email: <a href="mailto:contact@nextgenconveyor.com" className="underline">contact@nextgenconveyor.com</a></p>
        <p>Phone: +1 234 567 890</p>
        <p className="mt-4">© 2024 NextGen Conveyor Solution Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default About
