import React from 'react';

const lenders = [
  { name: 'Halifax', src: 'https://s3.eu-west-2.amazonaws.com/protect-and-lend-craft5/logos/Halifax-UK-_-Bank-Accounts-Savings-Loans-Mortgages-0.svg' },
  { name: 'HSBC', src: '/logos/hsbc.png' },
  { name: 'Barclays', src: '/logos/barc.png' },
  { name: 'NatWest', src: '/logos/natwest.webp' },
  { name: 'Santander', src: 'https://s3.eu-west-2.amazonaws.com/protect-and-lend-craft5/logos/Banco_Santander_Logotipo.svg' },
  { name: 'Nationwide', src: 'https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--19a6224d-5a7d-4926-a73a-2050cea3a5e3/nationwide-logo-new2.png?preferwebp=true' },
  { name: 'Virgin Money', src: '/logos/virgin-money.jpg' },
  { name: 'Accord', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6JUMaOJEPigBDdbtJwd0ADnMZ-DrRqQLqg&s' },
  { name: 'TheCo-operativeBank', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/The_Co-operative_Bank_logo.jpg' },
  { name: 'TSB', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUq9UwSoRAqL8AnvzDvMrxWGSPx8e0C_PuDA&s' },
  { name: 'Metrobank', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyun0V2VTvEzL10ev19k1zlqJjkmgOSR3R7w&s' },
];

const LogoSlider: React.FC = () => {
  return (
    <div className="w-full bg-[#fdfeff] py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        
        <h3 className="text-blue-900 font-black text-3xl md:text-4xl mb-3 tracking-tight">
          We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">independent</span>
        </h3>
        <p className="text-gray-400 font-medium max-w-xl mx-auto">
          We work with over <span className="text-gray-900 font-bold underline decoration-blue-500 underline-offset-4">130+ lenders</span> to find you the most competitive rates.
        </p>
      </div>

      <div className="relative flex items-center">
        {/* Soft edge masking for a high-end feel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        <div className="flex animate-scroll whitespace-nowrap gap-8 py-10">
          {[...lenders, ...lenders, ...lenders].map((lender, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center"
            >
              {/* The "Cool" Modern Card */}
              <div className="w-52 h-28 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] group-hover:border-blue-200 group-hover:-translate-y-2">
                <img
                  src={lender.src}
                  alt={lender.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Subtle indicator dot that appears on hover */}
                <div className="absolute bottom-3 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
