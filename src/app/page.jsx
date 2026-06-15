"use client";

import Image from "next/image";
//import { useReveal } from "./hooks/useReveal";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  Home,
  Building2,
  Palette,
  Lightbulb,
  Trees,
  Ruler
} from "lucide-react";
import Typewriter from "./hooks/typewriter";
import "./style.css";

export default function Page() {
 // const handleChange = (e) => {
   // setForm({ ...form, [e.target.name]: e.target.value });
 // };
 // const handleSubmit = (e) => {
    //console.log("Form submitted:", form);
 // }
 // const revealRef = useReveal();
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="m-0 p-0">
      {/* Header fixo único */}
      <header className="fixed top-0 left-0 w-full bg-[#769068] text-white h-20 z-50 flex items-center justify-between px-6">
        <h1 className="text-xl">Arquitetura|design</h1>
        <nav className="flex gap-4">
          <Link className="text-white" href="#sobre">Sobre</Link>
          <Link className="text-white" href="#projects">Projetos</Link>
          <Link className="text-white" href="#contato">Contato</Link>
        </nav>
      </header>

      <main className="pt-20">
        <section className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold"
          >
         <div className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/coz.png')" }}
  />

  {/* OVERLAY ESCURO */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  {/* CONTEÚDO */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    
    <p className="text-sm text-gray-300 mb-4 tracking-widest">
      ESTÚDIO ARQUITETURA E DESIGN
    </p>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
      Tenha a casa que <span className="font-semibold">você</span>
      <br /> sempre sonhou morar
    </h1>
<Typewriter
  text="Transformamos visões em realidade através de arquitetura contemporânea e design de interiores"
  speed={50}
  className="mt-6 text-gray-200 text-lg sm:text-xl"
/>
    <button
      onClick={() => {
        const section = document.getElementById("services");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className="mt-10 px-8 py-3 bg-[#769068] hover:bg-[#5f7554] transition rounded-full text-white text-lg shadow-lg"
    >
      Conheça nossos serviços
    </button>

  </div>
</div>

            <p className="mt-50 text-black/80">Arquitetura & Design de Interiores</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 3 }}
            className="mt-4 text-lg text-black/70"
          >
            Venha transformar seus espaços conosco realizando seus sonhos!
          </motion.p>
        </section>

        {/* SOBRE */}
        
        <section
          id="sobre"
          className=""
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-24 px-4">
          <div className="flex-1">
            <motion.h2
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-6 text-black/80"
            >
              Sobre o Estudio
            </motion.h2>
            <hr className="border-1 border-[#769068] mb-10 w-80"></hr>

            <motion.p
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-black  leading-relaxed mb-6"
            >
              <b className="text -xm text-green-900 text-2xl">Olá, meu nome e Victoria Tenfen</b>
              <br />
              <p className="">
              Sou apaixonada por transformar espaços em experiências. Acredito que cada
              ambiente carrega uma história — e meu trabalho é revelar essa narrativa
              através de equilíbrio, função e estética. Atuo na área de Arquitetura e
              Design de Interiores, criando projetos que unem conforto, personalidade e
              propósito.
              </p>
            </motion.p>

            <Link href="#contato">
              <button className="mt-10 h-10 bg-[#486e37]/89 w-60 rounded-xl text-white">
                Mande-me uma mensagem
              </button>
            </Link>
          </div>

          <motion.div
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <Image
              src="/vic.jpeg"
              alt="Foto de Perfil"
              width={350}
              height={350}
              className="p-2 rounded-full shadow-lg border border-[#486e37]"
            />
          </motion.div>
          </div>
        </section>

        {/* EXPERIÊNCIAS */}
        <section className="max-w-6xl mx-auto mt-12 px-4">
          <motion.h2
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6 text-gray-700"
          >
            Experiências
          </motion.h2>

          <div className="relative mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-start">
              {/* Bloco 1 */}
              <div className="flex flex-col items-start">
                <p className="text-xl mb-2 ">Comercial ivapora</p>
                <Image
                  src="/comercio.jpeg"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2 ">Design de interiores</p>
                <p className="text-sm mt-2 text-[#486e37]"><b>1 ano e 3 mes</b></p>
              </div>

              {/* Bloco 2 */}
              <div className="flex flex-col items-start">
                <p className="text-xl mb-2">Solução network</p>
                <Image
                  src="/comprador.jpeg"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2">Comprador - Obras</p>
                <p className="text-sm mt-2 text-[#486e37]"><b>2 ano e 1 mes</b></p>
              </div>

              {/* Bloco 3 */}
              <div className="flex flex-col items-start">
                <p className="text-xl mb-2 ">JD Vidros e Esquadrias</p>
                <Image
                  src="/jd.jpeg"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2">Projetista CAD</p>
                <p className="text-sm mt-2 text-[#486e37]"><b>5 meses</b></p>
              </div>

              {/* Bloco 4 */}
              <div className="flex flex-col items-start">
                <p className="text-xl mb-2">Prefeitura de Paranavaí</p>
                <Image
                  src="/pf.png"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2">Projetista</p>
                <p className="text-sm mt-2 text-[#486e37]"><b>2 ano e 8 mes</b></p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="ml-4 mr-5 mt-20"></section>
       <div className=" py-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-green-900/80 ">
      Conheça nossos serviços
    </h2>
    <p className="mt-5 text-gray-600">
      Oferecemos soluções completas em arquitetura e design, do conceito à <br />
      execução.
    </p>
  </div>

  {/* Grid de cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 ">
    
    {/* Card */}
    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Home />
      </div>
      <h3 className="text-xl text-white font-semibold mb-4">
        Arquitetura Residencial
      </h3>
      <p className="text-white leading-relaxed">
        Projetos de casas e apartamentos que combinam conforto, funcionalidade e
        estética personalizada.
      </p>
    </div>

    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Building2 />
      </div>
      <h3 className="text-xl text-white font-semibold mb-4">
        Arquitetura Comercial
      </h3>
      <p className="text-gray-600 leading-relaxed text-white">
        Espaços corporativos e comerciais que otimizam a experiência de trabalho
        e fortalecem marcas.
      </p>
    </div>

    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Palette />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">
        Design de Interiores
      </h3>
      <p className="text-gray-600 leading-relaxed text-white">
        Transformação de ambientes internos com seleção de materiais,
        mobiliário e iluminação.
      </p>
    </div>

    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Lightbulb />
      </div>
      <h3 className="text-xl text-white font-semibold mb-4">
        Lighting Design
      </h3>
      <p className="text-gray-600 leading-relaxed text-white">
        Projetos de iluminação que valorizam a arquitetura e criam atmosferas
        únicas.
      </p>
    </div>

    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Trees />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">
        Paisagismo
      </h3>
      <p className="text-gray-600 leading-relaxed text-white">
        Integração harmoniosa entre arquitetura e natureza através de projetos de
        áreas externas.
      </p>
    </div>

    <div className="bg-[#769068]/97 p-10 rounded-xl">
      <div className="w-12 h-12 bg-[#769068]/50 text-white flex items-center justify-center mb-6">
        <Ruler />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">
        Reforma & Retrofit
      </h3>
      <p className="text-gray-600 leading-relaxed text-white">
        Renovação de espaços existentes mantendo a essência e agregando
        modernidade.
      </p>
    </div>

  </div>
</div>

        {/* PROJECTS */}
        <section id="projects" className="ml-4 mr-5 mt-20">
          <hr className="mb-20 border-[#dafdc6]"></hr>
          <h2 className=" text-center text-3xl font-semibold text-gray-700 m-2">Projetos Recentes</h2>
          <p className="text-center mb-20 text-gray-700 m-2 mt-5 ">Meus projetos demostrando um pouco de minhas experiencias e habilidades<br></br> com arquitetura e design</p>
        
          <motion.div
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 px-0 md:px-20 pb-20 "
          >
            <div className=" text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena1.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg "
            />
            <p className="text-sm pt-5">residencial</p>
            <p className="mt-4">Residencia personalizada</p>
            </div>
            <div className="text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena2.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm pt-5">residencial</p>
            <p className="mt-4">Projeto residencial para banheiro</p>
            </div>
            <div className="text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena3.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg"
            />
            <p className="text-sm pt-5">residencial</p>
            <p className="mt-4">Projeto residencial para banheiro</p>
            </div>
            <div className="text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena7.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm pt-5">residencial</p>
           <p className="mt-4">Projeto residencial para banheiro</p>
            </div>
            <div className="text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena5.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm pt-5">residencial</p>
            <p className=" text mt-4">Projeto residencial para cozinha</p>
            </div>
            <div className="text-xl font-bold transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cena6.jpeg"
              alt=""
              width={900}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm pt-5">residencial</p>
            <p className="mt-4">Residencia personalizada</p>
            </div>
          </motion.div>
          
        </section>
        <section id="contato" className="max-w-6xl mx-auto mt-12 ">
          <hr className="mb-20 border-[#dafdc6] w-100 "></hr>
           <p className=" text-2xl font-semibold mb-1 text-black/70  mb-10 ">Contato</p>
          <p className=" font-semibold mb-1 text-black/70  mb-10 ">Entre em contato para transformar seus espaços!</p>
         <div className="flex gap-10 mt-1 text-3xl ml-20">
</div>
<div className="mb-40 border border-green-700/60 p-5 rounded-xl w-full bg-[#769068]/10">
     <div className="flex mb-12">
            <a href="https://www.linkedin.com/in/vit%C3%B3ria-tenfen-25575622a/" className="text-blue-700 hover:underline">Linkedin
              <FaLinkedin size={24} className="text-blue-700" />
            </a><br></br>
          <br></br>
            <a href="https://www.instagram.com/victenfen/" className="text-rose-400 hover:underline pl-5">Instagram
              <FaInstagram size={24} className="text-rose-400" />
            </a><br></br>
            <a href="https://wa.me/554498669742" className="text-green-700 hover:underline pl-5">WhatsApp
              <FaWhatsapp size={24} className="text-green-700" />
            </a>
            <br></br>
          </div>
          <p>Envia-me uma mensagem </p>
          <br></br>
         <form 
  action="https://formsubmit.co/vitoriatenfen.c@gmail.com"
  method="POST"
  className="space-y-6"
>
  <input
    name="name"
    placeholder="Seu Nome"
    className="w-full p-3 rounded-xl bg-[#769068]/30 border border-green-700/60"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Seu Email"
    className="w-full p-3 rounded-xl bg-[#769068]/30 border border-green-700/60"
    required
  />

  <textarea
    name="message"
    placeholder="Sua Mensagem"
    rows="4"
    className="w-full p-3 rounded-xl bg-[#769068]/30 border border-green-700/60"
    required
  />
  <input type="hidden" name="_subject" value="Nova mensagem no seu site!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  {/* REDIRECIONAMENTO */}
  <input type="hidden" name="_next" value="https://portifolio-vic.vercel.app/email"/>

  <button
    type="submit"
    className="w-full py-3 rounded-xl bg-[#769068] text-white transition mb-20 border border-black/40"
  >
    Enviar Mensagem
  </button>
</form>

</div>
        </section>
      </main>
    </div>
  );
}
