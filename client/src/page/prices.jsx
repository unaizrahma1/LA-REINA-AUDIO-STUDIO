import React from "react";

export default function Prices() {
  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8 flex items-center justify-center"
      style={{ minHeight: "92vh", height: "auto" }}
    >
      <section className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col items-center p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2 mt-2">
          Pricing Plans
        </h1>
        <p className="text-gray-600 text-base mb-8 text-center max-w-xl">
          Choose the plan that fits your needs. Transparent pricing, no hidden
          fees, and flexible options for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Basic Plan */}
          <div className="flex flex-col items-center border border-purple-100 rounded-2xl p-6 bg-purple-50 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">
              Basic
            </h2>
            <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
            <ul className="text-gray-500 text-sm mb-4 space-y-1">
              <li>✔️ Access to free resources</li>
              <li>✔️ Community support</li>
              <li>✔️ Limited project slots</li>
            </ul>
            <button className="mt-auto bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
          {/* Pro Plan */}
          <div className="flex flex-col items-center border-2 border-purple-600 rounded-2xl p-6 bg-white shadow-lg scale-105 z-10">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Pro</h2>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              $19<span className="text-base font-normal">/mo</span>
            </div>
            <ul className="text-gray-500 text-sm mb-4 space-y-1">
              <li>✔️ Everything in Basic</li>
              <li>✔️ Unlimited projects</li>
              <li>✔️ Priority email support</li>
              <li>✔️ Advanced analytics</li>
            </ul>
            <button className="mt-auto bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Start Pro
            </button>
          </div>
          {/* Enterprise Plan */}
          <div className="flex flex-col items-center border border-purple-100 rounded-2xl p-6 bg-purple-50 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">
              Enterprise
            </h2>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              Custom
            </div>
            <ul className="text-gray-500 text-sm mb-4 space-y-1">
              <li>✔️ Everything in Pro</li>
              <li>✔️ Dedicated manager</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ 24/7 premium support</li>
            </ul>
            <button className="mt-auto bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
