import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  title: string;
  color: string;
  items: string[];
  icon?: LucideIcon;
}

export default function TechCard({ title, color, items, icon: Icon }: TechCardProps) {
  // Mapeo de colores para los diferentes elementos
  const colorMap: Record<string, { bg: string, border: string, shadow: string, gradient: string, hover: string }> = {
    purple: {
      bg: 'bg-purple-500/30',
      border: 'border-purple-500/30',
      shadow: 'shadow-purple-500/20',
      gradient: 'from-purple-500/10 via-transparent to-purple-500/5',
      hover: 'hover:bg-purple-500/5 hover:border-purple-500/20',
    },
    pink: {
      bg: 'bg-pink-500/30',
      border: 'border-pink-500/30',
      shadow: 'shadow-pink-500/20',
      gradient: 'from-pink-500/10 via-transparent to-pink-500/5',
      hover: 'hover:bg-pink-500/5 hover:border-pink-500/20',
    },
    cyan: {
      bg: 'bg-cyan-500/30',
      border: 'border-cyan-500/30',
      shadow: 'shadow-cyan-500/20',
      gradient: 'from-cyan-500/10 via-transparent to-cyan-500/5',
      hover: 'hover:bg-cyan-500/5 hover:border-cyan-500/20',
    },
    green: {
      bg: 'bg-green-500/30',
      border: 'border-green-500/30',
      shadow: 'shadow-green-500/20',
      gradient: 'from-green-500/10 via-transparent to-green-500/5',
      hover: 'hover:bg-green-500/5 hover:border-green-500/20',
    },
    orange: {
      bg: 'bg-orange-500/30',
      border: 'border-orange-500/30',
      shadow: 'shadow-orange-500/20',
      gradient: 'from-orange-500/10 via-transparent to-orange-500/5',
      hover: 'hover:bg-orange-500/5 hover:border-orange-500/20',
    },
    blue: {
      bg: 'bg-blue-500/30',
      border: 'border-blue-500/30',
      shadow: 'shadow-blue-500/20',
      gradient: 'from-blue-500/10 via-transparent to-blue-500/5',
      hover: 'hover:bg-blue-500/5 hover:border-blue-500/20',
    },
  };

  const colorStyle = colorMap[color] || colorMap.blue;

  return (
    <div className={`bg-black/40 backdrop-blur-md border ${colorStyle.border} rounded-2xl shadow-2xl ${colorStyle.shadow} p-3 relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${colorStyle.gradient} rounded-2xl`}></div>
      <div className="relative z-10">
        <div className={`group ${colorStyle.hover} p-2 rounded-xl transition-all duration-300 border border-transparent`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`bg-gradient-to-r from-${color}-500 to-${color}-400 text-white px-2 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg shadow-${color}-500/30 flex items-center gap-1`}>
              {Icon && <Icon size={10} />}
              {title}
            </div>
          </div>
          <div className="space-y-1 text-gray-100 text-sm">
            {items.map((item, index) => (
              <div key={index}>• {item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
