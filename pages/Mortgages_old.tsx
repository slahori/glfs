
import React from 'react';
import { Link } from 'react-router-dom';

const Mortgages: React.FC = () => {
  const mortgageTypes = [
    { title: "First Time Buyers", desc: "Step onto the property ladder with confidence. We guide you through the whole process.", icon: "🏠" },
    { title: "Remortgaging", desc: "Switching lenders can save you thousands. We search the market for your best rate.", icon: "🔄" },
    { title: "Buy to Let", desc: "Expert advice for property investors looking to build or expand their portfolio.", icon: "🏢" },
    { title: "Self Employed", desc: "Mortgages can be tricky for the self-employed. We know which lenders are most flexible.", icon: "💼" },
    { title: "New Build", desc: "Specialist knowledge for purchasing newly constructed properties.", icon: "🏗️" },
    { title: "Help to Buy", desc: "Guidance on government schemes to help you secure a home with a smaller deposit.", icon: "🤝" }
  ];

  return (
    <div className="bg-white">
      {/*<div className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Advice</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From first-time buyers to experienced landlords, we find the perfect mortgage for your circumstances.
          </p>
        </div>
      </div>*/}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mortgageTypes.map((type, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:bg-blue-50 transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{type.title}</h3>
                <p className="text-gray-500 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/id/20/600/800" alt="Mortgage Meeting" className="h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mortgage Process</h2>
                <div className="space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h4 className="font-bold">Initial Consultation</h4>
                            <p className="text-sm text-gray-500">We understand your goals and financial health.</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h4 className="font-bold">Market Research</h4>
                            <p className="text-sm text-gray-500">We scan 130+ lenders to find the ultimate deal.</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h4 className="font-bold">Application Handling</h4>
                            <p className="text-sm text-gray-500">We manage all the paperwork from start to finish.</p>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="mt-8 inline-block w-full text-center bg-blue-900 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-colors">
                    Start Your Application
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mortgages;
