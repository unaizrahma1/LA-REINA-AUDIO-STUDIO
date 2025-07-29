import React from "react";
import teamImg from "../assets/react.svg"; // Replace with your actual image

export default function About() {
  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8"
      style={{ minHeight: "92vh", height: "auto" }}
    >
      {/* Main container in row */}
      <div className="flex flex-row flex-wrap items-start justify-center text-center">
        {/* Intro Section */}
        <section className="w-full md:w-3/5 max-w-3xl mx-auto ">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Financial Wellness in Your Hands
          </h1>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Artco is more than just a platform. We provide the tools and
            insights to help you achieve your creative goals with confidence and
            ease.
          </p>
        </section>

        {/* Image + Stats Section */}
        <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden my-5">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
            <img
              src={teamImg}
              alt="Our Team"
              className="object-cover w-full h-full max-h-[400px]"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 flex flex-col justify-center px-6 py-10 bg-gradient-to-br from-purple-50 to-indigo-50 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
              Trusted by Thousands,
              <br />
              Backed by Results
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              Artco is helping creators and architects take control of their
              future.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-orange-500">
                  $120M+
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Managed Projects
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-orange-500">
                  98%
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Customer Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-orange-500">
                  65%
                </div>
                <div className="text-gray-500 text-sm mt-1">Growth Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-orange-500">
                  60K+
                </div>
                <div className="text-gray-500 text-sm mt-1">Active Users</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm text-center ">
        © {new Date().getFullYear()} Artco. All rights reserved.
      </footer>
    </div>
  );
}
