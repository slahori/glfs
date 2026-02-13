import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "b47f5d12-3d7d-4c70-965b-c013c4edd87b"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen lg:h-screen lg:overflow-hidden flex items-start justify-center pt-12 lg:pt-16 pb-6 px-4">
      <div className="container mx-auto max-w-6xl h-full flex flex-col lg:-mt-8">
        
        <div className="mb-3 animate-fade-in text-center lg:text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Get in <span className="text-indigo-600">touch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow min-h-0 lg:max-h-[75vh]">
          
          <div className="lg:col-span-4 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-3 animate-slide-in-left">
            <div className="bg-indigo-50 border border-emerald-100 p-3 rounded-2xl flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex-shrink-0 flex items-center justify-center text-base">📞</div>
              <div className="overflow-hidden">
                <p className="text-[9px] font-black uppercase text-indigo-600 tracking-widest">Call Us</p>
                <p className="text-sm font-bold text-indigo-900 truncate">020 3576 7725</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-amber-100 p-3 rounded-2xl flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex-shrink-0 flex items-center justify-center text-base">✉️</div>
              <div className="overflow-hidden">
                <p className="text-[9px] font-black uppercase text-indigo-600 tracking-widest">Email</p>
                <p className="text-sm font-bold text-indigo-900 truncate">info@glfsl.co.uk</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-2xl flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex-shrink-0 flex items-center justify-center text-base">🛡️</div>
              <div>
                <p className="text-[9px] font-black uppercase text-indigo-600 tracking-widest">FCA Number</p>
                <p className="text-sm font-bold text-indigo-900">1023239</p>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 bg-slate-800 p-5 rounded-[2rem] text-white shadow-xl flex-grow flex flex-col justify-center relative overflow-hidden min-h-[140px] lg:max-h-[220px]">
               <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-8 -mt-8"></div>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Registered Office</p>
               <p className="text-sm font-medium leading-relaxed">
                 Garfield House <br /> 165-167 High Street<br/>
                 Rayleigh, Essex<br /> SS6 7QA
               </p>
               
            </div>
          </div>

          <div className="lg:col-span-8 h-full min-h-0 animate-slide-in-right">
            <div className="bg-white h-full p-5 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.04)] flex flex-col">
              {isSuccess ? (
                <div className="flex-grow flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Success!</h2>
                  <p className="text-slate-500 text-sm mt-1 mb-4">Your message has been sent.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-indigo-600 font-bold text-xs uppercase tracking-widest">Send New Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-3">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input name="name" type="text" required placeholder="Name" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 outline-none transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                      <input name="phone" type="tel" required placeholder="Phone" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 outline-none transition-all text-sm font-medium" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 outline-none transition-all text-sm font-medium" />
                  </div>

                  <div className="space-y-1 flex-grow flex flex-col">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      name="message" required placeholder="Tell us how we can help..."
                      className="w-full min-h-[80px] lg:flex-grow px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-500 outline-none transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  {/* New Consent & Security Checkbox Section */}
                  <div className="flex items-start gap-3 px-1 py-1">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      required 
                      className=" w-4 h-3 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <label className="text-[10px] leading-tight text-slate-500 cursor-pointer">
                      I agree to submit my details. Your data is handled <span className="text-indigo-600 font-bold">securely</span> and will only be used to contact you regarding your enquiry.
                    </label>
                  </div>

                  <button 
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-3.5 rounded-xl transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2 text-sm uppercase tracking-widest"
                  >
                    {isSubmitting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Submit Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-in-left { animation: slideLeft 0.7s ease-out backwards; }
        .animate-slide-in-right { animation: slideRight 0.7s ease-out backwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideLeft { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (min-width: 1024px) {
          @keyframes slideLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes slideRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        }
      `}</style>
    </div>
  );
};

export default Contact;