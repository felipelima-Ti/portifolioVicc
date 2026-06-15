"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Building2, Home, Palette, Lightbulb, Trees, Ruler, ArrowRight, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import casa from "../../public/coz.png"
import vic from "../../public/vic.jpeg"
import Typewriter from "./hooks/typewriter";
import { Menu, X } from "lucide-react";



const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  { icon: Home, title: "Arquitetura Residencial", desc: "Projetos de casas e apartamentos que combinam conforto, funcionalidade e estética personalizada." },
  { icon: Building2, title: "Arquitetura Comercial", desc: "Espaços corporativos e comerciais que otimizam a experiência de trabalho e fortalecem marcas." },
  { icon: Palette, title: "Design de Interiores", desc: "Transformação de ambientes internos com seleção de materiais, mobiliário e iluminação." },
  { icon: Lightbulb, title: "Lighting Design", desc: "Projetos de iluminação que valorizam a arquitetura e criam atmosferas únicas." },
  { icon: Trees, title: "Paisagismo", desc: "Integração harmoniosa entre arquitetura e natureza através de projetos de áreas externas." },
  { icon: Ruler, title: "Reforma & Retrofit", desc: "Renovação de espaços existentes mantendo a essência e agregando modernidade." },
];

const experiences = [
  { place: "Comercial Ivapora", role: "Design de interiores", time: "1 ano e 3 meses",img:"/comercio.jpeg" },
  { place: "Solução Network", role: "Comprador — Obras", time: "2 anos e 1 mês",img:"comprador.jpeg" },
  { place: "JD Vidros e Esquadrias", role: "Projetista CAD", time: "5 meses",img:"jd.jpeg" },
  { place: "Prefeitura de Paranavaí", role: "Projetista", time: "2 anos e 8 meses",img:"pf.png" },
];

