'use client';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { useEstimate } from '../contexts/EstimateContext';


export function QuoteRequestOverlay() {
  const { openEstimate, setOpenEstimate } = useEstimate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyType: 'Single-Family Home',
    surface: 'Roof',
    roofAge: '5 to 10 years',
    financing: 'Yes, please',
    referralSource: 'Google Search',
    address: '',
    message: '',
    transactionalConsent: false,
    marketingConsent: false,
  });

  if (!openEstimate) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
  const templateParams = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    propertyType: formData.propertyType,
    surface: formData.surface,
    roofAge: formData.roofAge,
    financing: formData.financing,
    referralSource: formData.referralSource,
    address: formData.address,
    message: formData.message,
    transactionalConsent: formData.transactionalConsent ? "Yes" : "No",
    marketingConsent: formData.marketingConsent ? "Yes" : "No",
  };

  try {
    const response = await emailjs.send(
      process.env.EMAIL_JS_SERVICE_ID||"",// service_id
      process.env.EMAIL_JS_TEMPLATE_ID||"",//template_id
      templateParams,
      process.env.EMAIL_JS_PUBLIC_KEY//public_key
    );

    console.log("Email successfully sent!", response.status, response.text);
    alert("Your request has been submitted successfully!");

    setOpenEstimate(false);
  } catch (error) {
    console.error("Email sending failed:", error);
    alert("There was an error submitting your request. Please try again.");
  }
};


  return (
    <div onClick={() => setOpenEstimate(false)} className="fixed inset-0 z-50 top-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-scroll h-full">
      <div
  onClick={(e) => e.stopPropagation()}
  className="bg-white  p-6 my-12 w-full max-w-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
>

        {/* Close button */}
        <button
          onClick={() => setOpenEstimate(false)}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors z-10"
        >
          ✕
        </button>

        {/* Form content */}
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-3">
            GoNano Pflugerville, Texas. Quote Request
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
            Help us get started by filling in a few details—so we can provide you with an accurate, no-obligation estimate for your property.
          </p>

          <div className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Property details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Property *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Single-Family Home</option>
                  <option>Multi-Family Home</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What surface(s) do you want treated? *
                </label>
                <select
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Roof</option>
                  <option>Driveway</option>
                  <option>Deck</option>
                  <option>Siding</option>
                </select>
              </div>
            </div>

            {/* Additional details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What is the age of your roof?
                </label>
                <select
                  name="roofAge"
                  value={formData.roofAge}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>5 to 10 years</option>
                  <option>Less than 5 years</option>
                  <option>10 to 15 years</option>
                  <option>More than 15 years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Would you like to explore financing options?
                </label>
                <select
                  name="financing"
                  value={formData.financing}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Yes, please</option>
                  <option>No, thanks</option>
                  <option>Maybe later</option>
                </select>
              </div>
            </div>

            {/* Referral source */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Google Search</option>
                <option>Social Media</option>
                <option>Friend/Family</option>
                <option>Advertisement</option>
                <option>Other</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Search address"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Optional Message"
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Consent checkboxes */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="transactionalConsent"
                  checked={formData.transactionalConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-sm text-gray-600">
                  By checking this box, I consent to receive transactional messages from <strong>GoNano Pflugerville, Texas.</strong>, related to my account, appointment reminders, or services I have requested. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-sm text-gray-600">
                  By checking this box, I consent to receive marketing and promotional messages from <strong>GoNano Pflugerville, Texas.</strong>, including special offers, discounts, and new product updates. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </span>
              </label>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors text-lg"
            >
              SUBMIT QUOTE REQUEST
            </button>

            {/* Footer links */}
            <div className="text-center text-sm text-gray-500">
              <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
              {' | '}
              <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}