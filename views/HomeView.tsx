
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_SERIES } from '../data';

const HomeView: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-12 border-l-4 border-pink-500 pl-6 py-2">
        <h2 className="text-4xl font-cyber neon-text-pink">SYSTEM ACCESS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_SERIES.map((series) => (
          <Link 
            key={series.id} 
            to={`/series/${series.id}`}
            className="group relative block aspect-square overflow-hidden border border-cyan-800 bg-slate-900 transition-all hover:neon-border hover:scale-[1.02]"
          >
            <img 
              src={series.imageUrl} 
              alt={series.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
            />
            {/* 요청에 따라 하단 그라데이션 오버레이 제거 */}
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="font-cyber text-2xl text-cyan-400 mb-1">{series.title}</h3>
              {/* Description removed as requested */}
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-cyber text-cyan-500 px-2 py-1 border border-cyan-500/30">
              AVAILABLE_DATA
            </div>
          </Link>
        ))}

        {/* Placeholder for future series */}
        <div className="aspect-square overflow-hidden border border-slate-800 bg-slate-900/30 flex flex-col items-center justify-center opacity-40">
            <div className="font-cyber text-slate-600 text-xl mb-2">LOCKED_SECTOR</div>
            <div className="w-1/2 h-1 bg-slate-800 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-700 w-1/4 animate-[pulse_2s_infinite]"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
