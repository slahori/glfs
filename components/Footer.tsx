
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Branding / Logo Space */}
        {/*<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center border-2 border-blue-800 shadow-sm">
              <span className="text-white font-black text-xl">GL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-900 font-bold text-xl leading-tight">Greater London</span>
              <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Financial Services</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-500">
            <Link to="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <Link to="/mortgages" className="hover:text-blue-900 transition-colors">Mortgages</Link>
            <Link to="/insurance" className="hover:text-blue-900 transition-colors">Insurance</Link>
            <Link to="/commercial" className="hover:text-blue-900 transition-colors">Commercial</Link>
            <Link to="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
          </div>
        </div>*/}

        {/* Regulatory Warning */}
        <div className="bg-gray-100 border p-6 rounded-2xl mb-10 text-center">
          <p className="text-black-100 font-bold text-sm md:text-base uppercase tracking-tight">
            YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP WITH YOUR MORTGAGE PAYMENTS
          </p>
        </div>

        {/* Detailed Regulatory Text */}
        <div className="text-[11px] leading-relaxed text-gray-500 space-y-6 max-w-5xl mx-auto border-t border-gray-50 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="space-y-4">
              <p>
                <strong>Greater London Financial Services Ltd</strong> is an appointed representative of New Leaf Distribution Ltd, who are authorised and regulated by the Financial Conduct Authority (Number 460421). Registered office: Garfield House, 165-167 High Street, Rayleigh, England, SS6 7QA. Companies House registration is 15942217.
              </p>
              
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-700 mb-2">Complaints Procedure:</p>
                <p className="mb-2">
                  As an Appointed Representative of New Leaf Distribution Limited, we aim to provide you with a high standard of service. If you are unhappy with any aspect of our service, please let us know:
                </p>
                <p>
                  Email: <a href="mailto:complaints@newleafgroup.co.uk" className="text-blue-600 font-semibold">complaints@newleafgroup.co.uk</a> | 
                  Write to: New Leaf Distribution Ltd, 165 - 167 High Street, Rayleigh, Essex SS6 7QA | 
                  Call: <span className="font-semibold text-gray-700">01702 431130</span>
                </p>
                <p className="mt-2 italic">We will acknowledge your complaint promptly and aim to resolve it within 8 weeks.</p>
              
                <p className="mt-2 italic">If you remain dissatisfied, you have the right to refer your complaint to the Financial Ombudsman Service (FOS)</p>
                <p className="mt-2">
                Website: <a href="http://www.financial-ombudsman.org.uk" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold">www.financial-ombudsman.org.uk</a> | 
                Phone: <span className="font-semibold text-gray-700">020 3576 7725</span> | 
                Address: Financial Ombudsman Service, Exchange Tower, London, E14 9SR
              </p>
              </div>
              
              
            </div>

            <div className="space-y-4">
              {/* <p>
                If you remain dissatisfied, you have the right to refer your complaint to the Financial Ombudsman Service (FOS):
              </p>
              <p>
                Website: <a href="http://www.financial-ombudsman.org.uk" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold">www.financial-ombudsman.org.uk</a> | 
                Phone: <span className="font-semibold text-gray-700">0800 023 4567</span> | 
                Address: Financial Ombudsman Service, Exchange Tower, London, E14 9SR
              </p> */}

              
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
            <div className="text-gray-400 font-medium">
              © 2025 | Greater London Financial Services Ltd | <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </div>
            {/* <div className="flex gap-4">
              <span className="px-2 py-1 bg-gray-100 rounded text-[9px] font-bold uppercase tracking-wider">FCA: 019120291</span>
              <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-[9px] font-bold uppercase tracking-wider">FCA Regulated</span>
              <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-[9px] font-bold uppercase tracking-wider">Whole of Market</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[9px] font-bold uppercase tracking-wider">5-Star Service</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

