
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Pages ---
const Home: React.FC = () => (
  <div className="page-transition">
    <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/1600/900?business" alt="Hero" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-white"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Accelerate Your <span className="text-blue-600">Business Growth</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          We provide cutting-edge solutions for modern enterprises. From digital transformation to strategic consulting, we are your partner in success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Explore Services
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nexus?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Experience the difference of working with industry leaders committed to your long-term excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Global Reach", text: "We operate in over 40 countries, providing localized expertise with a global perspective.", icon: "🌍" },
            { title: "Expert Team", text: "Our consultants have decades of combined experience across diverse industry verticals.", icon: "👥" },
            { title: "Data Driven", text: "Every strategy we build is backed by rigorous analysis and real-time market insights.", icon: "📊" }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const About: React.FC = () => (
  <div className="page-transition py-20 px-4 container mx-auto">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Founded in 2010, Nexus Business Solutions started with a simple vision: to bridge the gap between complex technology and meaningful business outcomes.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Today, we are a leading consultancy firm helping Fortune 500 companies and agile startups alike navigate the complexities of the modern marketplace. Our approach combines traditional wisdom with disruptive innovation.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/600/400?office" alt="Our Team" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
      <div className="bg-blue-600 text-white p-10 rounded-2xl mb-16">
        <p className="text-2xl font-light italic leading-relaxed">
          "To empower businesses with the tools, strategies, and insights they need to build a sustainable, profitable, and impactful future in a rapidly evolving world."
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Meet the Leadership</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {[
          { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://picsum.photos/200/200?person1" },
          { name: "Marcus Thorne", role: "CTO", img: "https://picsum.photos/200/200?person2" },
          { name: "Elena Rodriguez", role: "Lead Strategist", img: "https://picsum.photos/200/200?person3" }
        ].map((person, i) => (
          <div key={i} className="text-center group">
            <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto ring-4 ring-blue-50">
              <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-lg font-bold">{person.name}</h4>
            <p className="text-slate-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services: React.FC = () => (
  <div className="page-transition py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-slate-600">Comprehensive solutions tailored to your unique business challenges. We don't believe in one-size-fits-all.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Strategic Planning", desc: "Long-term roadmaps to guide your business toward sustainable competitive advantages.", icon: "🎯" },
          { title: "Digital Transformation", desc: "Modernizing your infrastructure and operations for the cloud-native, AI-driven era.", icon: "💻" },
          { title: "Financial Advisory", desc: "Expert guidance on capital allocation, risk management, and fiscal health.", icon: "💰" },
          { title: "Marketing & Growth", desc: "Performance marketing and brand strategies that convert curiosity into loyal customers.", icon: "🚀" },
          { title: "Talent Management", desc: "Building resilient teams and positive cultures that attract world-class talent.", icon: "🤝" },
          { title: "Supply Chain Optimization", desc: "Lean methodologies to maximize efficiency and resilience in your operations.", icon: "⛓️" }
        ].map((service, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            <Link to="/contact" className="mt-6 inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
              Learn more <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Blog: React.FC = () => (
  <div className="page-transition py-20 px-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Insights & News</h1>
          <p className="text-slate-500">Stay updated with the latest trends in business and technology.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { title: "The Role of AI in 2024 Strategy", date: "June 12, 2024", cat: "Technology", img: "https://picsum.photos/400/250?ai" },
          { title: "Navigating Global Supply Chains", date: "June 08, 2024", cat: "Operations", img: "https://picsum.photos/400/250?ship" },
          { title: "Building a Remote-First Culture", date: "May 29, 2024", cat: "Human Resources", img: "https://picsum.photos/400/250?remote" },
          { title: "Financial Forecast: Q3 Outlook", date: "May 15, 2024", cat: "Finance", img: "https://picsum.photos/400/250?chart" },
          { title: "Customer Experience Redefined", date: "May 02, 2024", cat: "Marketing", img: "https://picsum.photos/400/250?people" },
          { title: "Sustainable Business Models", date: "April 20, 2024", cat: "Sustainability", img: "https://picsum.photos/400/250?green" }
        ].map((post, i) => (
          <article key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded">{post.cat}</span>
                <span className="text-slate-400 text-sm">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer transition-colors">{post.title}</h3>
              <p className="text-slate-600 text-sm line-clamp-2">
                Discover how modern industry leaders are adapting to the changing landscape of global business in this comprehensive deep-dive.
              </p>
              <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline">Read Article</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-transition py-20 px-4 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">Let's Talk</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Ready to take your business to the next level? Our experts are ready to listen and help you find the right path forward.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Visit Us", details: "123 Business Way, Financial District, New York, NY 10004", icon: "📍" },
                { title: "Call Us", details: "+1 (555) 012-3456", icon: "📞" },
                { title: "Email Us", details: "hello@nexus-solutions.com", icon: "✉️" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-3xl p-3 bg-blue-50 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Strategic Planning</option>
                    <option>Digital Transformation</option>
                    <option>Financial Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Layout & Navigation ---
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">N</div>
            <span>NEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-4 px-4 shadow-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-bold py-2 ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold mt-2">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-2xl font-black text-white flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">N</div>
                <span>NEXUS</span>
              </Link>
              <p className="text-sm leading-relaxed">
                Elevating businesses through strategic innovation and world-class consulting services since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe for the latest business insights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-blue-500" />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            © {new Date().getFullYear()} Nexus Business Solutions Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
