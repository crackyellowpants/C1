
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_SERIES } from '../data';

const SeriesView: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const series = ALL_SERIES.find(s => s.id === seriesId);

  if (!series) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-cyber text-pink-500">404: SECTOR_NOT_FOUND</h2>
        <Link to="/" className="mt-4 inline-block text-cyan-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <Link to="/" className="text-xs font-cyber text-slate-500 hover:text-cyan-400 mb-4 inline-block">
          &lt; BACK_TO_ROOT
        </Link>
        <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <h2 className="text-5xl font-cyber neon-text-cyan">{series.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {series.characters.map((char) => (
          <Link 
            key={char.id} 
            to={`/series/${series.id}/character/${char.id}`}
            className="group relative border border-slate-800 bg-slate-900/50 overflow-hidden transition-all hover:border-pink-500/50"
          >
            {/* 이미지 확대가 하단 영역을 침범하지 않도록 overflow-hidden 추가 */}
            <div className="aspect-[1216/832] relative overflow-hidden">
              <img 
                src={char.imageUrl} 
                alt={char.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
                <div className="text-[10px] font-cyber text-pink-500 mb-1">IDENTIFIED_TARGET</div>
                <h3 className="font-cyber text-4xl text-white group-hover:neon-text-pink transition-all">
                  {char.name}
                </h3>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-800/50 flex justify-between items-center group-hover:bg-pink-500/10 transition-colors px-6 relative z-10 bg-slate-900/90">
              <span className="text-xs font-cyber text-slate-500 tracking-widest">{char.gender}</span>
              <span className="text-xs font-cyber text-cyan-500 group-hover:animate-pulse">ACCESS_DATA_STREAM_&gt;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeriesView;
