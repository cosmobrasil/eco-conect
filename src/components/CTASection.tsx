import React, { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  CheckCircle, 
  Mail, 
  MessageSquare, 
  X,
  Send,
  Zap,
  PhoneCall
} from "lucide-react";

export default function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  
  // Demo states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("Construção Civil");

  // Chat states
  const [chatMessage, setChatMessage] = useState("");
  const [chatLog, setChatLog] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Olá! Sou o assistente cognitivo Eco-Agente. Em qual setor produtivo você gostaria de otimizar os fluxos de materiais hoje?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoFormSubmitted(true);
    setTimeout(() => {
      // simulate completed
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userText = chatMessage;
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setChatMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "Legal! Esse setor possui uma margem de reaproveitamento fantástica baseada nas patentes registradas COSMOB. Gostaria de agendar uma reunião de diagnóstico de 15 minutos para rodarmos os números juntos?";
      if (userText.toLowerCase().includes("têxtil") || userText.toLowerCase().includes("moda") || userText.toLowerCase().includes("roupa")) {
        reply = "Para a cadeia textil, nosso eco-agente cruza sobras de polímeros e tecelagens com indústrias de mantas termoacústicas automotivas. Isso reduz o custo de descarte a zero. Qual o volume mensal gerado na sua fábrica?";
      } else if (userText.toLowerCase().includes("construção") || userText.toLowerCase().includes("obra") || userText.toLowerCase().includes("gesso")) {
        reply = "Na Construção Civil, podemos reincorporar até 58% do entulho Classe A britado em argamassas secundárias locais. Quer agendar uma call de demonstração rápida para mapearmos os parceiros logísticos próximos a você?";
      } else if (userText.toLowerCase().includes("laticínio") || userText.toLowerCase().includes("leite") || userText.toLowerCase().includes("soro")) {
        reply = "O lactosoro concentrado de laticínios possui alto valor no mercado de proteínas. Nosso SaaS simula essa filtragem de biofertilizantes e WPC em tempo real. Qual a sua capacidade diária de processamento em litros?";
      }
      setChatLog(prev => [...prev, { sender: "bot", text: reply }]);
    }, 1000);
  };

  return (
    <section id="chamada-final" className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative text-center space-y-8">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950 border border-emerald-500/20 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-emerald-300">
            Pronto para Iniciar?
          </span>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-5xl tracking-normal leading-tight">
            Transforme Dados em Circularidade.
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-400 leading-relaxed">
            Conecte sua empresa, setor ou território a uma nova geração de inteligência baseada em IA.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded hover:bg-emerald-400 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center gap-2"
          >
            Solicitar Demonstração
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="px-8 py-4 border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider rounded hover:bg-white/5 transition cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Falar com Assistente</span>
          </button>
        </div>

        {/* Small disclosure */}
        <p className="text-[10px] text-zinc-600 font-mono">
          © Parceria Homologada COSMOB Itália. Soluções 100% de acordo com as leis ambientais.
        </p>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE DEMOS FORM POPUP */}
        {/* ---------------------------------------------------- */}
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-white/10 rounded-xl w-full max-w-md p-6 relative text-left shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => {
                  setIsDemoModalOpen(false);
                  setDemoFormSubmitted(false);
                }}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {demoFormSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-900 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-[#fcfcfc] text-xl">Sua Demo foi Agendada!</h4>
                    <p className="text-xs text-zinc-400">Enviamos instruções detalhadas e uma sala de reuniões virtual COSMOB para o email:</p>
                    <p className="font-mono text-emerald-300 text-xs font-bold">{email}</p>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono">Em breve, um especialista sênior de circularidade da ECO CONECT entrará em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">// AGENDAR CALL DE DIAGNÓSTICO</span>
                      <h3 className="font-display font-extrabold text-base text-white">Solicitar Demonstração</h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400">Insira suas coordenadas abaixo para rodarmos um diagnóstico rápido e personalizado da sua planta:</p>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 block uppercase">Seu Nome</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Roberto Albuquerque"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-white/5 rounded px-3 py-2 text-xs focus:border-emerald-400 text-white" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 block uppercase">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: roberto@industrial.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-white/5 rounded px-3 py-2 text-xs focus:border-emerald-400 text-white" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 block uppercase">Nome da Empresa</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Cerâmica Sul S/A"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-950 border border-white/5 rounded px-3 py-2 text-xs focus:border-emerald-400 text-white" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 block uppercase">Setor de Atuação</label>
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-slate-950 border border-white/5 rounded px-3 py-2 text-xs focus:border-emerald-400 text-white"
                    >
                      <option>Construção Civil</option>
                      <option>Moda e Confecção</option>
                      <option>Laticínios</option>
                      <option>Madeira e Móveis</option>
                      <option>Náutica</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full text-center py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded transition mt-2 cursor-pointer"
                  >
                    Confirmar Solicitação de Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE FLOATING LIVE CHAT SIMULATOR PANEL */}
        {/* ---------------------------------------------------- */}
        {isChatOpen && (
          <div className="fixed bottom-6 top-6 sm:top-auto sm:bottom-28 right-6 z-50 w-full max-w-sm glass-card-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
            
            {/* Chat header */}
            <div className="bg-slate-900 border-b border-white/10 py-3.5 px-4 flex justify-between items-center bg-gradient-to-r from-slate-900 to-emerald-950">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <div className="text-left">
                  <h4 className="text-xs font-display font-extrabold text-white leading-none">ECO-AGENTE COGNITIVO</h4>
                  <span className="text-[8px] font-mono text-zinc-500 leading-none block mt-1">Conectado • Resposta Instantânea</span>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Log lists */}
            <div className="flex-1 bg-slate-950 p-4 overflow-y-auto space-y-3 flex flex-col justify-start text-left">
              {chatLog.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] rounded-lg p-3 text-xs leading-relaxed font-sans ${
                    msg.sender === "bot" 
                      ? "bg-slate-900 text-zinc-200 self-start border border-white/5" 
                      : "bg-emerald-500 text-slate-950 self-end font-semibold shadow-md"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}

              {isTyping && (
                <div className="bg-slate-900 p-3 text-zinc-500 text-[10px] rounded self-start flex items-center gap-1.5 font-mono border border-white/5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Eco-Agente está processando simulações...
                </div>
              )}
            </div>

            {/* Chat input form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-white/10 flex gap-2 flex-nowrap items-center">
              <input 
                type="text" 
                placeholder="Ex: Como otimizar resíduo Têxtil?" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 bg-slate-950 border border-white/5 rounded px-3 py-2 text-xs focus:border-emerald-400 text-zinc-300" 
              />
              <button 
                type="submit"
                className="p-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded cursor-pointer transition shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
