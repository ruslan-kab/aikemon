
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-indigo-400 text-sm font-semibold mb-8 animate-bounce">
          <Sparkles size={16} />
          <span>40+ топовых нейросетей в одной подписке</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Будущее интеллекта <br />
          <span className="gradient-text">уже в ваших руках</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          Создавайте шедевры, пишите идеальный код и анализируйте данные с помощью лучших мировых AI моделей. Без ограничений, без границ, мгновенно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={SERVICE_URL}
            className="group px-8 py-5 bg-white text-black rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            Начать творить
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-5 glass rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors">
            Смотреть демо
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { label: 'Моделей', value: '40+' },
            { label: 'Пользователей', value: '150k+' },
            { label: 'Генераций в день', value: '1M+' },
            { label: 'Точность', value: '99.9%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Visual Mockup */}
      <div className="mt-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative glass rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden float-animation">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
           <img 
              src="https://picsum.photos/seed/interface/1200/600" 
              alt="Platform Interface" 
              className="w-full rounded-2xl object-cover h-[300px] md:h-[500px] opacity-80"
           />
           <div className="absolute bottom-8 left-8 z-20 text-left">
              <div className="text-white font-bold text-xl md:text-2xl mb-2">Интуитивный хаб нейросетей</div>
              <p className="text-gray-300 text-sm md:text-base max-w-md">Переключайтесь между ChatGPT, Midjourney и Claude в один клик.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
