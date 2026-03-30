/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  Rocket,
  Play,
  Target,
  MessageCircle,
  Instagram,
  ChevronDown,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Star,
  Quote,
  UserCheck,
  Stethoscope,
  PenTool,
  Shield,
  Video,
  Receipt,
  BanknoteArrowDown,
  HandCoins
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#9D50BB]/30">
      {/* Nebula Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/95 to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <SocialProofSection />
        <AboutMethodSection />
        <ModulesSection />
        <InstructorAuthoritySection />
        <MechanismSection />
        <TargetAudienceSection />
        <BonusSection />
        <OfferSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-bold tracking-widest uppercase mb-6 text-white/80">
            INSTA DESCOMPLICADO
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-normal leading-[1.1] mb-6">
            ALCANCE DE <span className="gradient-text">1.055 A 3.028 NOVOS SEGUIDORES</span> EM 4 SEMANAS{' '}
            USANDO ESTA <span className="gradient-text">FÓRMULA COMPROVADA</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
            Conheça o método de "Conversão Automática" que transforma seu Instagram em uma máquina de agendamentos, sem precisar de dancinhas, sem investir em anúncios caros e sem ser escravo da criação de conteúdo.
          </p>
          <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            Para profissionais que estão cansadas de postar "diquinhas" e querem um perfil lucrativo que venda sozinho.
          </p>

          <motion.a
            href="#oferta"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 text-lg cta-gradient animate-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO MEU PERFIL LUCRATIVO AGORA
            <Zap className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 relative w-full max-w-md lg:max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/10 shadow-2xl">
          <img
            src="static/hero2.jpeg"
            alt="Instagram Profile Mockup"
            className="rounded-[2rem] w-full object-cover aspect-[9/16]"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -right-6 top-2/4 glass-card p-4 flex items-center gap-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
              <TrendingUp className="text-blue-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/60 font-medium">Novos Seguidores</p>
              <p className="text-sm font-bold">+1.245 esta semana</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-6 bottom-1/4 glass-card p-4 flex items-center gap-3"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
              <BanknoteArrowDown className="text-green-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/60 font-medium">PIX Recebido</p>
              <p className="text-sm font-bold">R$ 300,00</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-6 bottom-6/7 glass-card p-4 flex items-center gap-3"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
              <BanknoteArrowDown className="text-green-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/60 font-medium">Compra efetuada</p>
              <p className="text-sm font-bold">R$ 236,47</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-6 bottom-1/8 glass-card p-4 flex items-center gap-3"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <Receipt className="text-yellow-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/60 font-medium">Compra agendada</p>
              <p className="text-sm font-bold">R$ 434,50</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialProofSection() {
  const feedbackImages = [
    'static/feed1.png',
    'static/feed2.png',
    'static/feed3.png',
    'static/feed4.png',
    'static/feed5.png'
  ];

  // Duplicate images for seamless infinite scroll
  const carouselImages = [...feedbackImages, ...feedbackImages, ...feedbackImages];

  return (
    <section className="py-20 px-0 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
          O que acontece quando você para de postar 'diquinhas' e aplica o método...
        </h2>
        <p className="text-white/60 text-lg">
          Resultados reais de quem saiu da confusão do algoritmo para o lucro real.
        </p>
      </div>

      <div className="relative w-full">
        {/* Continuous scrolling carousel */}
        <div className="flex gap-6 animate-scroll">
          {carouselImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <img
                src={src}
                alt={`Resultado ${index + 1}`}
                className="w-full h-auto rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutMethodSection() {
  const objectionList = [
    "Não importa se você tem poucos seguidores hoje.",
    "Não importa se você odeia fazer dancinhas ou tendências ridículas.",
    "Não importa se você não tem tempo para criar conteúdo complexo.",
    "Não importa se você nunca investiu um centavo em anúncios caros.",
    "Não importa sua frustração anterior com o algoritmo."
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Mockup Image - Left Column (Desktop) */}
        <motion.div
          className="flex-1 relative w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/10 shadow-2xl"
               style={{ boxShadow: '0 0 30px rgba(157, 80, 187, 0.6)' }} // Glow effect
          >
            {/* Placeholder for iPhone screen */}
            <img
              src="static/sobre.jpeg"
              alt="iPhone Mockup - Optimized Instagram Profile"
              className="rounded-[2rem] w-full object-cover aspect-[3/4]"
              referrerPolicy="no-referrer"
            />
            {/* Floating Elements (Agendamentos, Novos Seguidores) */}
            <motion.div
              className="absolute -right-6 top-3/4 glass-card p-4 flex items-center gap-3"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                <TrendingUp className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-medium">Novos Seguidores</p>
                <p className="text-sm font-bold">+1.873 esta semana</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-6 top-2/3 glass-card p-4 flex items-center gap-3"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                <BanknoteArrowDown className="text-green-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-medium">PIX Recebido</p>
                <p className="text-sm font-bold">R$ 432,30</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-3/4 glass-card p-4 flex items-center gap-3"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <HandCoins className="text-yellow-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-medium">Vendas</p>
                <p className="text-sm font-bold">3 novas hoje</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content - Right Column (Desktop) */}
        <div className="flex-1 glass-card p-8 md:p-12">
          <h2 className="text-2xl md:text-2xl font-black leading-tight mb-6">
            SOBRE O MÉTODO <span className="gradient-text">INSTA DESCOMPLICADO</span>
          </h2>
          <p className="text-sl text-white/70 font-medium leading-relaxed mb-6">
            O <span class="font-bold">Insta Descomplicado</span> não é apenas mais um curso de Instagram. É um método comprovado para profissionais que estão cansadas de postar "diquinhas" e querem um <span class="font-bold">perfil lucrativo</span> que venda sozinho. Enquanto outros focam em curtidas vazias, aqui você configura seu perfil para ser uma <span class="font-bold">máquina de vendas automática</span> usando apenas o seu celular.
          </p>

          <ul className="space-y-4 mb-8">
            {objectionList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-400 w-6 h-6 shrink-0 mt-1" />
                <p className="text-white/70 font-medium">{item}</p>
              </li>
            ))}
          </ul>

          <p className="text-sl text-white/70 font-medium leading-relaxed">
            O Insta Descomplicado é hoje indispensável para quem deseja destravar o faturamento da sua clínica ou serviço através de um perfil que trabalha 24h por dia por você. É o passo a passo exato para quem não tem tempo a perder e quer <span class="font-bold">resultados em menos de 7 dias</span>.
          </p>
          <p className="text-sl text-white/70 font-medium leading-relaxed mt-4">
            Sem essa arquitetura, você está apenas perdendo tempo e dinheiro no orgânico. Simples assim.
          </p>
        </div>
      </div>
    </section>
  );
}