const projects = [
  {
    title: "Residência personalizada",
    img: "/cena1.jpeg",
  },
  {
    title: "Projeto residencial — banheiro",
    img: "/cena2.jpeg",
  },
  {
    title: "Projeto residencial — banheiro",
    img: "/cena3.jpeg",
  },
  {
    title: "Projeto residencial — banheiro",
    img: "/cena7.jpeg",
  },
  {
    title: "Projeto residencial — cozinha",
    img: "/cozinha.jpeg",
  },
  {
    title: "Residência personalizada II",
    img: "/cena6.jpeg",
  },
];

  export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
     <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-[#769068]/90 text-white backdrop-blur-md">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    
    <a href="#home" className="font-display text-2xl tracking-tight">
      Victoria<span className="text-primary">.</span>Tenfen
    </a>

    {/* Menu Desktop */}
    <ul className="hidden gap-10 text-sm md:flex ">
      {[
        ["Sobre", "#about"],
        ["Serviços", "#services"],
        ["Projetos", "#projects"],
        ["Contato", "#contact"],
      ].map(([label, href]) => (
        <li key={href}>
          <a
            href={href}
            className=" text-white text-foreground/70 transition-smooth hover:text-foreground"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    {/* Botão Mobile */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
    >
      {menuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  </nav>

  {/* Menu Mobile */}
  {menuOpen && (
    <div className="md:hidden border-t border-border bg-background">
      <ul className="flex flex-col p-4">
        {[
          ["Sobre", "#about"],
          ["Serviços", "#services"],
          ["Projetos", "#projects"],
          ["Contato", "#contact"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
       <img
  src="/coz.png"
  alt="Interior arquitetura sofisticada"
  width={1920}
  height={1080}
  className="absolute inset-0 h-full w-full object-cover"
/>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/20" />

        <motion.div
          initial="hidden" animate="show" variants={fade}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/80">
            Estúdio de Arquitetura e Design
          </p>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Tenha a casa que você sempre sonhou
            <br />
            <Typewriter
  text="Projetos que unem conforto, personalidade e propósito — do conceito à execução."
  speed={50}
  className="mx-auto mt-8 max-w-xl text-lg text-white/85"
/>
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-primary-foreground shadow-elegant transition-smooth hover:bg-primary-glow"
            >
              Conheça nossos serviços
              <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3 text-white backdrop-blur-sm transition-smooth hover:bg-white/10"
            >
              Fale comigo
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-float">
          <div className="h-12 w-[1px] bg-white/60" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
         

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}
            className=""
          >
            <span className="text-xs uppercase tracking-[0.4em] text-primary">Sobre o estúdio</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Olá, sou <span className="text-gradient">Victoria Tenfen</span>
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-primary" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Apaixonada por transformar espaços em experiências. Acredito que cada
              ambiente carrega uma história — e meu trabalho é revelar essa narrativa
              através de equilíbrio, função e estética. Atuo em arquitetura e design
              de interiores criando projetos que unem conforto, personalidade e propósito.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 border-1 border-black rounded-full bg-black/70 px-7 py-3 text-secondary-foreground transition-smooth hover:bg-foreground"
            >
              <Mail className="h-4 w-4" /> Mande-me uma mensagem
            </a>
          </motion.div>
           <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-full w-100 rounded-3xl opacity-90" />
          <img
  src="/vic.jpeg"
  alt="Victoria Tenfen, arquiteta"
  width={400}
  height={1100}
  loading="lazy"
  className=" border-2 border-green-800/50 p-1 relative rounded-full object-cover shadow-ink"
/>
          </motion.div>
        </div>

        {/* Experiências */}
        <div className="mx-auto mt-32 max-w-6xl ">
          <h3 className="text-center text-3xl md:text-4xl">Experiências</h3>
          <div className="mx-auto mt-3 h-px w-20 bg-gradient-primary" />
          <div className="ml-5 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-start">
            {experiences.map((e, i) => (
              <motion.div
                key={e.place}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className=""
              >
                <div className="" />
                <h4 className="text-xm text-black">{e.place}</h4>
               <img
  src={e.img}
  alt={e.place}
  className="w-50 h-45 object-cover rounded-lg"
/>
 <p className="mt-2 text-xl text-primary/90">{e.role}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden bg-secondary py-32 text-secondary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.7 0.08 145) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary-glow">O que fazemos</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Conheça nossos serviços</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Oferecemos soluções completas em arquitetura e design, do conceito à execução.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-smooth hover:border-primary/60 hover:bg-white/[0.08]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-smooth group-hover:opacity-40" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">Portfólio</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Projetos Recentes</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Uma seleção que demonstra minha experiência em arquitetura e design de interiores.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project,i) => (
              <motion.a
                key={i}
               // href=""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative block overflow-hidden rounded-3xl"
              >
                <div
                  className="aspect-[4/5] w-full bg-cover bg-center transition-smooth group-hover:scale-105"
                style={{
                backgroundImage: `url(${project.img})`,}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary-glow">Residencial</span>
                  <h3 className="mt-2 text-2xl">{project.title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm opacity-0 transition-smooth group-hover:opacity-100">
                    Ver projeto <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.7 0.08 145) 0%, transparent 40%)" }} />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-start">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
            className="text-white"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-primary-glow">Vamos conversar</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Entre em contato</h2>
            <p className="mt-5 max-w-md text-white/70">
              Pronto para transformar seus espaços? Me envie uma mensagem ou siga pelas redes.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vit%C3%B3ria-tenfen-25575622a/" },
                { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/victenfen/" },
                { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/554498669742" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-smooth hover:border-primary/60 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-white">{label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-white/50 transition-smooth group-hover:translate-x-1 group-hover:text-primary-glow" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
            action="https://formsubmit.co/vitoriatenfen.c@gmail.com"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md shadow-ink"
          >
            <h3 className="text-3xl text-white">Envie-me uma mensagem</h3>
            <div className="mt-6 space-y-4">
                <input
    type="hidden"
    name="_next"
    value="https://portifolio-vic.vercel.app/email"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />
              <input
                name="name" required placeholder="Seu nome"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition-smooth focus:border-primary focus:bg-white/10"
              />
              <input
                type="email" name="email" required placeholder="Seu email"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition-smooth focus:border-primary focus:bg-white/10"
              />
              <textarea
                name="message" required rows={4} placeholder="Sua mensagem"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition-smooth focus:border-primary focus:bg-white/10"
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-primary-foreground shadow-elegant transition-smooth hover:bg-primary-glow"
              >
                Enviar mensagem
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Victoria Tenfen — Arquitetura & Design
      </footer>
    </div>
  );
}
