import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Terminal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.details) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setStatus('success');
      setFormData({ name: '', email: '', details: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
    }
  };

  return (
    <section id="contato" className="py-32 relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700 mb-6">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-slate-300">init_connection()</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Pronto para <br/>escalar sua <br/><span className="text-blue-500">operação?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Nossos engenheiros estão a postos para entender seus desafios e desenhar a arquitetura ideal para o seu próximo grande projeto.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Comunicação Direta</h4>
                    <p className="text-white font-medium text-lg">contato@itatechjr.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Base de Operações</h4>
                    <p className="text-white font-medium text-lg">Itabaiana, Sergipe (SE) - UFS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 rounded-[2rem] relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-400 font-bold text-xs tracking-wider uppercase mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="João Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-bold text-xs tracking-wider uppercase mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="joao@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-slate-400 font-bold text-xs tracking-wider uppercase mb-2">Detalhes do Projeto</label>
                <textarea 
                  rows={5}
                  placeholder="Descreva brevemente o desafio tecnológico que você quer resolver..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors resize-none"
                ></textarea>
              </div>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Transmitindo...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Transmitir Requisitos
                  </>
                )}
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
