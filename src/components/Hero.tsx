import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-12">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-mono font-medium tracking-wide text-blue-200">18 Anos de Excelência em Software</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]"
        >
          Transformando Ideias em <br className="hidden md:block"/>
          <span className="text-gradient-blue">Soluções Digitais.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Somos a Itatech, a empresa júnior de engenharia e tecnologia da UFS. 
          Arquitetamos aplicações web e mobile de alta performance, escaláveis e 
          desenhadas para o futuro do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="#contato"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projetos"
            className="w-full sm:w-auto glass-card text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 group hover:bg-white/5 transition-colors"
          >
            <Terminal className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            Explorar Projetos
          </a>
        </motion.div>
      </div>

      {/* Code snippet decoration */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 opacity-30 pointer-events-none"
      >
        <div className="h-32 w-full rounded-t-3xl border-t border-x border-slate-800 bg-slate-950/50 backdrop-blur-sm p-6 overflow-hidden mask-image-gradient">
          <pre className="text-sm font-mono text-blue-400/50">
            <code>
{`function initializeProject(client: Client): Solution {
  const requirements = gatherRequirements(client);
  const architecture = designArchitecture(requirements);
  return develop(architecture, {
    scalable: true,
    performance: 'optimal',
    stack: ['React', 'Node.js', 'PostgreSQL']
  });
}`}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
