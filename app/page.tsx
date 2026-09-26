
{"use client";

const featuredProperties = [
  {
    title: \"Luxury Mango Farm\",
    location: \"Shankarpally, Hyderabad\",
    price: \"₹92 Lakhs\",
    size: \"2 Acres\",
    score: \"98 HYDRA Score\",
  },
  {
    title: \"Gated Farm Plot Community\",
    location: \"Mokila, Hyderabad\",
    price: \"₹42 Lakhs\",
    size: \"605 Sq.Yds\",
    score: \"95 HYDRA Score\",
  },
  {
    title: \"Weekend Farmhouse Land\",
    location: \"Chevella, Hyderabad\",
    price: \"₹68 Lakhs\",
    size: \"1 Acre\",
    score: \"96 HYDRA Score\",
  },
];

const hydraScores = [
  [\"💧 Water\", \"96/100\"],
  [\"🌱 Soil\", \"92/100\"],
  [\"⚖️ Legal\", \"99/100\"],
  [\"📈 Investment\", \"94/100\"],
];

const locations = [
  \"Shankarpally\",
  \"Mokila\",
  \"Chevella\",
  \"Maheshwaram\",
  \"Sangareddy\",
  \"Vikarabad\",
];

const services = [
  \"Legal Verification\",
  \"Survey & Demarcation\",
  \"Borewell Services\",
  \"Farmhouse Construction\",
  \"Plantation Planning\",
  \"Fencing & Landscaping\",
];

export default function Home() {
  return (
    <main className=\"min-h-screen bg-white text-slate-900\">

      {/* NAVBAR */}
      <header className=\"sticky top-0 z-50 bg-white/90 backdrop-blur border-b\">
        <div className=\"max-w-7xl mx-auto flex items-center justify-between px-6 py-4\">
          <div className=\"text-2xl font-bold text-green-700\">
            The OpenPlot
          </div>

          <nav className=\"hidden md:flex gap-8 text-sm font-medium\">
            <a href=\"#marketplace\">Marketplace</a>
            <a href=\"#hydra\">HYDRA AI</a>
            <a href=\"#explorer\">Hyderabad Explorer</a>
            <a href=\"#services\">Services</a>
            <a href=\"#contact\">Contact</a>
          </nav>

          <button className=\"bg-green-700 text-white px-4 py-2 rounded-xl\">
            AI Advisor
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className=\"bg-gradient-to-br from-green-900 via-emerald-700 to-green-500 text-white\">
        <div className=\"max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center\">

          <div>
            <p className=\"uppercase tracking-widest text-green-200 mb-3\">
              AI Powered Client Advocacy Platform
            </p>

            <h1 className=\"text-5xl md:text-6xl font-extrabold leading-tight\">
              Buy Smarter. Sell Smarter. Invest in Farmland with Confidence.
            </h1>

            <p className=\"mt-6 text-lg text-green-100\">
              Discover verified Farm Lands, Farm Plots and Farmhouses across
              Hyderabad & Telangana with AI-powered legal, water, soil and
              investment intelligence.
            </p>

            <div className=\"flex flex-wrap gap-4 mt-8\">
              <button className=\"bg-white text-green-700 px-6 py-3 rounded-xl font-bold\">
                Explore Properties
              </button>

              <button className=\"border border-white px-6 py-3 rounded-xl\">
                Talk to HYDRA AI
              </button>
            </div>

            <div className=\"grid grid-cols-2 gap-6 mt-10\">
              <div>
                <p className=\"text-3xl font-bold\">500+</p>
                <p className=\"text-green-100\">Verified Farm Listings</p>
              </div>

              <div>
                <p className=\"text-3xl font-bold\">50+</p>
                <p className=\"text-green-100\">Growth Locations</p>
              </div>
            </div>
          </div>

          <div className=\"bg-white/10 rounded-3xl p-6 backdrop-blur\">
            <div className=\"bg-white rounded-2xl p-5 text-slate-900\">
              <p className=\"font-semibold mb-4\">
                Ask HYDRA AI
              </p>

              <div className=\"border rounded-xl p-4 text-gray-500\">
                Find HMDA Farm Plots under ₹50 Lakhs near ORR within 45 minutes of Gachibowli...
              </div>

              <button className=\"mt-5 w-full bg-green-700 text-white py-3 rounded-xl font-semibold\">
                Search with AI
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MARKETPLACE */}
      <section id=\"marketplace\" className=\"py-20 max-w-7xl mx-auto px-6\">
        <div className=\"text-center mb-14\">
          <h2 className=\"text-4xl font-bold\">
            Farm Property Marketplace
          </h2>

          <p className=\"text-gray-600 mt-4\">
            Curated properties verified through OpenPlot Client Advocacy.
          </p>
        </div>

        <div className=\"grid md:grid-cols-4 gap-6\">
          {[
            \"🌾 Farm Lands\",
            \"🌿 Farm Plots\",
            \"🏡 Farmhouses\",
            \"🥭 Orchards\",
          ].map((cat) => (
            <div
              key={cat}
              className=\"rounded-2xl border p-8 hover:shadow-xl transition text-center bg-green-50\"
            >
              <div className=\"text-4xl mb-4\">
                {cat.split(\" \")[0]}
              </div>

              <h3 className=\"font-bold text-lg\">
                {cat.substring(2)}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className=\"bg-slate-50 py-20\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"flex justify-between items-center mb-10\">
            <h2 className=\"text-4xl font-bold\">
              Featured Properties
            </h2>

            <button className=\"text-green-700 font-semibold\">
              View All →
            </button>
          </div>

          <div className=\"grid md:grid-cols-3 gap-8\">
            {featuredProperties.map((property) => (
              <div
                key={property.title}
                className=\"bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition\"
              >
                <div className=\"h-48 bg-gradient-to-br from-green-300 to-green-700\"></div>

                <div className=\"p-6\">
                  <span className=\"inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full\">
                    {property.score}
                  </span>

                  <h3 className=\"font-bold text-xl mt-4\">
                    {property.title}
                  </h3>

                  <p className=\"text-gray-600 mt-2\">
                    📍 {property.location}
                  </p>

                  <div className=\"flex justify-between mt-5\">
                    <span className=\"font-bold text-green-700\">
                      {property.price}
                    </span>

                    <span>{property.size}</span>
                  </div>

                  <button className=\"mt-6 w-full bg-green-700 text-white py-3 rounded-xl\">
                    View AI Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDRA */}
      <section id=\"hydra\" className=\"py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"text-center\">
            <p className=\"uppercase tracking-widest text-green-300\">
              HYDRA AI ENGINE
            </p>

            <h2 className=\"text-4xl font-bold mt-3\">
              AI Property Health & Investment Intelligence
            </h2>

            <p className=\"text-green-100 mt-4 max-w-2xl mx-auto\">
              Every farm property receives a comprehensive AI analysis before you buy.
            </p>
          </div>

          <div className=\"grid md:grid-cols-4 gap-6 mt-14\">
            {hydraScores.map(([title, score]) => (
              <div
                key={title}
                className=\"bg-white/10 rounded-2xl p-6 backdrop-blur text-center\"
              >
                <h3 className=\"text-lg\">
                  {title}
                </h3>

                <p className=\"text-3xl font-bold mt-4 text-green-300\">
                  {score}
                </p>
              </div>
            ))}
          </div>

          <div className=\"grid md:grid-cols-3 gap-6 mt-12\">
            {[
              \"Legal Verification\",
              \"Investment Growth Prediction\",
              \"Farmhouse Suitability\",
            ].map((item) => (
              <div
                key={item}
                className=\"border border-green-700 rounded-2xl p-6 text-center\"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OPENPLOT */}
      <section className=\"py-20 max-w-7xl mx-auto px-6\">
        <div className=\"text-center mb-14\">
          <h2 className=\"text-4xl font-bold\">
            Why OpenPlot?
          </h2>

          <p className=\"text-gray-600 mt-4\">
            We advocate for buyers and sellers—not brokers.
          </p>
        </div>

        <div className=\"grid md:grid-cols-2 gap-8\">
          {[
            \"AI Client Advocacy\",
            \"Legal Document Verification\",
            \"HYDRA AI Site Selection\",
            \"Verified Farm Communities\",
            \"Investment Intelligence\",
            \"End-to-End Farm Concierge\",
          ].map((feature) => (
            <div
              key={feature}
              className=\"rounded-2xl border p-6 flex items-center gap-4 hover:bg-green-50 transition\"
            >
              <div className=\"text-green-700 text-2xl\">✓</div>

              <p className=\"font-semibold\">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HYDERABAD EXPLORER */}
      <section id=\"explorer\" className=\"bg-green-50 py-20\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"text-center\">
            <h2 className=\"text-4xl font-bold\">
              Hyderabad Growth Corridor Explorer
            </h2>

            <p className=\"mt-4 text-gray-600\">
              Discover AI-scored locations around Hyderabad.
            </p>
          </div>

          <div className=\"grid md:grid-cols-3 gap-6 mt-12\">
            {locations.map((loc) => (
              <div
                key={loc}
                className=\"bg-white rounded-2xl p-6 shadow text-center\"
              >
                <h3 className=\"font-bold text-xl\">
                  {loc}
                </h3>

                <p className=\"text-green-700 mt-3\">
                  AI Growth Score: 92+
                </p>

                <button className=\"mt-5 border border-green-700 text-green-700 px-4 py-2 rounded-xl\">
                  Explore Locality
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id=\"services\" className=\"py-20 max-w-7xl mx-auto px-6\">
        <div className=\"text-center\">
          <h2 className=\"text-4xl font-bold\">
            Farm Concierge Services
          </h2>

          <p className=\"mt-4 text-gray-600\">
            Verified professionals for every step of your farm journey.
          </p>
        </div>

        <div className=\"grid md:grid-cols-3 gap-6 mt-12\">
          {services.map((service) => (
            <div
              key={service}
              className=\"border rounded-2xl p-6 hover:bg-green-50 transition\"
            >
              <div className=\"text-3xl mb-4\">🌿</div>

              <h3 className=\"font-semibold text-lg\">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className=\"bg-green-700 text-white py-20 text-center\">
        <div className=\"max-w-3xl mx-auto px-6\">
          <h2 className=\"text-4xl font-bold\">
            Ready to Find Your Dream Farm?
          </h2>

          <p className=\"mt-5 text-green-100\">
            Get AI-powered property advice, legal verification and Hyderabad investment insights in one place.
          </p>

          <div className=\"flex flex-wrap justify-center gap-4 mt-8\">
            <button className=\"bg-white text-green-700 px-6 py-3 rounded-xl font-bold\">
              Explore Marketplace
            </button>

            <button className=\"border border-white px-6 py-3 rounded-xl\">
              Talk to HYDRA AI
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id=\"contact\" className=\"py-20 bg-slate-100\">
        <div className=\"max-w-4xl mx-auto px-6\">
          <div className=\"text-center mb-10\">
            <h2 className=\"text-4xl font-bold\">
              Book a Client Advocacy Consultation
            </h2>

            <p className=\"mt-3 text-gray-600\">
              Our team will help you verify and evaluate your farm property before you buy or sell.
            </p>
          </div>

          <div className=\"grid md:grid-cols-2 gap-6\">
            <input className=\"rounded-xl border p-4\" placeholder=\"Full Name\" />
            <input className=\"rounded-xl border p-4\" placeholder=\"Phone Number\" />
            <input className=\"rounded-xl border p-4\" placeholder=\"Email Address\" />
            <input className=\"rounded-xl border p-4\" placeholder=\"Preferred Location\" />
          </div>

          <textarea
            className=\"w-full rounded-xl border p-4 mt-6 h-32\"
            placeholder=\"Tell us what you're looking for...\"
          />

          <button className=\"w-full mt-6 bg-green-700 text-white py-4 rounded-xl font-bold\">
            Request Consultation
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"bg-slate-950 text-slate-400 py-12\">
        <div className=\"max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8\">
          <div>
            <h3 className=\"text-white text-2xl font-bold\">
              The OpenPlot
            </h3>

            <p className=\"mt-3\">
              AI-Powered Farm Land, Farm Plot & Farmhouse Client Advocacy Platform.
            </p>
          </div>

          <div>
            <h4 className=\"text-white font-semibold mb-3\">
              Marketplace
            </h4>

            <ul className=\"space-y-2\">
              <li>Farm Lands</li>
              <li>Farm Plots</li>
              <li>Farmhouses</li>
              <li>Hyderabad Explorer</li>
            </ul>
          </div>

          <div>
            <h4 className=\"text-white font-semibold mb-3\">
              Contact
            </h4>

            <p>Hyderabad, Telangana</p>
            <p>AI Client Advocacy</p>
            <p>Legal Verification Services</p>
          </div>
        </div>

        <div className=\"border-t border-slate-800 mt-10 pt-6 text-center text-sm\">
          © 2026 The OpenPlot Enterprise. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}
"}