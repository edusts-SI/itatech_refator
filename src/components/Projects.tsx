import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Menu, User, Lock, Eye, Play, Apple } from 'lucide-react';

const projects = [
  { 
    id: 'g2psi', 
    name: 'G2PSI',
    category: 'Sistemas Públicos',
    desc: 'Projeto desenvolvido por alunos da Universidade Federal de Sergipe para informatização da gestão pública, melhorando processos internos.',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  { 
    id: 'batala', 
    name: 'Batalá',
    category: 'Sistema de Gestão',
    desc: 'Plataforma de acesso restrito para gestão de membros e atividades do grupo Batalá Sergipe, com controle de autenticação e perfis.',
    tags: ['Next.js', 'Auth', 'Tailwind']
  },
  { 
    id: 'borala', 
    name: 'Boralá',
    category: 'Mobile App',
    desc: 'Aplicativo cultural e musical para conectar entusiastas da música, divulgar eventos e facilitar a mobilidade urbana até os locais.',
    tags: ['React Native', 'Firebase', 'Maps API']
  },
  { 
    id: 'meubraz', 
    name: 'Meu Braz',
    category: 'Fintech / App',
    desc: 'Landing page para download do aplicativo financeiro Meu Braz, focada em conversão para as lojas de aplicativos.',
    tags: ['Vue', 'Marketing', 'AWS']
  },
  { 
    id: 'guardioes', 
    name: 'Guardiões dos Polinizadores',
    category: 'Portal Educacional',
    desc: 'Plataforma web para mapeamento e conscientização ambiental, incentivando o voluntariado na preservação da biodiversidade.',
    tags: ['React', 'Educação', 'MongoDB']
  },
];

const MockupG2PSI = () => (
  <div className="w-full h-full bg-[#1c1c1c] text-white flex flex-col p-4 font-sans">
    <div className="flex justify-between items-center mb-10 mt-4">
      <div className="font-bold text-2xl tracking-tighter flex items-center">
        G2<span className="text-[#00e676]">PSI</span>
      </div>
      <Menu className="text-[#00e676] w-6 h-6" />
    </div>
    
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4 leading-tight">Pesquisa e inovação <br/>em TI</h2>
      <p className="text-[#00e676] text-xs font-semibold px-4 mb-12">Grupo de Pesquisa e Prática em<br/>Sistemas de Informação</p>
      
      <div className="w-32 h-32 flex items-center justify-center mb-12">
        <div className="relative flex items-center justify-center">
          <span className="text-white font-bold text-[5rem] leading-none">G</span>
          <span className="text-[#00e676] font-bold text-[5rem] leading-none -ml-2">2</span>
          <div className="absolute bottom-4 left-1/2 -translate-x-3 w-4 h-4 bg-white transform rotate-45 border-r-4 border-b-4 border-[#1c1c1c]"></div>
        </div>
      </div>
      
      <h3 className="text-3xl font-bold mb-4">Um pouco <br/>sobre nós</h3>
      <p className="text-gray-300 text-[10px] px-2 leading-relaxed">
        Aqui você encontrará uma variedade<br/>de projetos inovadores que<br/>abrangem diversas áreas. Nossos<br/>estudantes e professores estão
      </p>
    </div>
  </div>
);

const MockupBatala = () => (
  <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center p-4">
    <div className="w-full bg-[#e8eaed] rounded-xl border border-red-500/30 p-5 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-black"></div>
      
      <div className="flex justify-center mb-6 mt-2">
        <div className="w-24 h-24 rounded-full bg-black flex flex-col items-center justify-center text-white border-2 border-red-600 relative">
          <span className="text-[8px] font-bold tracking-widest mt-2 uppercase">Batala</span>
          <div className="flex-1 flex items-center justify-center w-full relative">
            <div className="absolute inset-0 border-[0.5px] border-white/20 transform rotate-45"></div>
            <span className="text-3xl font-black text-red-600 z-10">B</span>
          </div>
          <span className="text-[7px] font-bold tracking-widest mb-2 uppercase">Sergipe</span>
        </div>
      </div>
      
      <div className="space-y-4 w-full">
        <div>
          <label className="block text-black text-xs font-medium mb-1">CPF</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <User className="w-4 h-4 text-gray-500" />
            </div>
            <input type="text" className="w-full bg-white border-none py-2 pl-8 pr-3 text-sm focus:ring-0" />
          </div>
        </div>
        
        <div>
          <label className="block text-black text-xs font-medium mb-1">Senha</label>
          <div className="relative border-b-2 border-black pb-1">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-gray-700" />
            </div>
            <input type="password" value="*********" readOnly className="w-full bg-white border-none py-2 pl-8 pr-8 text-sm focus:ring-0" />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              <Eye className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 pt-1">
          <input type="checkbox" className="w-3 h-3 rounded-sm border-gray-400" />
          <span className="text-xs text-gray-700">Permanecer Conectado</span>
        </div>
        
        <button className="w-full bg-[#6c757d] text-white py-2.5 rounded-md text-sm font-medium mt-2">
          Entrar
        </button>
        
        <div className="text-center mt-3">
          <a href="#" className="text-[#0d6efd] text-[10px] underline">Esqueceu a senha? Clique aqui</a>
        </div>
      </div>
    </div>
  </div>
);

const MockupBorala = () => (
  <div className="w-full h-full bg-white flex items-center justify-center p-4">
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Decorative background elements simulating the logo's complex background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full h-24 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      {/* Main Logo Text */}
      <div className="relative z-10 font-black text-[3.5rem] tracking-tighter flex transform -rotate-2">
        <span className="text-white text-shadow-blue">B</span>
        <span className="text-white text-shadow-blue">O</span>
        <span className="text-white text-shadow-blue">R</span>
        <span className="text-white text-shadow-blue">A</span>
        <span className="text-white text-shadow-blue">L</span>
        <span className="text-white text-shadow-blue">Á</span>
      </div>

      <style>{`
        .text-shadow-blue {
          -webkit-text-stroke: 1.5px #1e3a8a;
          text-shadow: 
            3px 3px 0 #1e3a8a,
            -1px -1px 0 #1e3a8a,
            1px -1px 0 #1e3a8a,
            -1px 1px 0 #1e3a8a,
            1px 1px 0 #1e3a8a;
        }
      `}</style>
    </div>
  </div>
);

const MockupMeuBraz = () => (
  <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
    {/* Header */}
    <div className="bg-[#38d9a9] py-4 flex justify-center items-center relative z-10">
      <div className="flex items-center gap-1">
        <div className="relative flex">
           <div className="w-3 h-3 rounded-full bg-[#6741d9]"></div>
           <div className="w-4 h-4 rounded-full bg-[#6741d9] absolute -bottom-1 -right-1"></div>
        </div>
        <span className="text-[#6741d9] font-bold text-2xl tracking-tight ml-1">braz</span>
      </div>
    </div>
    
    {/* Colorful Banner */}
    <div className="h-3 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 flex items-center justify-between px-1">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full transform rotate-45"></div>
      ))}
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-[#183153] font-bold text-xl leading-snug mb-10">
        Acesse o Meu Braz pelo seu smartphone
      </h2>
      
      <div className="space-y-4 w-full px-4">
        {/* App Store Button */}
        <div className="bg-black text-white rounded-lg p-2.5 flex items-center gap-3 w-full justify-center">
          <Apple className="w-6 h-6" fill="white" />
          <div className="text-left flex flex-col">
            <span className="text-[8px] text-gray-300">Disponível na</span>
            <span className="text-lg font-semibold leading-tight">App Store</span>
          </div>
        </div>
        
        {/* Google Play Button */}
        <div className="bg-black text-white rounded-lg p-2.5 flex items-center gap-3 w-full justify-center">
          <Play className="w-6 h-6 text-blue-400" fill="currentColor" />
          <div className="text-left flex flex-col">
            <span className="text-[8px] text-gray-300">DISPONÍVEL NO</span>
            <span className="text-lg font-semibold leading-tight">Google Play</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer Pattern */}
    <div className="h-8 w-full bg-[#1c7ed6] mt-auto relative overflow-hidden flex items-center justify-center gap-2">
       {[...Array(6)].map((_, i) => (
         <div key={i} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-0.5 bg-blue-800"></div>
         </div>
       ))}
    </div>
    <div className="h-1 w-full bg-green-400"></div>
  </div>
);

