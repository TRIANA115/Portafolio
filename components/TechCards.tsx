import React from 'react';
import TechCard from './TechCard';
import { Monitor, Server, Database, Container, Terminal, Cpu, Layers } from 'lucide-react';

export function SistemasOperativosCard() {
  return (
    <TechCard
      title="SISTEMAS OPERATIVOS"
      color="purple"
      icon={Layers}
      items={[
        'Windows 11',
        'Ubuntu 22.04 LTS',
        'Kali Linux',
        'Arch Linux'
      ]}
    />
  );
}

export function KernelLinuxCard() {
  return (
    <TechCard
      title="KERNEL LINUX"
      color="pink"
      icon={Cpu}
      items={[
        'Kernel 5.15 LTS',
        'Kernel 6.x',
        'Zen Kernel',
        'Custom Builds'
      ]}
    />
  );
}

export function TerminalShellCard() {
  return (
    <TechCard
      title="TERMINAL & SHELL"
      color="cyan"
      icon={Terminal}
      items={[
        'Zsh + Oh My Zsh',
        'Bash',
        'Tmux',
        'Neovim'
      ]}
    />
  );
}

// Exportamos también las tarjetas existentes para mantener la consistencia
export function BackendCard() {
  return (
    <TechCard
      title="BACKEND"
      color="green"
      icon={Server}
      items={[
        'Laravel, PHP',
        'Python',
        'Node.js',
        'NestJS',
        'Prisma'
      ]}
    />
  );
}

export function FrontendCard() {
  return (
    <TechCard
      title="FRONTEND"
      color="cyan"
      icon={Monitor}
      items={[
        'React',
        'Next.js',
        'Tailwind',
        'Bootstrap',
        'CSS Nativo'
      ]}
    />
  );
}

export function DatabaseCard() {
  return (
    <TechCard
      title="BASE DE DATOS"
      color="orange"
      icon={Database}
      items={[
        'MySQL',
        'PostgreSQL',
        'MongoDB'
      ]}
    />
  );
}

export function DevOpsCard() {
  return (
    <TechCard
      title="DEVOPS"
      color="blue"
      icon={Container}
      items={[
        'Docker'
      ]}
    />
  );
}
