import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Founder & Mission Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/logos/selfpic.JPG" 
                    alt="Sandeep Lahori - Founder & Director" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-20">
                    <h2 className="text-white text-2xl font-black">Sandeep Lahori</h2>
                    <p className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-2">Founder & Director</p>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 text-center lg:text-left">
              
              <h1 className="text-4xl md:text-5xl lg:text-3xl font-black text-blue-900 mb-8 leading-tight italic">
                "Our mission is to provide independent, unbiased mortgage and insurance advice that puts clients first—helping individuals and families secure their homes, protect their futures, and make confident financial decisions."
              </h1>
             
            </div>
          </div>
        </div>
      </section>

      {/* 2. Team & Value Prop Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/logos/team.png" 
                  alt="GLFS Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Expertise you can trust</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that a great advice should make your life easier — not more complicated. We’re a team of experienced, friendly and FCA regulated advisers who are passionate about helping you find the most suitable mortgage and insurance solutions based on your individual circumstances and needs.
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm italic text-blue-900 font-bold">
                "We are independent and have access to the whole market, which means we always recommend what’s best for you!"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Mortgages Overview */}
      <section className="py-20 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="/logos/mortgages.png" 
                  alt="Mortgage Services" 
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[450px] object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-black text-blue-900 mb-6">Mortgages</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We know buying a home can feel overwhelming, so our job is to make it simple and stress-free. We’re <strong>independent</strong>, which means we’re not tied to any one bank or lender. We search the <strong>whole market</strong> to find what genuinely works best for you — not what’s easiest for us.
              </p>
              <p className="font-bold text-blue-900 mb-4">Whether you’re buying your first home, moving, or just looking for a better rate, we’ll find the best mortgage deal:</p>
              <ul className="space-y-3 mb-10 text-gray-600 text-sm">
                <li><span className="font-bold text-blue-900">First-Time Buyers</span> – we’ll guide you throughout the journey of getting on the property ladder.</li>
                <li><span className="font-bold text-blue-900">Remortgages</span> – save money or release funds for what matters the most.</li>
                <li><span className="font-bold text-blue-900">Moving Home</span> – we will ensure that your move is smooth and stress-free.</li>
                <li><span className="font-bold text-blue-900">Buy-to-Let</span> – we provide mortgage solutions to landlords and property investors.</li>
                <li><span className="font-bold text-blue-900">Self-Employed or Complex Cases</span> – we love finding solutions for challenging cases.</li>
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
                Get mortgage advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Insurance Overview */}
      <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="/logos/insurance.png" 
                  alt="Insurance Protection" 
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[450px] object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-black text-blue-900 mb-4">Protect What Matters Most!</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                Life can be so unpredictable — but, with proper planning, your finances don’t have to be. We’ll help you protect your home, your income, and your loved ones.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { t: "Life Insurance", i: "🛡️" },
                  { t: "Critical Illness Cover", i: "🏥" },
                  { t: "Income Protection", i: "💼" },
                  { t: "Family Income Benefit", i: "👨‍👩‍👦" },
                  { t: "Mortgage Protection", i: "🏠" },
                  { t: "Private Medical Insurance", i: "🩺" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl">{item.i}</span>
                    <span className="font-bold text-slate-700 text-sm">{item.t}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm italic mb-10">We’ll help you choose the right cover at the right price — no hidden surprises.</p>
              <Link to="/contact" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                Get insurance advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reasons to Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 text-center mb-16">Reasons why clients choose us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Whole-of-market advice", icon: "🌐" },
              { title: "FCA-regulated & qualified", icon: "🛡️" },
              { title: "Simple, jargon-free guidance", icon: "✨" },
              { title: "Personal service start-to-finish", icon: "👤" },
              { title: "Ongoing support — always here", icon: "♾️" }
            ].map((reason, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h4 className="font-bold text-blue-900 text-sm leading-snug">{reason.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Advice Journey - Flowchart (80vh constraint) */}
      <section className="pb-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto  p-6 lg:p-12    h-[80vh] flex flex-col items-center justify-center">
            <h2 className="text-5xl lg:text-3xl font-extrabold italic text-blue-900 mb-6 flex-shrink-0">
              Supporting you, throughout the process!
              <br />
              <br />
            </h2>
            <div className="relative flex-grow w-full overflow-hidden flex items-center justify-center">
               <img 
                src="/logos/flowchart.png" 
                alt="The Advice Journey Flowchart" 
                className="max-w-full max-h-full object-contain rounded-2xl "
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact" className="bg-blue-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl uppercase tracking-widest">
            Get Advice
          </Link>
        </div>
      </section>

      <style>{`
        .animate-slide-in-left {
          animation: slideLeft 0.8s ease-out;
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default About;