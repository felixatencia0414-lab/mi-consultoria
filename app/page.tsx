"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Image from "next/image";

// ICONOS
import { Boxes, Building2, BarChart3, Truck } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Inventarios",
      desc: "Control y auditoría",
      link: "/servicios/inventarios",
      icon: Boxes,
    },
    {
      title: "ERP",
      desc: "Integración empresarial",
      link: "/servicios/erp",
      icon: Building2,
    },
    {
      title: "Análisis",
      desc: "Datos y decisiones",
      link: "/servicios/analisis",
      icon: BarChart3,
    },
    {
      title: "Logística",
      desc: "WMS y operación",
      link: "/servicios/logistica",
      icon: Truck,
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white flex flex-col lg:flex-row">

        {/* IZQUIERDA */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 bg-gradient-to-b from-black to-gray-900">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start"
          >

           {/* FOTO + TEXTO */}
           <div className="flex items-center gap-4 mb-6">

             <Image
               src="/felix.jpg"
               alt="Felix Atencia"
               width={80}
               height={80}
               className="rounded-xl object-cover border border-gray-700"
             />

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Felix Atencia
              </h1>

              <p className="text-orange-500 text-sm sm:text-base">
               Contador Público & Ingeniero de Sistemas
              </p>
           </div>

          </div>

          <p className="text-gray-400 max-w-xl leading-relaxed text-sm sm:text-base">
            Especialista en ERP, WMS, inventarios y análisis financiero.
            Transformo operaciones empresariales en sistemas eficientes,
            controlados y rentables.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
           <a
              href="https://wa.me/573122153964"
              className="bg-orange-500 px-6 py-3 rounded-xl font-semibold text-center hover:bg-orange-600 transition"
            >
             Solicitar asesoría
            </a>

            <a
               href="#servicios"
               className="border border-gray-700 px-6 py-3 rounded-xl text-center hover:bg-gray-800 transition"
            >
             Ver servicios
            </a>
        </div>

      </motion.div>

        </section>

        {/* DIVISOR SOLO EN PC */}
        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

        {/* DERECHA */}
        <section id="servicios" className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-12 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.link}
                    className="group block bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-800
                    hover:border-orange-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]
                    transition duration-300"
                  >

                    {/* ICONO */}
                    <div className="mb-4 text-orange-500 transform transition duration-300 group-hover:scale-110">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    <p className="mt-4 text-orange-500 text-sm font-medium opacity-80 group-hover:opacity-100 transition">
                      Ver más detalles →
                    </p>

                  </Link>
                </motion.div>
              );
            })}

          </div>

        </section>

      </main>
    </PageTransition>
  );
}