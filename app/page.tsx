"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The OpenPlot
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Enterprise GIS Platform for Land Records, Urban Planning, and
            Property Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100">
              Book Demo
            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700">
              Explore Platform
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Built for Governments & Enterprises
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The OpenPlot digitizes land records, maps infrastructure, manages
            property ownership, and enables smart city decision-making from a
            single GIS dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Land Records",
              desc: "Digitize survey maps, ownership records, mutation history, and cadastral data.",
            },
            {
              title: "GIS Mapping",
              desc: "Interactive parcel maps, zoning layers, satellite imagery, and analytics.",
            },
            {
              title: "Smart Planning",
              desc: "Planning permissions, infrastructure tracking, and urban development insights.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Core Platform Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Cadastral Parcel Management",
              "Property Ownership Registry",
              "Mutation & Transfer Tracking",
              "Village & City GIS Maps",
              "Satellite & Survey Overlay",
              "Road & Infrastructure Layers",
              "Building Permission Workflow",
              "Citizen Property Search Portal",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-xl p-5 shadow border flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Why Choose The OpenPlot?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "100% Web-based GIS Platform",
            "Role-Based User Management",
            "Secure Land Record Access",
            "Real-Time Parcel Search",
            "Cloud Hosted or On-Premise",
            "API Integration Ready",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-6 bg-blue-50 font-semibold text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Modernize Land Management?
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-8">
          Schedule a demonstration and discover how The OpenPlot transforms land
          administration, urban planning, and property intelligence.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100">
          Request Enterprise Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <h3 className="text-white text-xl font-bold mb-2">The OpenPlot</h3>
        <p>Enterprise GIS • Land Records • Smart Cities</p>
        <p className="mt-4 text-sm">© 2026 The OpenPlot. All rights reserved.</p>
      </footer>
    </main>
  );
}"} 