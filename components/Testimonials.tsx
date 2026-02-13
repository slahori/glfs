
import React from 'react';

const testimonials = [
  {
    name: "Gaurav Varma",
    content: "We have always received highly personal and tailored advice from Sandeep, who has an extensive knowledge of the mortgage and insurance products. Could not recommend him and his team at Greater London Financial Services more!"
  },
  {
    name: "Dr S Bhattacharyya",
    content: "I would highly recommend Sandeep and his team at GLFS for guiding me throughout the process of buying my first home - using Help-to-Buy scheme. They have always been very friendly, knowledgeable and approachable. Very thankful!"
  },
  {
    name: "Sharon Marshall",
    content: "Sandeep has helped me with my mortgage and insurance needs for over a decade. His professionalism, organisation and friendly approach are second to none. I trust him implicitly and would very highly recommend him."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.content}"</p>
              </div>
              <div>
                <p className="font-bold text-blue-900">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
