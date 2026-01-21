import React from 'react';
import { useModal } from '../context/ModalContext';
import Stat from './common/Stat';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <header id="home" className="bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Empowering the Future with AI Innovation</h1>
          <p className="mt-4 text-slate-600 max-w-xl">We build intelligent, scalable and cloud-optimized digital solutions for businesses.</p>

          

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Support load reduced" value="60%" />
            <Stat label="Performance boost" value="40%" />
            <Stat label="Manual tasks cut" value="70%" />
            <Stat label="Faster decisions" value="Real-time" />
          </div>
        </div>

        
      </div>
    </header>
  );
}
