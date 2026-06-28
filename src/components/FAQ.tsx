import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "O que é uma Empresa Júnior?",
    a: "Somos uma associação civil gerida por estudantes universitários da UFS. Unimos o rigor e conhecimento acadêmico à prática de mercado para entregar soluções tecnológicas de alta qualidade e com excelente custo-benefício, tudo com a supervisão de professores doutores."
  },
  {
    q: "Quais soluções vocês desenvolvem?",
    a: "Desenvolvemos sistemas web complexos, plataformas SaaS, aplicativos nativos e cross-platform, integrações de APIs, e automações de infraestrutura em nuvem, utilizando stacks modernas como React, Node, Python e AWS."
  },
  {
    q: "Como funciona o suporte pós-entrega?",
    a: "A entrega do projeto é apenas o início. Oferecemos pacotes de SLA para suporte, monitoramento contínuo da aplicação, e garantia técnica estendida contra qualquer anomalia no escopo acordado."
  },
  {
    q: "Qual o prazo médio de desenvolvimento?",
    a: "O prazo varia conforme a complexidade da arquitetura e as integrações necessárias. Projetos iniciais podem levar de 4 a 6 semanas, enquanto plataformas corporativas podem demandar ciclos trimestrais com entregas ágeis contínuas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-400 text-lg">Transparência em cada etapa do processo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-blue-500/50 bg-slate-900/60' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-700 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
