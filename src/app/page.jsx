"use client";

import Image from "next/image";
//import { useReveal } from "./hooks/useReveal";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
    <div className="min-h-screen">
      {/* Header fixo único */}
      <header className="fixed top-0 left-0 w-full bg-[#769068] text-white h-20 z-50 flex items-center justify-between px-6">
        <h1 className="text-xl">Arquitetura e design</h1>
        <nav className="flex gap-4">
          <Link className="text-white" href="#sobre">Sobre mim</Link>
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
            <div
              className="w-full h-[820px] bg-cover"
              style={{
                backgroundImage: "url('/cena1.jpeg')",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="pt-80 text-white font-light tracking-[0.1em] text-5xl mb-10">
                Tenha a Casa que voce <br />
              </p>
              <b className="text-white">sempre sonhou morar!</b>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-80 h-12 mt-20 text-xl text-white bg-[#769068] rounded-full flex items-center justify-center"
                >
                  <b>Conheça nossos serviços</b>
                </button>
              </div>
            </div>

            <p className="mt-8">Arquitetura & Design de Interiores</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg"
          >
            Venha transformar seus espaços conosco realizando seus sonhos!
          </motion.p>
        </section>

        {/* SOBRE */}
        <section
          id="sobre"
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-24 px-4"
        >
          <div className="flex-1">
            <motion.h2
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-6 text-gray-700"
            >
              Sobre Mim
            </motion.h2>

            <motion.p
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-6"
            >
              <b>Olá, sou Victoria Tenfen</b>
              <br />
              Sou apaixonada por transformar espaços em experiências. Acredito que cada
              ambiente carrega uma história — e meu trabalho é revelar essa narrativa
              através de equilíbrio, função e estética. Atuo na área de Arquitetura e
              Design de Interiores, criando projetos que unem conforto, personalidade e
              propósito.
            </motion.p>

            <Link href="#contato">
              <button className="mt-10 h-10 bg-[#769068] w-60 rounded-full text-white">
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
              className="p-2 rounded-full shadow-lg border border-gray-600"
            />
          </motion.div>
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
                <p className="text-xl mb-2">Comercial ivapora</p>
                <Image
                  src="/comercio.jpeg"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2">Design de interiores</p>
                <p className="text-sm mt-2"><b>1 ano e 3 mes</b></p>
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
                <p className="text-sm mt-2">Cobrador</p>
                <p className="text-sm mt-2"><b>2 ano e 1 mes</b></p>
              </div>

              {/* Bloco 3 */}
              <div className="flex flex-col items-start">
                <p className="text-xl mb-2">JD Vidros e Esquadrias</p>
                <Image
                  src="/jd.jpeg"
                  alt="Foto de Perfil"
                  width={100}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
                <p className="text-sm mt-2">Projetista CAD</p>
                <p className="text-sm mt-2"><b>5 meses</b></p>
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
                <p className="text-sm mt-2"><b>2 ano e 8 mes</b></p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="ml-4 mt-20 mr-5 mt-50">
          <h2 className="text-3xl font-semibold text-gray-700 ml-20 "> Meus Projetos Recentes</h2>
          <p className=" mb-10 text-gray-700 ml-20">Meu projetos demostrando um pouco de minhas experiencias e habilidades com arquitetura e urbanismo </p>

          <motion.div
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20"
          >
            <Image
              src="/cena1.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/cena2.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/cena3.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/cena7.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/cena5.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/cena6.jpeg"
              alt=""
              width={600}
              height={400}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </section>
        <section id="contato" className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-3xl font-semibold text-gray-700 ml-10 "><b> Contato</b></h2>
          <p className="font-semibold mb-10 text-gray-700 ml-10">Entre em contato para transformar seus espaços!</p>
         <div className="flex gap-4 mt-5 text-3xl ml-20">
</div>
<div className="mb-40 bg-[] p-5 rounded-xl w-full">
     <div className="flex m-5 mb-10">
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
          vitóriatenfen.c@gmail.com
         <form 
  action="https://formsubmit.co/felipelima1114@gmail.com"
  method="POST"
  className="space-y-6"
>
  <input
    name="name"
    placeholder="Seu Nome"
    className="w-full p-3 rounded-xl bg-white/5 border border-black/40"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Seu Email"
    className="w-full p-3 rounded-xl bg-white/5 border border-black/40"
    required
  />

  <textarea
    name="message"
    placeholder="Sua Mensagem"
    rows="4"
    className="w-full p-3 rounded-xl bg-white/5 border border-black/40"
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
