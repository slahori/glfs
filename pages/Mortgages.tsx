import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSlider from '../components/LogoSlider';

const Mortgages: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Home Purchase",
      content: "Whether you're stepping onto the property ladder or moving into your dream home, we are here to make your mortgage journey simple. Our experienced advisers work with over 130 residential and commercial lenders across the UK, giving you access to the whole market, not just the high street. We provide clear, honest, and independent mortgage advice tailored to your circumstances.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    },
    {
      title: "Remortgages",
      content: "We specialize in helping clients find the best rate and terms for their remortgage and are committed to providing a hassle-free, personalized experience tailored to your unique situation. Our team of highly experienced mortgage professionals will work closely with you to ensure you are getting the most competitive rate and best terms available.",
      image: "https://ukmoneyman.com/wp-content/uploads/2023/09/How-Soon-Can-You-Remortgage-Before-Your-Fixed-Rate-Ends.jpg",
      link: "/contact"
    },
    {
      title: "First Time Buyers",
      content: "We offer a comprehensive service package to first-time home buyers. Our experienced advisers will guide you through the entire home-buying process, finding and negotiating the best possible deal. We will also provide you with a wealth of information and resources to help make your home-buying experience as smooth and stress-free as possible.",
      image: "https://media.bullseyeplus.com//Media/Blogs/5209/first%20time%20buyers.jpg",
      link: "/contact"
    },
    {
      title: "Buy to Let",
      content: "We are dedicated to helping you build your property portfolio and achieve financial freedom. With our team of experienced professionals, you can be sure we will provide the best advice and support to help you make the most of your investment and maximize your yields.",
      image: "https://cdn.prod.website-files.com/66ebee1f8db40c6a56b22364/672b55a9b24c3310d610013d_66ebf07ac2cd7f960d147f86_635ba8d103aaf36ffcd1640b_Buy-to-let-hero.jpeg",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Creative Hero Section - Adjusted Text Positioning */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Added lg:pl-16 to move content further right from the left edge */}
            <div className="lg:w-1/2 z-10 lg:pl-16 mb-12 lg:mb-0">
              
              <h1 className="text-5xl md:text-7xl font-black text-blue-900 mb-6 leading-tight">
                We make Mortgages <span className="text-blue-600">simple!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                We are here to take the stress out of finding and securing the right mortgage for you. From your first home to your forever home — we’ve got you covered.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["First-Time Buyers", "Home Movers", "Remortgages", "Buy-to-Let"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-blue-200 active:scale-95">
                Discuss Your Requirements
              </Link>
            </div>

            <div className="lg:w-1/2 relative px-4">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Home" 
                  className="w-full h-[550px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Logo Section */}
      <div className="bg-gray-50 ">
        
        <LogoSlider />
      </div>

      {/* Interactive Slider Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Discover more about our mortgage service</h2>
            <p className="text-gray-500 text-lg">Independent advice tailored to your individual needs.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Slider Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    activeTab === index 
                    ? "bg-blue-900 text-white shadow-xl scale-105" 
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Content Slider */}
            <div className="bg-blue-50/50 rounded-[4rem] p-8 md:p-16 border border-blue-100 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-16 transition-opacity duration-500">
                <div className="lg:w-1/2 animate-fade-in" key={`text-${activeTab}`}>
                  <h3 className="text-4xl font-bold text-blue-900 mb-6">{services[activeTab].title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {services[activeTab].content}
                  </p>
                  <Link 
                    to={services[activeTab].link} 
                    className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg"
                  >
                    Contact us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
                
                <div className="lg:w-1/2 w-full animate-fade-in" key={`img-${activeTab}`}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={services[activeTab].image} 
                      alt={services[activeTab].title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      
      <section className="pb-12 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="bg-blue-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Ready to get started?
              </h2>
              <p className="text-blue-100 mb-8 md:mb-10 text-base md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
                Our team of experts is ready to help you navigate the complex market with whole-of-market access and tailored financial solutions.
              </p>
              
              {/* Responsive Button Fix */}
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-900 px-6 py-4 md:px-12 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
              >
                Book Your Free Consultation
              </Link>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none hidden md:block">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mortgages;
