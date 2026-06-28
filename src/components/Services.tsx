import { Monitor, LayoutGrid, Smartphone, MessageSquare, Clock, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Desenvolvimento Web",
    desc: "Sites e aplicações web modernas, responsivas e otimizadas para performance máxima.",
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Sistemas Sob Medida",
    desc: "Arquiteturas complexas e sistemas personalizados para resolver os desafios únicos do seu negócio.",
    colSpan: "md:col-span-1 lg:col-span-2"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e cross-platform com interfaces fluidas e excelente experiência do usuário.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "APIs e Integrações",
    desc: "Criação de backends robustos, APIs REST/GraphQL e integração com sistemas de terceiros.",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Automação",
    desc: "Scripts e automações para eliminar trabalhos repetitivos.",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Consultoria Tech",
    desc: "Auditoria de código e planejamento estratégico.",
    colSpan: "md:col-span-2 lg:col-span-2"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Nossas Verticais</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Engenharia que <span className="text-slate-500">escala resultados.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 rounded-[2rem] group hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300 ${svc.colSpan}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
