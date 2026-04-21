import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Insurance: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const insurers = [
    { name: 'Aviva', src: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Aviva_Logo.svg' },
    { name: 'Bupa', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Bupa_logo.svg' },
    { name: 'Legal & General', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9KfrrQAv2bGEoZxyWPwX0L_UkeAizAdl2A&s' },
    { name: 'Vitality', src: 'https://cdn.aptoide.com/imgs/6/9/5/695df761d7f8659d604ed7d7e98e590d_fgraphic.png' },
    { name: 'Liverpool Victoria', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DHYSbHZI1ErjS66QsTY-AqAuXFzE-uT91A&s' },
    { name: 'Zurich', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYfvKGcfjTyWjVxkqRTmqmbDcfaVXwMbpGA&s' },
    { name: 'The Exeter', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf6Tt6y74r0X4Supu6Fd8a-98iWdcaOokbg&s' },
  ];

  const protectionServices = [
    {
      title: "Life Insurance",
      content: "We offer expert advice and tailored advice to clients looking for life assurance. Our experienced advisors are on hand to provide you with advice and support throughout the process, ensuring you make the right choice.",
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    },
    {
      title: "Critical Illness Cover",
      content: "Providing comprehensive coverage for those suffering from a critical illness, making sure our clients are protected. We provide a personal and supportive service and use our expertise to help clients find the best coverage.",
      image: "https://www.delta-ic.gr/wp-content/uploads/2020/12/delta_asfalisi_sovarwn_astheneiwn-848x477.jpg",
      link: "/contact"
    },
    {
      title: "Income Protection",
      content: "We provide impartial advice on the best plans from leading UK insurers and assist clients in selecting the most suitable policy for their individual circumstances. We help customers save time and money.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKDco5DtIpBVdhDzEHwzchY8c4MJf7XNyyg&s",
      link: "/contact"
    },
    {
      title: "Private Medical Insurance",
      content: "We provide our clients with a variety of private medical insurance options from leading UK providers. Our team of experienced brokers will find the best plan for your individual or business needs.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 pb-12 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 z-10 lg:pl-16 text-center lg:text-left animate-slide-in-left">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                <span className="text-blue-600 italic font-medium block mt-2">Protect what matters the most.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Life can be unpredictable — but your finances don’t have to be. We’ll help you protect your home, your income, and your loved ones.
              </p>
              <Link 
                to="/contact" 
                className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-bold text-base lg:text-lg transition-all shadow-xl active:scale-95"
              >
                Discuss Your Protection
              </Link>
            </div>

            <div className="w-full lg:w-1/2 relative px-4 animate-slide-in-right">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 lg:w-80 lg:h-80 bg-blue-50 rounded-full filter blur-3xl opacity-60"></div>
              <div className="relative z-10 rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] lg:border-[12px] border-white transform lg:-rotate-2">
                <img 
                  src="https://media.istockphoto.com/id/1130953778/photo/young-happy-family-relax-together-at-home-smiling-and-hugging.jpg?s=612x612&w=0&k=20&c=AXZf8M0hrfg8XuFDSW_fsC3ExfIdVt5ORnSInat7wYg=" 
                  alt="Family Security" 
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider */}
      <div className="bg-white py-10 lg:py-14 border-y border-slate-50 overflow-hidden">
        <div className="text-center mb-6 lg:mb-8 px-4">
          <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Access to insurers from whole of the market</p>
        </div>
        <div className="relative flex items-center">
          <div className="flex animate-scroll whitespace-nowrap gap-6 lg:gap-8 py-4">
            {[...insurers, ...insurers].map((brand, i) => (
              <div key={i} className="w-36 h-20 lg:w-48 lg:h-24 bg-white border border-slate-100 rounded-xl lg:rounded-[2rem] flex items-center justify-center p-4 lg:p-8 shrink-0">
                <img src={brand.src} alt={brand.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Protection Slider */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-4">Our Protection Services</h2>
            <p className="text-slate-500 text-sm lg:text-lg px-4">Clear, honest, and independent advice tailored to your circumstances.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-2 mb-8 pb-4 lg:pb-0 no-scrollbar">
              {protectionServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-bold transition-all whitespace-nowrap text-xs lg:text-base shrink-0 ${
                    activeTab === index 
                    ? "bg-blue-600 text-white shadow-lg scale-105" 
                    : "bg-white text-slate-500 border border-slate-100"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[2rem] lg:rounded-[4rem] p-6 lg:p-16 relative overflow-hidden text-white shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">{protectionServices[activeTab].title}</h3>
                  <p className="text-sm lg:text-lg text-slate-300 leading-relaxed mb-8 italic">
                    {protectionServices[activeTab].content}
                  </p>
                  <Link 
                    to={protectionServices[activeTab].link} 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base w-full justify-center lg:w-auto"
                  >
                    Contact us
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border-2 border-white/5">
                    <img 
                      src={protectionServices[activeTab].image} 
                      alt={protectionServices[activeTab].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pb-12 lg:pb-24 px-4">
        <div className="container mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-20 text-center relative overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-500 mb-4 lg:mb-6">Everyone deserves peace of mind</h2>
            <p className="text-slate-500 mb-8 lg:mb-10 text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
              We can find you suitable cover to meet your requirements and within your budget. 
            </p>
            <Link 
              to="/contact" 
              className="inline-block w-full sm:w-auto bg-slate-900 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .animate-scroll { animation: scroll 50s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-slide-in-left { animation: slideLeft 0.8s ease-out; }
        .animate-slide-in-right { animation: slideRight 0.8s ease-out; }
        @keyframes slideLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Insurance;
