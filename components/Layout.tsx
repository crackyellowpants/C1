import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url('https://raw.githubusercontent.com/crackyellowpants/C1/main/CPS.webp')` }}
      ></div>

      {/* Background Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-pink-500"></div>
      </div>

      <header className="border-b border-cyan-900/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <h1 className="font-cyber text-2xl tracking-tighter neon-text-cyan group-hover:glitch-hover uppercase">
              CPS ARCHIVE
            </h1>
          </Link>
          <nav>
             <ul className="flex space-x-6 font-cyber text-sm uppercase tracking-widest">
               <li><Link to="/" className="text-cyan-400 hover:text-cyan-200 transition-colors">Home</Link></li>
             </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>

      <footer className="border-t border-cyan-900/50 bg-slate-950 py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
          <p className="font-cyber text-xs text-slate-500 tracking-widest uppercase">
            CRACKYELLOWPANTS
          </p>
          {/* GITHUB_REPOSITORY_ACCESS 링크 제거됨 */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;