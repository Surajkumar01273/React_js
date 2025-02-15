import React from "react";

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg mt-[200px] md:mt-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            rows="4" 
            placeholder="Your Message" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