function InstructorAuthoritySection() {
  const differentials = [
    { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, text: "Experiência Prática: Estratégias validadas diariamente em contas de alto investimento." },
    { icon: <Rocket className="w-6 h-6 text-[#00D2FF]" />, text: "Método Direto: Sem dancinhas, sem exposição ridícula e focado 100% em vendas." },
    { icon: <TrendingUp className="w-6 h-6 text-yellow-400" />, text: "Suporte Estratégico: Conteúdo com o DNA de design e conversão da Essentia." },
  ];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
        {/* Image - Left Column */}
        <motion.div
          className="flex-1 relative w-full max-w-sm lg:max-w-md xl:max-w-lg -mb-20 lg:mb-0 z-20" // z-index for overlay
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-full overflow-hidden border-4 border-[#9D50BB] shadow-lg"
               style={{ boxShadow: '0 0 40px rgba(157, 80, 187, 0.8)' }} // Glow effect
          >
            <img
              src="static/arthur_prof.jpeg"
              alt="Arthur - Estrategista de Performance"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Text Content - Right Column */}
        <motion.div
          className="flex-1 glass-card p-8 md:p-12 lg:pl-32 lg:-ml-20 z-10" // Negative margin to create overlap
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-2xl font-black leading-tight mb-6">
            QUEM VAI TE GUIAR NA CONSTRUÇÃO DO SEU PERFIL DE 6 DÍGITOS?
          </h2>
          <h3 className="text-lg font-bold mb-4">
            <span className="gradient-text">ARTHUR</span> | Estrategista de Performance & Mentor do Método
          </h3>
          <div className="relative glass-card p-6 pl-16 mb-6 border-l-4 border-[#00D2FF]"> {/* Added relative, pl-16, -ml-12 */}
            <Quote className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 text-[#9D50BB]/60" /> {/* Big purple quote icon */}
            <p className="text-sl text-white/70 font-medium italic leading-relaxed">
              Esqueça as teorias rasas de quem nunca vendeu nada no Instagram. Eu sou o Arthur, estrategista na Essentia e especialista em 'hackear' algoritmos para gerar lucro real.
            </p>
          </div>
          <p className="text-sl text-white/70 font-medium leading-relaxed mb-6">
            Com mais de <span className="font-black">8 anos</span> de experiência no campo de batalha, eu não apenas estudo o Instagram; eu domino a lógica por trás do faturamento exponencial. Já ajudei centenas de negócios a saírem da "escravidão do conteúdo" para um modelo de Conversão Automática.
          </p>
          <p className="text-sl text-white/70 font-medium leading-relaxed mb-6">
            Neste curso, eu vou abrir minhas operações e te entregar a estrutura que usamos aqui na agência. Você não vai apenas ganhar seguidores; você vai aprender a atrair de <span className="font-black">clientes</span> para o seu serviço em menos de 4 semanas.
          </p>

          <ul className="space-y-4 mb-8">
            {differentials.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {item.icon}
                <p className="text-white/70 font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function MechanismSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
          Por que o seu Instagram atual não vende?
        </h2>
        <p className="text-white/60 text-lg">
          Entenda a diferença entre ser escravo do algoritmo e ter uma máquina de vendas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Jeito Errado */}
        <motion.div
          className="glass-card p-8 border-red-500/20 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white/90">
            <XCircle className="text-red-500 w-8 h-8" />
            Por que você não vende?
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><XCircle className="text-red-500/70 w-6 h-6" /></div>
              <p className="text-white/70">Tenta entender o algoritmo e atrair apenas curiosos que nunca compram.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><XCircle className="text-red-500/70 w-6 h-6" /></div>
              <p className="text-white/70">Gasta horas no Canva criando artes complexas que ninguém vê.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><XCircle className="text-red-500/70 w-6 h-6" /></div>
              <p className="text-white/70">É refém de "posts editáveis" bonitinhos, mas zero lucro.</p>
            </li>
          </ul>
        </motion.div>

        {/* Jeito Certo */}
        <motion.div
          className="glass-card p-8 border-[#9D50BB]/50 relative overflow-hidden shadow-[0_0_30px_rgba(157,80,187,0.15)]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D2FF] to-[#9D50BB]"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <CheckCircle2 className="text-green-400 w-8 h-8" />
            Com o Insta Descomplicado
          </h3>
          {/* <p className="text-[#00D2FF] font-bold mb-6">Apresentamos a Arquitetura de Conversão Automática</p> */}
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><CheckCircle2 className="text-green-400 w-6 h-6" /></div>
              <div>
                
                <p className="text-white/70"><strong className="text-white mb-1">Foco em Intenção de Compra:</strong> não buscamos curtidas vazias, mas seguidores que já querem seu serviço.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><CheckCircle2 className="text-green-400 w-6 h-6" /></div>
              <div>
                
                <p className="text-white/70"><strong className="text-white mb-1">Efeito Bola de Neve:</strong> o algoritmo passa a trabalhar para você, não o contrário.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 min-w-[24px]"><CheckCircle2 className="text-green-400 w-6 h-6" /></div>
              <div>
                
                <p className="text-white/70"><strong className="text-white mb-1">Copie e Cole:</strong> esqueça a criação do zero; use o que já foi validado.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const modules = [
    {
      icon: <Target className="w-8 h-8 text-[#00D2FF]" />,
      title: "Bio Irresistível",
      desc: "Configure seu perfil para converter visitantes em clientes em segundos."
    },
    {
      icon: <Play className="w-8 h-8 text-[#9D50BB]" />,
      title: "Destaques Estratégicos",
      desc: "Crie uma trilha de vendas que trabalha 24h por dia para você."
    },
    {
      icon: <Instagram className="w-8 h-8 text-yellow-400" />,
      title: "Feed com Intenção",
      desc: "Aprenda a postar conteúdos que geram desejo imediato pelo seu serviço."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: "O Script do Direct",
      desc: "Como levar o seguidor do feed para o WhatsApp de forma automática."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
          O que você vai aprender no <span className="gradient-text">Insta Descomplicado</span>
        </h2>
        <p className="text-white/60 text-lg">
          O passo a passo exato para transformar seu perfil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 hover:bg-white/5 transition-colors duration-300 group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
              {mod.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">Módulo 0{idx + 1}: {mod.title}</h3>
            <p className="text-white/60 leading-relaxed">{mod.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  const audienceCards = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#9D50BB]" />,
      title: "Profissionais Liberais",
      copy: "Para quem está cansada de postar conteúdos que não convertem e deseja atrair clientes que pagam o valor que seu trabalho realmente merece."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-[#9D50BB]" />,
      title: "Donas de Clínicas de Estética",
      copy: "Para quem precisa levar o seguidor do feed para o WhatsApp e destravar o faturamento da clínica através do digital."
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#9D50BB]" />,
      title: "Criadores de Conteúdo",
      copy: "Para quem gasta horas criando artes complexas que ninguém vê e busca um método simples focado no que você fala, não apenas no design."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#9D50BB]" />,
      title: "Iniciantes no Instagram",
      copy: "Para quem quer ver os primeiros seguidores qualificados chegando em menos de 7 dias através de uma fórmula pronta para copiar e colar."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#9D50BB]" />,
      title: "Especialistas e Mentores",
      copy: "Para quem deseja crescer com autoridade e estratégia, sem precisar de dancinhas ou exposição ridícula."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#9D50BB]" />,
      title: "Empreendedores Locais",
      copy: "Para quem quer dominar o tráfego orgânico, atrair seguidores que já querem o seu serviço e gerar o 'efeito bola de neve'."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
        PARA QUEM É O <span className="gradient-text">INSTA DESCOMPLICADO</span>?
      </h2>
      <p className="text-white/60 text-lg mb-12">
        Um método rápido, validado e focado em agendamentos reais usando apenas o seu celular.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audienceCards.map((card, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-6 flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 cursor-default"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-4">
              {card.icon}
            </div>
            <h4 className="font-black text-xl mb-2">{card.title}</h4>
            <p className="text-white/60 text-base leading-relaxed">{card.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BonusSection() {
  const bonuses = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Roteiros Magnéticos de Reels",
      originalPrice: "De R$ 147,00",
      currentPrice: "R$ 0,00",
      description: "Chega de travar na hora de gravar. Receba modelos de roteiros prontos para atrair seguidores qualificados e gerar desejo imediato pelo seu serviço."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comunidade Exclusiva no WhatsApp",
      originalPrice: "De R$ 197,00",
      currentPrice: "R$ 0,00",
      description: "Você não estará sozinha. Tenha acesso ao nosso grupo exclusivo para networking, troca de estratégias com outras profissionais e suporte direto."
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
        E TEM MAIS: LEVE 2 <span className="gradient-text">BÔNUS EXCLUSIVOS</span> AO SE INSCREVER HOJE
      </h2>
      <p className="text-white/60 text-lg mb-12">
        Estes materiais foram criados para acelerar sua jornada rumo ao perfil de 6 dígitos.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {bonuses.map((bonus, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 relative flex flex-col items-center justify-between h-full animate-float" // Added animate-float
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* PRESENTE tag */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-3">
              BÔNUS
            </span>

            <div className="flex flex-col items-center mb-6">
              <div className="mb-4 p-3 rounded-full bg-white/10">
                {React.cloneElement(bonus.icon, { className: `${bonus.icon.props.className} text-[#9D50BB]` })} {/* Apply purple color */}
              </div>
              <h3 className="text-2xl font-black mb-2 gradient-text">{bonus.title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{bonus.description}</p>
            </div>

            <div className="mt-auto"> {/* Aligns pricing to the bottom */}
              <p className="text-white/40 line-through text-sm">{bonus.originalPrice}</p>
              <p className="text-green-400 font-bold text-xl">{bonus.currentPrice}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        className="glass-card p-8 md:p-12 border-[#00D2FF]/30 relative overflow-hidden text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00D2FF] to-[#9D50BB]"></div>
        
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">
          O que você <span className="gradient-text">recebe hoje</span>:
        </h2>

        <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Método Completo Insta Descomplicado
            </span>
            <span className="text-white/40 line-through">R$ 297</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Arquitetura de Conversão Automática
            </span>
            <span className="text-white/40 line-through">R$ 197</span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              BÔNUS 01: Roteiros Magnéticos de Reels
            </span>
            <span className="text-white/40 line-through">R$ 97</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              BÔNUS 02: Comunidade Exclusiva no WhatsApp
            </span>
            <span className="text-white/40 line-through">R$ 197</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-white/60 mb-2">Tudo isso valeria R$ 788,00...</p>
          <p className="text-xl font-medium mb-2">Preço Especial Hoje:</p>
          <div className="text-5xl md:text-7xl font-black tracking-tighter gradient-text mb-4">
            12x R$ 10,00
          </div>
          <p className="text-white/80">ou apenas R$ 97,00 à vista</p>
        </div>

        <motion.button
          className="w-full md:w-auto px-10 py-6 text-xl cta-gradient animate-pulse mx-auto flex items-center justify-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SIM! QUERO ACESSO IMEDIATO POR R$ 97
          <Rocket className="w-6 h-6" />
        </motion.button>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm">
          <ShieldCheck className="w-4 h-4" />
          Compra 100% Segura e Acesso Imediato
        </div>
      </motion.div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Preciso de computador?",
      a: "Não, o método é focado em usar apenas o celular."
    },
    {
      q: "Tenho pouco tempo, serve para mim?",
      a: "Sim, o método é 'pronto para copiar e colar', feito para quem não tem tempo a perder."
    },
    {
      q: "Como recebo o acesso?",
      a: "Imediatamente após a compra no seu e-mail, via plataforma Kiwify."
    },
    {
      q: "Preciso fazer dancinhas?",
      a: "Absolutamente não. O foco é conversão técnica, não exposição ridícula."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="glass-card p-8 mb-16 text-center border-green-400/30">
        <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">7 Dias de Garantia Incondicional</h3>
        <p className="text-white/70">
          Teste o método de "copiar e colar" e veja os primeiros seguidores qualificados em menos de 7 dias. Satisfação garantida ou seu dinheiro de volta.
        </p>
      </div>

      <h2 className="text-3xl font-black tracking-tighter mb-8 text-center">
        Perguntas Frequentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-white/60 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10 mt-20">
      <div className="flex justify-center gap-6 mb-6 text-sm text-white/40">
        <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
      </div>
      <p className="text-white/30 text-sm">
        Copyright © 2026 – Insta Descomplicado.
      </p>
    </footer>
  );
}
