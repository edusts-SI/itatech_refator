export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-[#03050a] border-t border-slate-800 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                &lt;itatech<span className="text-blue-500 text-lg">jr</span>&gt;
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engenharia de software premium. Construindo o futuro digital para empresas que buscam excelência, performance e escalabilidade.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Empresa</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Expertise</a></li>
                <li><a href="#projetos" className="hover:text-blue-400 transition-colors">Cases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Conexões</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Fale Conosco</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <p>© {new Date().getFullYear()} Itatech Jr. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
             <span>Operando de Itabaiana, SE - Brasil</span>
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
