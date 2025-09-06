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
  const colorMap: Record<string, { bg: string, text: string, border: string, icon: string, glow: string }> = {
    purple: {
      bg: 'bg-purple-950',
      text: 'text-purple-300',
      border: 'border-purple-700',
      icon: 'bg-purple-700',
      glow: 'shadow-purple-500/30',
    },
    pink: {
      bg: 'bg-pink-950',
      text: 'text-pink-300',
      border: 'border-pink-700',
      icon: 'bg-pink-700',
      glow: 'shadow-pink-500/30',
    },
    cyan: {
      bg: 'bg-cyan-950',
      text: 'text-cyan-300',
      border: 'border-cyan-700',
      icon: 'bg-cyan-700',
      glow: 'shadow-cyan-500/30',
    },
    green: {
      bg: 'bg-green-950',
      text: 'text-green-300',
      border: 'border-green-700',
      icon: 'bg-green-700',
      glow: 'shadow-green-500/30',
    },
    orange: {
      bg: 'bg-orange-950',
      text: 'text-orange-300',
      border: 'border-orange-700',
      icon: 'bg-orange-700',
      glow: 'shadow-orange-500/30',
    },
    blue: {
      bg: 'bg-blue-950',
      text: 'text-blue-300',
      border: 'border-blue-700',
      icon: 'bg-blue-700',
      glow: 'shadow-blue-500/30',
    },
  };

  const colorStyle = colorMap[color] || colorMap.blue;

  return (
    <div className={`${colorStyle.bg} border ${colorStyle.border} rounded-xl shadow-lg ${colorStyle.glow} overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <div className={`${colorStyle.icon} p-2 rounded-lg shadow-md`}>
              <Icon size={18} className="text-white" />
            </div>
          )}
          <h3 className={`${colorStyle.text} font-bold text-lg`}>{title}</h3>
        </div>
        
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${colorStyle.text}`}></div>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
