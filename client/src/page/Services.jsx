import React from "react";

export default function Services() {
  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8 flex items-center justify-center"
      style={{ minHeight: "92vh", height: "auto" }}
    >
      <section className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col items-center p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2 mt-2">
          Our Services
        </h1>
        <p className="text-gray-600 text-base mb-6 text-center">
          We offer a range of creative and architectural services to help you
          bring your vision to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-2">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-1">Design Consulting</h2>
            <p className="text-gray-500 text-center">
              Expert advice for your next big project, from concept to
              completion.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-2">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-1">Project Management</h2>
            <p className="text-gray-500 text-center">
              Seamless coordination and delivery for all your creative needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-2">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 6v10"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-1">3D Visualization</h2>
            <p className="text-gray-500 text-center">
              Bring your ideas to life with stunning 3D renders and
              walkthroughs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-2">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 17l4 4 4-4m-4-5V3"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-1">Creative Workshops</h2>
            <p className="text-gray-500 text-center">
              Learn and grow with our hands-on workshops and training sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
