"use client";

import Image from "next/image";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Sales Enquiry",
    comments: "",
    retainDetails: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-32">
          {/* First Column - Title */}
          <div className="lg:pr-8 lg:pl-8 lg:m-8">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-black">
              Get in
              <br />
              <span className="font-bold text-6xl lg:text-7xl text-black">
                Touch
              </span>
            </h2>
          </div>

          {/* Second Column - Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-black mb-2">
                Say Hello!
              </h3>
              <p className="text-sm text-gray-600">
                Please leave your details below and
                <br />
                our team will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="response@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 000 000 0000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                />
              </div>

              {/* Purpose Dropdown */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Purpose (Optional)
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                >
                  <option value="Sales Enquiry">Sales Enquiry</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              {/* Comments Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Comments
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Type in your requirement or enquiry..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm resize-vertical"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-3 py-2">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="retainDetails"
                    checked={formData.retainDetails}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-400"
                  />
                </div>
                <label className="text-xs text-gray-600">
                  Retain my details for any
                  <br />
                  future exchanges
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors mt-6"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Third Column - Company Information */}
          <div className="space-y-6">
            {/* Company Logo */}
            <div className="mb-8">
              <div className="inline-block">
                <Image
                  src="/images/Group 1171275777.svg"
                  alt="Minimum Design Studio"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-6 text-sm">
              {/* Registration */}
              <div>
                <p className="text-gray-700 mb-1 font-light">
                  A registered unit of
                </p>
                <p className="font-black text-black">
                  NANDY DESIGN SERVICES PVT LTD.
                </p>
              </div>

              {/* Registered Office */}
              <div>
                <p className="text-gray-700 mb-1 font-light">
                  Registered Office:
                </p>
                <p className="text-gray-700 font-light">
                  SENJUTI, 535 Hariharpur, Hridaypur
                  <br />
                  Kolkata, 700127, West Bengal, India.
                </p>
              </div>

              {/* GSTIN */}
              <div>
                <p className="text-gray-700 mb-1 font-light">GSTIN</p>
                <p className="text-gray-700 font-light">19AAHCN0231C1ZY</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-gray-700 mb-1 font-light">Email</p>
                <p className="text-gray-700 font-light">
                  hello@minimumdesignstudio.com
                </p>
              </div>

              {/* Website */}
              <div>
                <p className="text-gray-700 mb-1 font-light">Website</p>
                <p className="text-gray-700 font-light">
                  www.minimumdesignstudio.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PS Section */}
      </div>
    </section>
  );
};

export default GetInTouch;
