"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>

      <main className="min-h-screen bg-black text-white flex flex-col lg:flex-row">

        {/* IZQUIERDA */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 bg-gradient-to-b from-black to-gray-900">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Felix Atencia
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-orange-500 font-semibold">
              Contador Publico & Ingeniero de Sistemas
            </p>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed text-sm sm:text-base">
              Especialista en ERP, WMS, inventarios y análisis financiero.
              Transformo operaciones empresariales en sistemas eficientes,
              controlados y rentables.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573122153964"
                className="bg-orange-500 px-6 py-3 rounded-xl font-semibold text-center"
              >
                Solicitar asesoría
              </a>

              <a
                href="#servicios"
                className="border border-gray-700 px-6 py-3 rounded-xl text-center"
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

            {[
              {
                title: "Inventarios",
                desc: "Control y auditoría",
                link: "/servicios/inventarios",
              },
              {
                title: "ERP",
                desc: "Integración empresarial",
                link: "/servicios/erp",
              },
              {
                title: "Análisis",
                desc: "Datos y decisiones",
                link: "/servicios/analisis",
              },
              {
                title: "Logística",
                desc: "WMS y operación",
                link: "/servicios/logistica",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.link}
                  className="block bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-800
                  hover:border-orange-500 hover:scale-[1.03] transition"
                >
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">{item.desc}</p>
                </Link>
              </motion.div>
            ))}

          </div>

        </section>

      </main>

    </PageTransition>
  );
}