import React from "react";
import servicesData from "./servicesData.json";

function ServiceCard({ image, name, description, price }) {
  return (
    <li className="bg-white py-6 px-4 rounded-lg shadow text-center">
      <img 
        src={image} 
     
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      <p className="text-teal-700 font-semibold">Price: ${price}</p>
    </li>
  );
}

function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
     

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What We Offer
        </h2>
        <p className="text-gray-700 text-center md:text-lg leading-relaxed mb-12">
          At NextGen Conveyor Solution, we provide cutting-edge services tailored to enhance your industrial operations. Our solutions ensure efficiency, reliability, and innovation in material handling.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              name={service.name}
              description={service.description}
              price={service.price}
            />
          ))}
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-700 text-white text-center py-6">
        <p>© 2024 NextGen Conveyor Solution Pvt. Ltd. All rights reserved.</p>
        <p>Contact us at: <a href="mailto:contact@nextgenconveyors.com" className="underline">contact@nextgenconveyors.com</a></p>
      </footer>
    </div>
  );
}

export default ServicesPage;
