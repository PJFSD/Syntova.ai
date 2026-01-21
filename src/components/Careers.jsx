// import React from 'react';
// import CareerCard from './common/CareerCard';
// import { useModal } from '../context/ModalContext';

// export default function Careers() {
//   const { openModal } = useModal();
//   return (
//     <section id="careers" className="bg-[#eef3ff] py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl font-bold">Careers</h2>
//         <p className="mt-2 text-slate-600">Join our team and help build the future with cutting-edge technology.</p>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <CareerCard title="AI Engineer" onApply={() => openModal('careers')} />
//           <CareerCard title="Full Stack Developer" onApply={() => openModal('careers')} />
//           <CareerCard title="Cloud Architect" onApply={() => openModal('careers')} />
//           <CareerCard title="Data Analyst" onApply={() => openModal('careers')} />
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Careers() {
  return (
    <section id="careers" className="bg-[#f2f6ff] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        
        <p className="text-slate-600 mt-3">
          Join our team and help build the future with cutting-edge technology.
        </p>

        {/* Single Card */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
            
            <h3 className="text-xl font-bold text-[#0a1a4e]">
              Send Your Resume
            </h3>


            <div className="mt-5">
              <a className="inline-block bg-[#0a1a4e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#132b80] transition"
              >
                ceo@syntova.in
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}