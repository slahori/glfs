import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Insurance: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Insurer logos (ensure these exist in your public/logos folder)
  const insurers = [
    { name: 'Aviva', src: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Aviva_Logo.svg' },
    { name: 'Bupa', src: 'data:image/png;base64,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' },
    { name: 'Legal & General', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9KfrrQAv2bGEoZxyWPwX0L_UkeAizAdl2A&s' },
    { name: 'Vitality', src: 'https://cdn.aptoide.com/imgs/6/9/5/695df761d7f8659d604ed7d7e98e590d_fgraphic.png' },
    { name: 'Liverpool Victoria', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DHYSbHZI1ErjS66QsTY-AqAuXFzE-uT91A&s' },
    { name: 'Zurich', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYfvKGcfjTyWjVxkqRTmqmbDcfaVXwMbpGA&s' },
    { name: 'Guardian', src: 'data:image/png;base64,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' },
    { name: 'The Exeter', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf6Tt6y74r0X4Supu6Fd8a-98iWdcaOokbg&s' },
    { name: 'Scottish Widows', src: 'data:image/png;base64,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' },
    { name: 'British Friendly', src: 'data:image/png;base64,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' },
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
      content: "Providing comprehensive coverage for those suffering from a critical illness, making sure our clients are protected. We provide a personal and supportive service and use our expertise to help clients find the best and most comprehensive coverage for their individual needs.",
      image: "https://www.delta-ic.gr/wp-content/uploads/2020/12/delta_asfalisi_sovarwn_astheneiwn-848x477.jpg",
      link: "/contact"
    },
    {
      title: "Income Protection",
      content: "We provide impartial advice on the best plans from leading UK insurers and assist clients in selecting the most suitable policy for their individual circumstances. We help customers save time and money by providing expert advice on the most suitable plan for them.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKDco5DtIpBVdhDzEHwzchY8c4MJf7XNyyg&s",
      link: "/contact"
    },
    {
      title: "Private Medical Insurance",
      content: "We provide our clients with a variety of private medical insurance options from leading UK providers, and our team of experienced brokers will find the best plan for your individual or business needs. We specialise in helping you get the most value for your money.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      {/* Hero Section - Blue Theme */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 z-10 lg:pl-16 mb-12 lg:mb-0 animate-slide-in-left">
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">
                
                <span className="text-black-600 italic font-medium text-4xl md:text-5xl block mt-2">Protect what matters the most..</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
                Life can be unpredictable — but your finances don’t have to be. We’ll help you protect your home, your income, and your loved ones with tailored protection plans.

                 We provide tailored insurance advice and policies that fit your needs and lifestyle. We have access to a large range of providers offering Defaqto 5-star rated cover.

              </p>
              <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">

We’ll help you choose the right cover at the right price — no hidden surprises.</p>
              
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-100 active:scale-95">
                Discuss Your Protection
              </Link>
            </div>

            <div className="lg:w-1/2 relative px-4 animate-slide-in-right">
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/597610d6d2b85704bb5e4f8a/ad9a2d70-407e-4483-93b4-608e0a721a51/ST5.jpg?format=1000w" 
                  alt="Family Security" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer Logo Slider - Matching Mortgages Style */}
      <div className="bg-white py-14 border-y border-slate-50 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">We have access to insurers from whole of the market</p>
        </div>
        <div className="relative flex items-center">
          {/* Gradient Masking */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

          <div className="flex animate-scroll whitespace-nowrap gap-8 py-4">
            {[...insurers, ...insurers, ...insurers].map((brand, i) => (
              <div key={i} className="w-48 h-24 bg-white border border-slate-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border-blue-200 hover:-translate-y-1">
                <img src={brand.src} alt={brand.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Protection Slider - Blue Theme */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Protection Services</h2>
            <p className="text-slate-500 text-lg font-medium">Clear, honest, and independent advice tailored to your circumstances.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {protectionServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 border ${
                    activeTab === index 
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-100 scale-105" 
                    : "bg-white text-slate-500 border-slate-100 hover:bg-blue-50"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Slider Content Box */}
            <div className="bg-slate-900 rounded-[4rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col lg:flex-row items-center gap-16 transition-all duration-500">
                <div className="lg:w-1/2 animate-fade-in" key={`text-${activeTab}`}>
                  <h3 className="text-4xl font-bold mb-6">{protectionServices[activeTab].title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-10 opacity-90 italic">
                    {protectionServices[activeTab].content}
                  </p>
                  <Link 
                    to={protectionServices[activeTab].link} 
                    className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg"
                  >
                    Contact us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
                
                <div className="lg:w-1/2 w-full animate-fade-in" key={`img-${activeTab}`}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5">
                    <img 
                      src={protectionServices[activeTab].image} 
                      alt={protectionServices[activeTab].title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-blue-50 border border-blue-100 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <h2 className="text-3xl font-black text-slate-500 mb-6">Everyone deserves peace of mind</h2>
            <p className="text-slate-500 mb-10 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We can find you suitable cover to meet your requirements and within your budget. 
            </p>
            <Link to="/contact" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .animate-scroll { animation: scroll 50s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
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