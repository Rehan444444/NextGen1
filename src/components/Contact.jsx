import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd usually send the data to a server
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-teal-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg px-4 md:px-0">
          We'd love to hear from you. Reach out to discuss your needs or ask questions.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Get in Touch</h2>

        {formSubmitted ? (
          <div className="bg-teal-100 text-teal-700 p-4 rounded-md mb-6 text-center">
            <p>Thank you for your message! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-700 text-white text-center py-6">
        <p>© 2024 NextGen Conveyor Solution Pvt. Ltd. All rights reserved.</p>
        <p>
          Contact us at:{" "}
          <a href="mailto:contact@nextgenconveyors.com" className="underline">
            contact@nextgenconveyors.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default ContactPage;
