
import React from 'react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Code, 
  Music, 
  Video, 
  Layers
} from 'lucide-react';
import { FEATURES, MODELS } from '../constants';

const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return <MessageSquare />;
      case 'ImageIcon': return <ImageIcon />;
      case 'Code': return <Code />;
      case 'Music': return <Music />;
      case 'Video': return <Video />;
      default: return <Layers />;
    }
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Всё, что нужно для <br/><span className="gradient-text">продуктивности</span></h2>
          <p className="text-gray-400 text-lg">Больше не нужно платить за 10 разных подписок. NeuralHub объединяет мировых лидеров AI в одном месте.</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {FEATURES.map((feature, i) => (
            <div key={i} className="p-8 glass rounded-3xl hover:bg-white/[0.05] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Models List */}
        <div id="models" className="mt-20">
           <div className="flex items-center gap-4 mb-12">
             <div className="h-px bg-white/10 flex-grow"></div>
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Каталог популярных моделей</h3>
             <div className="h-px bg-white/10 flex-grow"></div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MODELS.map((model) => (
                <div key={model.id} className="flex items-center gap-4 p-5 glass rounded-2xl hover:border-indigo-500/30 transition-all cursor-default">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    {getIcon(model.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{model.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{model.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center p-5 glass rounded-2xl border-dashed border-white/20 bg-transparent text-gray-500 font-bold hover:text-white transition-colors cursor-pointer group">
                 <span>И ещё 35+ моделей...</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