const MockupGuardioes = () => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">
    <div className="bg-[#3e2723] px-4 py-2 flex justify-between items-center text-white text-[10px]">
      <div className="flex items-center gap-2 opacity-80">
        <span>spolinizadores.com.br</span>
      </div>
      <div className="flex gap-2 opacity-80">
        <Play className="w-3 h-3" />
        <Menu className="w-3 h-3" />
      </div>
    </div>
    
    <div className="bg-[#a5d6a7] px-4 py-1 flex gap-2 text-[#1b5e20] text-[10px] font-medium">
      <span>saiba mais</span>
      <span className="opacity-50">♦</span>
      <span>guardiões</span>
    </div>
    
    <div className="px-4 py-1">
      <span className="text-[#004d40] text-[10px] font-bold">English</span>
    </div>

    <div className="flex-1 relative mt-2">
      {/* Hexagon Layout Simulation */}
      <div className="absolute top-0 right-4 w-24 h-28 bg-[#e6b840] transform rotate-12 opacity-80" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
      <div className="absolute top-4 left-4 w-16 h-20 bg-[#6b9b6d]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
      
      <div className="absolute top-16 left-12 w-48 h-56 bg-[#a5d6a7] z-10 flex items-center justify-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
         <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded flex flex-col items-center justify-center shadow-inner relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            {/* Simulating the flower photo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-orange-400 to-orange-600"></div>
            <div className="w-12 h-12 bg-black/40 rounded-full blur-md absolute"></div>
         </div>
      </div>
      
      <div className="absolute top-32 left-4 w-20 h-20 border-2 border-pink-600 rounded-full"></div>
      
      <div className="absolute bottom-28 right-2 w-28 h-32 bg-[#4caf50] z-20 flex items-center justify-center overflow-hidden border-2 border-green-800" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
         <div className="w-full h-full bg-green-700/80 flex items-center justify-center">
           {/* Simulating leaves */}
           <div className="w-16 h-16 bg-green-500 rounded-tl-full rounded-br-full rotate-45 shadow-lg"></div>
         </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 px-6 text-center z-30 bg-white/90 pb-4 pt-8 bg-gradient-to-t from-white via-white to-transparent">
        <h3 className="text-red-600 font-bold text-lg mb-2">Venha ser um guardião!</h3>
        <p className="text-black text-[9px] leading-tight text-justify">
          Os participantes voluntários através do sistema têm a oportunidade de ampliar os seus conhecimentos sobre a importância da biodiversidade e dos serviços ecossistêmicos para o bem-estar humano e de se engajarem em ações de conservação e uso sustentável.
        </p>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [activeId, setActiveId] = useState('g2psi');
  const activeProject = projects.find(p => p.id === activeId);

  const renderMockup = () => {
    switch(activeId) {
      case 'g2psi': return <MockupG2PSI />;
      case 'batala': return <MockupBatala />;
      case 'borala': return <MockupBorala />;
      case 'meubraz': return <MockupMeuBraz />;
      case 'guardioes': return <MockupGuardioes />;
      default: return <MockupG2PSI />;
    }
  };

  return (
    <section id="projetos" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="w-full lg:w-5/12 order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            {/* High-tech Mobile Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[620px] mx-auto bg-slate-950 rounded-[3rem] p-3 shadow-2xl border border-slate-800 flex flex-col"
            >
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30 pointer-events-none">
                <div className="w-1/3 h-full bg-slate-950 rounded-b-2xl"></div>
              </div>
              
              <div className="relative w-full h-full bg-[#050814] rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeId}
                     initial={{ opacity: 0, filter: 'blur(10px)' }}
                     animate={{ opacity: 1, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, filter: 'blur(10px)' }}
                     transition={{ duration: 0.4 }}
                     className="w-full h-full"
                   >
                     {renderMockup()}
                   </motion.div>
                 </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Sucesso.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Explorando arquiteturas complexas para entregar soluções simples, elegantes e de alto impacto.
            </p>

            <div className="flex flex-col gap-3">
              {projects.map((p) => {
                const isActive = activeId === p.id;
                return (
                  <button 
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                      ? 'border-blue-500/50 bg-blue-500/10 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                      : 'border-slate-800 bg-slate-900/20 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <h4 className={`font-bold text-xl transition-colors ${isActive ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>
                        {p.name}
                      </h4>
                      <p className={`text-sm mt-1 transition-colors ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {p.category}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all ${isActive ? 'text-blue-400 translate-x-2' : 'text-slate-600 group-hover:text-slate-400'}`} />
                  </button>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

