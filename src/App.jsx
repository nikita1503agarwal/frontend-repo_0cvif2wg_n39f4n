import { useState } from "react";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white text-gray-700">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <span className="material-icons-outlined text-[var(--color-secondary)] text-3xl">plumbing</span>
            Precision<span className="text-[var(--color-primary)]">Plumbing</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Home</a>
            <a href="#about" className="hover:text-[var(--color-secondary)] transition-colors">About</a>
            <a href="#services" className="hover:text-[var(--color-secondary)] transition-colors">Services</a>
            <a href="#pricing" className="hover:text-[var(--color-secondary)] transition-colors">Pages</a>
            <a href="#blog" className="hover:text-[var(--color-secondary)] transition-colors">Blog</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-[var(--color-secondary)]">phone</span>
              <span>061 587 7976</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-[var(--color-secondary)]">email</span>
              <span>contact@precision.co.za</span>
            </div>
            <a href="#contact" className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">Book Appointment</a>
          </div>

          <button className="lg:hidden p-2" aria-label="Open Menu" onClick={() => setMobileOpen((v) => !v)}>
            <span className="material-icons-outlined text-3xl">menu</span>
          </button>
        </nav>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#about" className="block" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#services" className="block" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#pricing" className="block" onClick={() => setMobileOpen(false)}>Pages</a>
              <a href="#testimonials" className="block" onClick={() => setMobileOpen(false)}>Blog</a>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">phone</span>061 587 7976</span>
                <a href="#contact" className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-md font-semibold" onClick={() => setMobileOpen(false)}>Book</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="hero-bg bg-cover bg-center py-24 md:py-40">
          <div className="container mx-auto px-4 text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl text-white mb-4">We're The <span className="text-[var(--color-secondary)]">Neatest</span> On-Site Plumbing Service</h1>
              <p className="text-gray-200 text-lg mb-8">We provide professional maintenance, renovations, and installations for residential and commercial properties. 24/7 availability with fast response times.</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#contact" className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">Book Now</a>
                <span className="text-white text-xl font-bold">Call Us: 061 587 7976</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick service cards */}
        <section className="py-16 bg-white -mt-16 relative z-10" id="services">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">build</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Residential Plumbing</h3>
                <p>Complete plumbing solutions for your home, from leaks to installations.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">apartment</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Commercial Plumbing</h3>
                <p>Reliable and efficient plumbing services for your business needs.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">schedule</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Emergency Services</h3>
                <p>24/7 availability for all your urgent plumbing problems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[var(--color-light-gray)]" id="about">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
                alt="Two professional plumbers"
                className="rounded-lg w-full h-auto object-cover"
              />
              <div>
                <span className="inline-block bg-[var(--color-secondary)] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">ABOUT US</span>
                <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4">Plumbing solutions that work every time!</h2>
                <p className="mb-4">We’re a team of certified professionals delivering dependable plumbing solutions across residential and commercial properties. From burst pipes and blocked drains to full bathroom renovations, we handle it all.</p>
                <p className="mb-6">Expect transparent pricing, quick response times, and long-lasting workmanship. We value trust and show it through punctuality, cleanliness, and clear communication.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="material-icons-outlined text-[var(--color-secondary)]">check_circle</span><span>Licensed and insured plumbers</span></li>
                  <li className="flex items-start gap-3"><span className="material-icons-outlined text-[var(--color-secondary)]">check_circle</span><span>Upfront, transparent pricing</span></li>
                  <li className="flex items-start gap-3"><span className="material-icons-outlined text-[var(--color-secondary)]">check_circle</span><span>Guaranteed workmanship and parts</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-3">emoji_events</span>
                <p className="text-4xl font-bold text-[var(--color-primary)]">3,280+</p>
                <p className="text-gray-500">Project Completed</p>
              </div>
              <div className="p-6">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-3">sentiment_satisfied</span>
                <p className="text-4xl font-bold text-[var(--color-primary)]">1,500+</p>
                <p className="text-gray-500">Happy Clients</p>
              </div>
              <div className="p-6">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-3">event</span>
                <p className="text-4xl font-bold text-[var(--color-primary)]">2450+</p>
                <p className="text-gray-500">Years Of Experience</p>
              </div>
              <div className="p-6">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-3">thumb_up</span>
                <p className="text-4xl font-bold text-[var(--color-primary)]">100%</p>
                <p className="text-gray-500">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width CTA */}
        <section className="cta-bg bg-cover bg-center py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl mb-6 max-w-3xl mx-auto">For All Your Plumbing Needs We've Got You Covered!</h2>
            <a href="#contact" className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">Request Service</a>
          </div>
        </section>

        {/* Services detailed grid */}
        <section className="py-20 bg-[var(--color-light-gray)]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4">Delivering service beyond expectations.</h2>
              <p>We offer a comprehensive range of plumbing services to meet the diverse needs of our clients.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card-1 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">shower</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Drain Cleaning</h3>
                <p className="text-sm mb-4">Clearing stubborn clogs to restore proper flow.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>

              <div className="service-card-2 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">water_heater</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Water Heater</h3>
                <p className="text-sm mb-4">Repair, replacement, and maintenance services.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>

              <div className="service-card-3 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">water_damage</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sewer Services</h3>
                <p className="text-sm mb-4">Sewer line repair, cleaning, and replacement.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>

              <div className="service-card-4 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">toilet</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Toilet Services</h3>
                <p className="text-sm mb-4">Expert repair and installation for all toilet models.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>

              <div className="service-card-5 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">construction</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Installation</h3>
                <p className="text-sm mb-4">Fixture, pipe, and full system installations.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>

              <div className="service-card-6 bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 text-white">
                <div className="bg-[var(--color-secondary)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">gas_meter</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Gas Fittings</h3>
                <p className="text-sm mb-4">Safe and certified gas line installation and repair.</p>
                <a href="#" className="font-semibold hover:text-[var(--color-secondary)] transition-colors">Read More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4">We'll get the job done efficiently and discreetly.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center border">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">workspace_premium</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Certified Professionals</h3>
                <p>Our team consists of licensed, insured, and highly trained plumbers.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">speed</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast And Affordable</h3>
                <p>We provide prompt service and transparent pricing without hidden fees.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border">
                <span className="material-icons-outlined text-5xl text-[var(--color-secondary)] mb-4">support_agent</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7 Online Helpline</h3>
                <p>Get in touch anytime for emergencies or to schedule an appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency split */}
        <section className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 bg-[var(--color-primary)] text-white p-8 md:p-16 flex flex-col justify-center">
            <span className="inline-block bg-[var(--color-secondary)] text-white text-sm font-bold px-4 py-2 rounded-full mb-4 self-start">CALL US 24/7</span>
            <h2 className="text-3xl md:text-4xl mb-4">Plumbing, Fixing problems One Call at a time.</h2>
            <p className="text-gray-300 mb-8">When a plumbing emergency strikes, you need fast, reliable help. Our team is on standby 24/7 to tackle your most urgent issues.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="material-icons-outlined text-[var(--color-secondary)] text-3xl">phone_in_talk</span>
                <p className="text-lg">24/7 Emergency Service</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons-outlined text-[var(--color-secondary)] text-3xl">today</span>
                <p className="text-lg">Same Day Appointment</p>
              </div>
            </div>
            <div className="bg-[var(--color-secondary)] p-6 rounded-lg text-center">
              <p className="text-white font-bold text-lg mb-2">Do you have a plumbing emergency?</p>
              <p className="text-white text-3xl md:text-4xl font-bold mb-4">061 587 7976</p>
              <a href="#contact" className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">Contact Us Now</a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 emergency-bg bg-cover bg-center min-h-[400px] lg:min-h-0" />
        </section>

        {/* Feature icons row */}
        <section className="py-14 bg-[var(--color-light-gray)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-500">
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">verified</span><span>Certified</span></div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">build</span><span>Tools</span></div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">settings</span><span>Settings</span></div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">home</span><span>Home</span></div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">workspace_premium</span><span>Award</span></div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm"><span className="material-icons-outlined">handyman</span><span>Service</span></div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-2">Best Maintenance Plans</h2>
              <p className="text-gray-600">Transparent pricing information</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Standard */}
              <div className="rounded-xl overflow-hidden shadow-lg border">
                <div className="bg-[var(--color-light-gray)] px-6 py-6">
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">Standard Plan</h3>
                  <p className="text-4xl font-extrabold text-[var(--color-primary)] mt-2">$49<span className="text-base font-semibold text-gray-500">/month</span></p>
                </div>
                <div className="p-6 space-y-3">
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Annual inspection</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Priority scheduling</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>10% off labor</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Leak detection</p>
                  <a href="#contact" className="mt-4 inline-block bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md font-semibold w-full text-center">Get Started</a>
                  <div className="flex items-center justify-center gap-4 text-[var(--color-secondary)] pt-2">
                    <span className="material-icons-outlined">facebook</span>
                    <span className="material-icons-outlined">twitter</span>
                    <span className="material-icons-outlined">instagram</span>
                  </div>
                </div>
              </div>
              {/* Professional */}
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[var(--color-secondary)] relative">
                <div className="absolute -top-3 right-4 bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                <div className="bg-[var(--color-secondary)] px-6 py-6 text-white">
                  <h3 className="text-xl font-bold">Professional Plan</h3>
                  <p className="text-4xl font-extrabold mt-2">$99<span className="text-base font-semibold opacity-80">/month</span></p>
                </div>
                <div className="p-6 space-y-3">
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Semi-annual inspection</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Priority + emergency support</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>15% off labor</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Water heater tune-up</p>
                  <a href="#contact" className="mt-4 inline-block bg-white text-[var(--color-secondary)] border border-[var(--color-secondary)] px-6 py-3 rounded-md font-semibold w-full text-center">Get Started</a>
                </div>
              </div>
              {/* Extended */}
              <div className="rounded-xl overflow-hidden shadow-lg border">
                <div className="bg-[var(--color-light-gray)] px-6 py-6">
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">Extended Plan</h3>
                  <p className="text-4xl font-extrabold text-[var(--color-primary)] mt-2">$149<span className="text-base font-semibold text-gray-500">/month</span></p>
                </div>
                <div className="p-6 space-y-3">
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Quarterly inspection</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Emergency coverage</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>20% off labor</p>
                  <p className="flex items-center gap-2"><span className="material-icons-outlined text-[var(--color-secondary)]">check</span>Annual drain cleaning</p>
                  <a href="#contact" className="mt-4 inline-block bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md font-semibold w-full text-center">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-16 bg-[var(--color-light-gray)]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl text-[var(--color-primary)] mb-3">Need more help or consultation?</h3>
            <p className="text-gray-600 mb-6">Not sure which service or plan is right for you? Our experts are happy to help.</p>
            <a href="#contact" className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Contact Us</a>
          </div>
        </section>

        {/* Trust section */}
        <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Trust Your Plumber To Get It Right, And On Time</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="material-icons-outlined">check_circle</span><span>Service guarantee on all completed jobs</span></li>
                  <li className="flex items-start gap-3"><span className="material-icons-outlined">check_circle</span><span>On-time arrival and fast turnarounds</span></li>
                  <li className="flex items-start gap-3"><span className="material-icons-outlined">check_circle</span><span>Quality parts and neat, tidy work</span></li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1567027757540-3b74a3f4bdf0?q=80&w=1600&auto=format&fit=crop"
                  alt="Professional plumber in uniform"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[var(--color-light-gray)]" id="testimonials">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4">What Our Customer Say</h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4mLmHBRrYs9ndA6m1w5e1ceE4Q2DRyma4eijK9M59-49KpQY9NG32wAz73usRbwfv1NQjmqHM7fdKC07rP01Q29P9JqS0gyZTJ8gkqNIOUksS54tXwjxV9Pf7-cScDhJF1fXlwPo6-y5dIZP_Vz0zboAjxwEnOknFOx9NWXvrB2elcJzDOdHkQqKOWqAGEpmldoE80dKU40xSkEPniGuMoeqfNWOv7HYlfsyFsZhVYV_rcZhtzBqZEeZ6AUvlZmRUEGSXVOe7Hrw"
                  alt="Google logo"
                  className="h-6"
                />
                <span className="font-bold text-lg text-gray-700">Google Rating</span>
                <span className="text-[var(--color-secondary)]"><span className="material-icons-outlined text-xl align-middle">star</span></span>
                <span className="font-bold text-lg text-gray-800">4.6</span>
                <span className="text-gray-500">(30 Reviews)</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4 text-[var(--color-secondary)]">
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                </div>
                <p className="italic text-gray-600 mb-6">"Precision Plumbing was incredibly professional and efficient. They arrived on time, diagnosed the problem quickly, and fixed our leaking pipe with no fuss. Highly recommend!"</p>
                <div className="flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3DYhVhATsefn5h0Ht8rV3PFAMBaqHJ-WldFNiHp04GkAUg9vNNrS32A-Ka7eI_WiDeQQ8MV1FUtmhmSOC2-1xjA423klQu1k8RuBiU1HNqwtgytAu22AniSFw1yjeK-j1q6gIdg5WUz62WdrOe7J0orqTxof2XCvpi8h1XMHXQ1mL7oCwnETqn9_zrXdTC7ncJOyySYx9pbVKxpxmJ2MxPPmWwyqwekpnxiOaX3u7e8p1TwvacsAq5fSlRunWo-53FSS2fBYGjLk"
                    alt="Customer photo"
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Sarah Johnson</h4>
                    <p className="text-gray-500">Residential Client</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4 text-[var(--color-secondary)]">
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star</span>
                  <span className="material-icons-outlined">star_half</span>
                </div>
                <p className="italic text-gray-600 mb-6">"As a business owner, I need a reliable plumber I can count on. Precision Plumbing has been our go-to for all commercial needs. They are responsive, knowledgeable, and always do a great job."</p>
                <div className="flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCzJF-nXr99QfhwxUT8iK7b-d0oUsU88kign7GXxiOjbjkPk1WDKqdyqJs5XraIRQpTrKDKMy4IniX56N4JNWqTjhXtkRJBdQGdEkStxxABWPyDBcjs40-LI0QLq77B5cNAOzaSkAfn6i4OdJQRUFJvJFg-efGWbR5EFCk29ZY26R06BQrh1gftHifwYpJM1laEhidYXR0jH7SQeFYNsJJlJt4XpVvtp0ZgPFY1eYKXec8zMWfptGoscqh5aqrq-EkgybeeVvgvK4A"
                    alt="Customer photo"
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Mike Williams</h4>
                    <p className="text-gray-500">Commercial Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA (image left, content right) */}
        <section className="py-20 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.unsplash.com/photo-1581578707943-2c1b8f1d1d5f?q=80&w=1600&auto=format&fit=crop"
                alt="Plumber with arms crossed"
                className="rounded-lg w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4">Feel free to contact our plumber</h2>
                <p className="text-gray-600 mb-8">Whether you have a question, need a quote, or require immediate assistance, our team is here to help. Reach out to us through any of the methods below.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[var(--color-secondary)] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-icons-outlined text-white text-3xl">phone</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">EMERGENCY CALL</h4>
                      <p className="text-gray-600 text-xl">061 587 7976</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-secondary)] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-icons-outlined text-white text-3xl">email</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">SEND A MESSAGE</h4>
                      <p className="text-gray-600 text-xl">contact@precision.co.za</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white pt-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4">
                <span className="material-icons-outlined text-[var(--color-secondary)] text-3xl">plumbing</span>
                PrecisionPlumbing
              </a>
              <p className="text-gray-300">Your trusted partner for all residential and commercial plumbing needs. Available 24/7 for your convenience.</p>
              <div className="mt-4 text-gray-300 space-y-2">
                <p><strong>Phone:</strong> 061 587 7976</p>
                <p><strong>Email:</strong> contact@precision.co.za</p>
                <p><strong>Address:</strong> 23 Phoenix Ave, Morehill, Benoni, 1501</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Help Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-[var(--color-secondary)] transition-colors">Our Services</a></li>
                <li><a href="#faq" className="hover:text-[var(--color-secondary)] transition-colors">FAQ</a></li>
                <li><a href="#support" className="hover:text-[var(--color-secondary)] transition-colors">Customer Support</a></li>
                <li><a href="#contact" className="hover:text-[var(--color-secondary)] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Drain Cleaning</a></li>
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Water Heater Repair</a></li>
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Sewer Line Service</a></li>
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Emergency Plumbing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Sign up for updates and special offers.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-l-md border-0 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-r-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2024 Precision Plumbing East Rand. All Rights Reserved.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="#privacy" className="hover:text-[var(--color-secondary)] transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-[var(--color-secondary)] transition-colors">Terms of Use</a>
              <div className="flex items-center gap-2 text-[var(--color-secondary)]">
                <span className="material-icons-outlined">facebook</span>
                <span className="material-icons-outlined">twitter</span>
                <span className="material-icons-outlined">instagram</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
