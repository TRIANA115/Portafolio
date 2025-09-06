import React from 'react';
import { SistemasOperativosCard, KernelLinuxCard, TerminalShellCard } from './TechCards';

export default function ProfileCard() {
  return (
    <div className="w-80 flex-shrink-0">
      {/* Foto y Datos Personales */}
      <div className="bg-gray-900 border border-cyan-700 rounded-xl shadow-lg shadow-cyan-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-6 flex flex-col items-center">
          <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-cyan-600 shadow-lg shadow-cyan-500/40 mb-5 transition-transform duration-300 hover:scale-[1.03]">
            <img src="/profile-photo.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
          </div>
          
          <div className="bg-cyan-950 px-4 py-2 rounded-lg mb-4 w-full text-center">
            <h2 className="text-xl font-bold text-cyan-300">Developer Full-Stack</h2>
          </div>
          
          <p className="text-gray-300 text-sm text-center">
            Passionate about clean code and innovative solutions
          </p>
        </div>
      </div>

      {/* Systems & Kernel Info - Below Photo */}
      <div className="mt-6 space-y-4">
        <SistemasOperativosCard />
        <KernelLinuxCard />
        <TerminalShellCard />
      </div>
    </div>
  );
}
