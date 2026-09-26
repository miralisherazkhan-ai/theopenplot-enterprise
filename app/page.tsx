"use client";

import { useState } from "react";

const properties = [
  {
    title: "Premium Farm Plot - Shadnagar",
    location: "Shadnagar, Telangana",
    acres: "2 Acres",
    price: "₹38 Lakhs",
    type: "Farm Plot",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
    hydra: "Verified",
  },
  {
    title: "Weekend Farmhouse",
    location: "Vikarabad",
    acres: "1 Acre",
    price: "₹62 Lakhs",
    type: "Farmhouse",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900",
    hydra: "Verified",
  },
  {
    title: "Mango Farm Land",
    location: "Sangareddy",
    acres: "5 Acres",
    price: "₹74 Lakhs",
    type: "Agricultural Land",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",
    hydra: "Verified",
  },
  {
    title: "Organic Farm Estate",
    location: "Yadagirigutta",
    acres: "10 Acres",
    price: "₹1.42 Cr",
    type: "Farm Land",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=900",
    hydra: "Pending Review",
  },
];

const hotspots = [
  "Hyderabad ORR",
  "Shadnagar",
  "Srisailam Highway",
  "Sangareddy",
  "Vikarabad",
  "Yadagirigutta",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("₹50 Lakhs");
  const [language, setLanguage] = useState("English");

  const filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-3xl font-black text-green-700">OpenPlot</h1>
            <p className="text-xs text-gray-500">
              AI Powered Farm Lands • Farm Plots • Farmhouses
            </p>
          </div>

          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <a href="#marketplace">Marketplace</a>
            <a href="#hydra">HYDRA</a>
            <a href="#advocacy">Client Advocacy</a>
            <a href="#calculator">Investment</a>
            <a href="#contact">Contact</a>
          </nav>

          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>తెలుగు</option>
            <option>हिन्दी</option>
            <option>मराठी</option>
            <option>বাংলা</option>
            <option>தமிழ்</option>
          </select>
        </div>
      </header>

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-800 via-emerald-700 to-lime-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              India's AI-Powered Agricultural Real Estate Platform
            </span>

            <h2 className="text-5xl font-black mt-6 leading-tight">
              Buy Farm Lands.
              <br />
              Sell Farm Plots.
              <br />
              Invest in Farmhouses.
            </h2>

            <p className="mt-6 text-lg text-green-100">
              AI-powered property discovery with HYDRA Safe Listings and Client
              Advocacy for secure agricultural real estate investments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-green-800 px-6 py-3 rounded-xl font-bold">
                Explore Marketplace
              </button>

              <button className="border border-white px-6 py-3 rounded-xl">
                Book Site Visit
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
            className="rounded-3xl shadow-2xl h-[420px] object-cover w-full"
          />
        </div>
      </section>

      {/* AI SEARCH */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-green-700">
              AI Property Advisor
            </h2>

            <p className="text-gray-600 mt-3">
              Search farm properties naturally. Example:
              “5 acre farmland near Hyderabad below ₹40 Lakhs”.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-4 gap-4">

            <input
              placeholder="Village / Highway / Crop / Survey No."
              className="border rounded-xl p-3 col-span-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select
              className="border rounded-xl p-3"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option>₹20 Lakhs</option>
              <option>₹40 Lakhs</option>
              <option>₹50 Lakhs</option>
              <option>₹75 Lakhs</option>
              <option>₹1 Crore+</option>
            </select>

            <button className="bg-green-700 text-white rounded-xl font-semibold">
              Ask AI
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Farm Plot near Hyderabad",
              "Farmhouse below ₹60L",
              "Mango Farm",
              "Weekend Farm",
              "Organic Farming Land",
              "DTCP Farm Plots",
            ].map((item) => (
              <span
                key={item}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}

      <section id="marketplace" className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-green-700">
              Marketplace
            </h2>

            <button className="border px-5 py-2 rounded-xl">
              View All Listings
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {filtered.map((property) => (
              <div
                key={property.title}
                className="rounded-3xl overflow-hidden border shadow hover:shadow-xl duration-300"
              >
                <img
                  src={property.image}
                  className="h-48 object-cover w-full"
                />

                <div className="p-5">

                  <div className="flex justify-between items-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {property.type}
                    </span>

                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      HYDRA {property.hydra}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg mt-4">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {property.location}
                  </p>

                  <div className="flex justify-between mt-4 text-sm">
                    <span>{property.acres}</span>
                    <span className="font-bold text-green-700">
                      {property.price}
                    </span>
                  </div>

                  <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl">
                    View Property
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HYDRA */}

      <section id="hydra" className="bg-green-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              HYDRA Safe Listing™
            </h2>

            <p className="mt-6 text-green-100 text-lg">
              Every OpenPlot listing follows a verification workflow before it is
              promoted as a trusted investment opportunity.
            </p>

            <div className="space-y-4 mt-8">

              {[
                "Ownership Verification",
                "Survey Number Validation",
                "Land Record Checklist",
                "Encumbrance Placeholder",
                "AI Fraud Risk Detection",
              ].map((step) => (
                <div
                  key={step}
                  className="bg-white/10 rounded-xl p-4 flex justify-between items-center"
                >
                  <span>{step}</span>
                  <span>✔</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-8">

            <h3 className="font-bold text-2xl text-green-700">
              HYDRA Trust Score
            </h3>

            <div className="mt-8 h-5 rounded-full bg-gray-200 overflow-hidden">
              <div className="bg-green-600 h-full w-[92%]" />
            </div>

            <h1 className="text-6xl font-black text-green-700 mt-6">92%</h1>

            <p className="mt-4 text-gray-600">
              AI indicates a low-risk listing based on available documents and
              verification checkpoints.
            </p>

            <button className="mt-8 bg-green-700 text-white w-full py-3 rounded-xl">
              View Verification Report
            </button>
          </div>

        </div>

      </section>
            {/* CLIENT ADVOCACY */}

      <section id="advocacy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700">
              Client Advocacy Services
            </h2>

            <p className="mt-4 text-gray-600">
              OpenPlot works for buyers and sellers with legal guidance,
              verification, and investment advice—not brokerage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Legal Verification",
                desc: "Review title documents, survey records and ownership details before purchase.",
              },
              {
                title: "Site Visit Assistance",
                desc: "Schedule verified farm visits with OpenPlot experts.",
              },
              {
                title: "Buyer Protection",
                desc: "Independent guidance during negotiation and registration.",
              },
              {
                title: "Investment Advisory",
                desc: "AI insights on appreciation, water and development potential.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">🛡️</div>

                <h3 className="font-bold text-lg text-green-700">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT CALCULATOR */}

      <section id="calculator" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-green-700">
              Farm Investment Calculator
            </h2>

            <p className="text-gray-600 mt-3">
              Estimate appreciation and investment potential.
            </p>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold">Budget</label>
                <input
                  className="w-full mt-2 border rounded-xl p-3"
                  defaultValue="50,00,000"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Land Size</label>
                <input
                  className="w-full mt-2 border rounded-xl p-3"
                  defaultValue="2 Acres"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Expected Appreciation
                </label>

                <input
                  className="w-full mt-2 border rounded-xl p-3"
                  defaultValue="12% Annual"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-2xl text-green-700">
                Estimated Investment Report
              </h3>

              <div className="space-y-4 mt-6">
                <div className="flex justify-between">
                  <span>Purchase Value</span>
                  <span className="font-semibold">₹50,00,000</span>
                </div>

                <div className="flex justify-between">
                  <span>5-Year Estimated Value</span>
                  <span className="font-semibold text-green-700">
                    ₹88,11,700
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Potential Profit</span>
                  <span className="font-semibold text-green-700">
                    ₹38,11,700
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>HYDRA Investment Rating</span>
                  <span className="font-semibold text-blue-700">
                    Excellent
                  </span>
                </div>
              </div>

              <button className="mt-8 w-full bg-green-700 text-white py-3 rounded-xl">
                Download AI Investment Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOTSPOTS */}

      <section className="bg-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Telangana Growth Corridors
            </h2>

            <p className="text-green-100 mt-4">
              High-potential farm investment locations around Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hotspots.map((place) => (
              <div
                key={place}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
              >
                <h3 className="font-bold text-xl">{place}</h3>

                <p className="mt-3 text-green-100 text-sm">
                  HYDRA Growth Score: 90+
                </p>

                <button className="mt-6 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
                  Explore Area
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITE VISIT */}

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700">
              Book a Farm Site Visit
            </h2>

            <p className="mt-4 text-gray-600">
              Visit verified farm lands, plots and farmhouses with OpenPlot.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                placeholder="Full Name"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Phone Number"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Email Address"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Preferred Location"
                className="border rounded-xl p-3"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Tell us what type of property you're looking for..."
              className="border rounded-xl p-3 w-full"
            />

            <button className="w-full bg-green-700 text-white py-4 rounded-xl font-semibold text-lg">
              Request Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-2xl font-black">OpenPlot</h3>

            <p className="mt-4 text-sm">
              AI-powered client advocacy platform for Farm Lands, Farm Plots,
              Farmhouses and agricultural investments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Marketplace</h4>

            <ul className="space-y-2 text-sm">
              <li>Farm Lands</li>
              <li>Farm Plots</li>
              <li>Farmhouses</li>
              <li>Weekend Farms</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>

            <ul className="space-y-2 text-sm">
              <li>HYDRA Verification</li>
              <li>Legal Consultation</li>
              <li>Buyer Advocacy</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-sm">
              <li>📍 Hyderabad, Telangana</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉ hello@theopenplot.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm">
          © 2026 The OpenPlot Enterprise — AI Powered Farm Land • Farm Plot •
          Farmhouse Client Advocacy Platform.
        </div>
      </footer>
    </main>
  );
}