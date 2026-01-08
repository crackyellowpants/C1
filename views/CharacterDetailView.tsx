
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_SERIES, EMOTIONS } from '../data';

const CharacterDetailView: React.FC = () => {
  const { seriesId, characterId } = useParams<{ seriesId: string; characterId: string }>();
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeEmotion, setActiveEmotion] = useState<string>('일반');
  
  const series = ALL_SERIES.find(s => s.id === seriesId);
  const character = series?.characters.find(c => c.id === characterId);

  if (!series || !character) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-cyber text-pink-500">404: IDENTITY_UNKNOWN</h2>
        <Link to="/" className="mt-4 inline-block text-cyan-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  // 요청하신 정확한 복사 양식 적용 (중복 마침표 제거 및 템플릿 한 줄 추가)
  const copyFormat = `# 주요 주변인물
- 이름|성별|외모|성격|좋아하는 것|싫어하는 것|잘하는 것|못하는 것|말투|배경.
- ${character.name}|${character.gender}|${character.appearance}|${character.personality}|${character.likes}|${character.dislikes}|${character.skills}|${character.weaknesses}|${character.speechStyle}|${character.background}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(copyFormat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { label: '성별', value: character.gender },
    { label: '외모', value: character.appearance },
    { label: '성격', value: character.personality },
    { label: '좋아하는 것', value: character.likes },
    { label: '싫어하는 것', value: character.dislikes },
    { label: '잘하는 것', value: character.skills },
    { label: '못하는 것', value: character.weaknesses },
    { label: '말투', value: character.speechStyle },
    { label: '배경', value: character.background },
  ];

  const handleSelectImage = (img: string, emotion: string) => {
    setActiveImage(img);
    setActiveEmotion(emotion);
  };

  const handleReset = () => {
    setActiveImage(null);
    setActiveEmotion('일반');
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="mb-8">
        <Link to={`/series/${seriesId}`} className="text-xs font-cyber text-slate-500 hover:text-cyan-400 mb-4 inline-block">
          &lt; BACK_TO_SERIES
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Top: Header and Primary Image */}
        <section className="space-y-8">
          <div className="relative border border-cyan-500 p-1 md:p-2 neon-border bg-slate-900/40">
            <div className="aspect-[1216/832] overflow-hidden bg-black">
                <img 
                  src={activeImage || character.imageUrl} 
                  alt={character.name} 
                  className="w-full h-full transition-all duration-700 object-cover"
                />
            </div>
            {/* Status Label - Scaled for mobile */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-slate-950/80 px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-cyber text-cyan-400 border border-cyan-500/50 backdrop-blur-sm">
              EMOTION: {activeEmotion.toUpperCase()} <span className="hidden sm:inline">// STATUS: ACCESS_GRANTED</span>
            </div>
            
            {/* Name and ID Card - Scaled for mobile */}
            <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 p-2 md:p-4 bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md max-w-[80%]">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-cyber neon-text-cyan truncate">{character.name}</h1>
                <div className="text-[8px] md:text-xs font-cyber text-pink-500 mt-1 md:mt-2 tracking-[0.2em] md:tracking-[0.3em]">ID: {character.id.toUpperCase()}</div>
            </div>
            
            {activeImage && (
              <button 
                onClick={handleReset}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-pink-500 text-slate-950 px-2 py-1 text-[8px] md:text-[10px] font-cyber hover:bg-pink-400 transition-colors shadow-[0_0_10px_#f472b6]"
              >
                RESET
              </button>
            )}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="font-cyber text-lg md:text-xl text-pink-500 neon-text-pink uppercase tracking-widest">Visual_Log_Archive</h2>
            <div className="h-px flex-grow bg-slate-800"></div>
            <span className="font-cyber text-[8px] md:text-[10px] text-slate-600">18_RECORDS</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {character.galleryImages.map((img, idx) => {
              const emotionName = EMOTIONS[idx];
              return (
                <div 
                  key={idx}
                  onClick={() => handleSelectImage(img, emotionName)}
                  className={`group relative border aspect-[1216/832] cursor-pointer overflow-hidden transition-all duration-300 ${
                    activeImage === img ? 'border-pink-500 neon-border scale-95' : 'border-slate-800 hover:border-cyan-500'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${character.name} ${emotionName}`} 
                    className="w-full h-full object-cover transition-all"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 bg-slate-950/80 px-1 text-[7px] md:text-[8px] font-cyber text-slate-300">
                    {emotionName}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Info Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
          {categories.map((cat) => (
            <div key={cat.label} className="border-b border-slate-800 pb-4 group">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-1 h-4 bg-cyan-500 group-hover:bg-pink-500 transition-colors"></div>
                <h3 className="font-cyber text-xs md:text-sm text-cyan-500 uppercase tracking-widest group-hover:neon-text-cyan">{cat.label}</h3>
              </div>
              <p className="text-slate-200 leading-relaxed font-light pl-3 group-hover:text-white transition-colors text-sm md:text-base">
                {cat.value}
              </p>
            </div>
          ))}
        </section>

        {/* Copy Area */}
        <section className="p-4 md:p-6 bg-slate-900/50 border border-dashed border-cyan-500/30 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
              <h4 className="font-cyber text-[10px] md:text-xs text-slate-400">USERNOTE_ACCESS</h4>
            </div>
            <button 
              onClick={handleCopy}
              className={`w-full sm:w-auto px-4 py-2 font-cyber text-[10px] md:text-xs transition-all flex items-center justify-center space-x-2 ${
                copied ? 'bg-green-600 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-slate-950'
              }`}
            >
              <span>{copied ? 'COPIED!' : 'COPY_TO_CLIPBOARD'}</span>
              {copied && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          </div>
          <pre className="bg-black/50 p-3 md:p-4 text-[9px] md:text-[11px] text-slate-400 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed border border-slate-800">
            {copyFormat}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default CharacterDetailView;
