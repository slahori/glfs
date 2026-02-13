
import React from 'react';
import { Link } from 'react-router-dom';
import LogoSlider from '../components/LogoSlider';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Happy family in front of UK house */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="../fam_img.jpg" 
            alt="Happy family in front of their UK home" 
            className="w-full h-full object-cover brightness-75 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <br />
          <br />
          <br />
          <br />
          <div className="max-w-3xl mx-auto">
            {/*<div className="inline-block bg-white/90 backdrop-blur px-4 py-1 rounded-full text-blue-900 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xl border border-white">
              Established & Independent
            </div>*/}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              Simple, jargon-free advice that <span className="text-blue-400">puts you first</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md">
              Buying your first home, remortgaging, or protecting your family, we’re here to make it simple, transparent and hassle-free. 
            </p>
            <br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
                Book Free Consultation
              </Link>
              
            </div>
            <br />
            <br />
          </div>
        </div>
        
        {/* Trusted By Floating Bar */}
        <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
            <div className="container mx-auto px-4">
                {/*<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex justify-around text-white">
                    <div className="text-center">
                        <p className="text-2xl font-bold">FCA</p>
                        <p className="text-[10px] uppercase tracking-widest opacity-70">Regulated Advice</p>
                    </div>
                    <div className="text-center border-x border-white/10 px-12">
                        <p className="text-2xl font-bold">130+</p>
                        <p className="text-[10px] uppercase tracking-widest opacity-70">Lenders Available</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">5-Star</p>
                        <p className="text-[10px] uppercase tracking-widest opacity-70">Service Quality</p>
                    </div>
                </div>*/}
            </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About Greater London Financial Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a team of dedicated, experienced and fully qualified financial consultants who are committed to helping you navigate the complexities of the UK mortgage & insurance markets. We provide financial solutions tailored to your unique lifestyle and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">01</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">FCA Regulated</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Operated under strict regulatory standards to ensure your financial safety and peace of mind (FCA No. 1023239).</p>
            </div>
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">02</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Whole of Market</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We are not tied to any single lender. We search the entire market to find the best possible rates for your needs.</p>
            </div>
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">03</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">5-Star Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our reputation is built on exceptional client care, transparent advice, and a track record of successful completions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Independent & Lenders Section */}
      <LogoSlider />

      {/* Why London Professionals Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="London Architecture" 
                  className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/*<div className="absolute -bottom-8 -right-8 bg-blue-900 p-10 rounded-[2rem] text-white shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Independence</p>
                </div>*/}
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-8 leading-tight">Why Choose Us</h2>
              <div className="space-y-6">
                {[
                  { title: "Strategic Positioning", desc: "We understand the nuances of the London property market better than anyone." },
                  { title: "Complex Income Specialist", desc: "Expert at handling complex self-employment income structure as well as bonuses, commissions and other variable income for employees." },
                  { title: "With you all the way", desc: "We liaise with the lenders, solicitors and surveyors throughout the mortgage process, right till completion." },
                  { title: "Lifetime Relationship", desc: "We don't just secure one deal, we wish to be a partner in your lifetime financial journey." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-600 rounded-full p-1 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/contact" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                  Find out more about our bespoke approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* The large red warning box was removed from here. The footer contains all required legal warnings. */}
    </div>
  );
};

export default Home;
