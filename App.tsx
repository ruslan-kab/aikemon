
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Divider Glow */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        
        <Features />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        
        <Showcase />
        
        {/* Pre-footer Call to Action */}
        <section className="py-24 px-6">
           <div className="container mx-auto">
             <div className="glass rounded-[3rem] p-12 md:p-24 text-center border-indigo-500/20 shadow-2xl shadow-indigo-500/5">
                <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter">Готовы изменить <span className="gradient-text">свою реальность?</span></h2>
                <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Начните использовать 40+ нейросетей прямо сейчас. Без VPN, без сложных настроек, просто и быстро.</p>
                <a 
                  href="https://example-ai-service.com/start" 
                  className="inline-block px-12 py-6 gradient-bg text-white font-black text-xl rounded-3xl shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all"
                >
                   ПОПРОБОВАТЬ БЕСПЛАТНО
                </a>
                <p className="mt-8 text-gray-500 text-sm">Карта не требуется. Отмена в любое время.</p>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
