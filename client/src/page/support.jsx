import React, { useState } from "react";

export default function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8 flex items-center justify-center"
      style={{ minHeight: "92vh", height: "auto" }}
    >
      <section className="w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col items-center p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold text-purple-700 mb-1 mt-1">
          Support
        </h1>
        <p className="text-gray-600 text-sm mb-4 text-center max-w-md">
          Need help? Reach out to our support team and we'll get back to you as
          soon as possible.
        </p>
        {submitted ? (
          <div className="text-green-600 text-lg font-semibold text-center py-8">
            Thank you for contacting us!
            <br />
            We'll respond to your inquiry soon.
          </div>
        ) : (
          <form className="w-full space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 text-sm rounded-md border border-purple-200 focus:border-purple-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 text-sm rounded-md border border-purple-200 focus:border-purple-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={3}
              className="w-full px-3 py-2 text-sm rounded-md border border-purple-200 focus:border-purple-500 focus:outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-gray-400 text-sm text-center">
          Or email us at{" "}
          <a
            href="mailto:support@artco.com"
            className="text-purple-600 underline"
          >
            support@artco.com
          </a>
        </div>
      </section>
    </div>
  );
}
