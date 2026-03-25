"use client";
import { useRouter } from "next/navigation";

export default function Logistica() {
  const router = useRouter();

  return (
    <main className="bg-black text-white min-h-screen">

      {/* BOTÓN ATRÁS */}
      <div className="p-6">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-white"
        >
          ← Volver a servicios
        </button>
      </div>

      {/* HERO */}
      <section className="px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">
          Optimización Logística y WMS
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl">
          Diseño y optimizo procesos logísticos mediante la implementación de WMS,
          mejorando almacenamiento, distribución y control operativo.
        </p>

        <a
          href="https://wa.me/573122153964"
          className="mt-8 inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar optimización
        </a>
      </section>

      {/* PROBLEMAS */}
      <section className="py-16 px-6 bg-gray-900 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Problemas logísticos que afectan tu empresa
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-gray-300">
            <div className="bg-black p-6 rounded-xl">
              ❌ Desorganización en bodega
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Errores en picking y despacho
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Procesos manuales ineficientes
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-16">

        {/* 1 */}
        <div>
          <h2 className="text-3xl font-bold">
            Implementación de WMS
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Configuración de sistemas de gestión de almacenes</li>
            <li>✔ Integración con ERP e inventarios</li>
            <li>✔ Automatización de operaciones logísticas</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-3xl font-bold">
            Optimización de Bodega
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Rediseño de layout de almacenamiento</li>
            <li>✔ Mejora en ubicación de productos</li>
            <li>✔ Optimización de rutas de picking</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-3xl font-bold">
            Control de Operaciones
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Seguimiento de entradas y salidas</li>
            <li>✔ Control de tiempos operativos</li>
            <li>✔ Reducción de errores en despacho</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-3xl font-bold">
            Mejora Continua Logística
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Identificación de cuellos de botella</li>
            <li>✔ Optimización de procesos</li>
            <li>✔ Reducción de costos operativos</li>
          </ul>
        </div>

      </section>

      {/* RESULTADOS */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold">
          Resultados que obtendrás
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto text-gray-300">
          <div className="bg-black p-6 rounded-xl">
            ✔ Mayor eficiencia operativa
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Reducción de costos logísticos
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Mejor control en almacenamiento y distribución
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-orange-500 text-black">
        <h2 className="text-3xl font-bold">
          Optimiza tu operación logística y reduce costos
        </h2>

        <a
          href="https://wa.me/573122153964"
          className="mt-6 inline-block bg-black text-white px-8 py-4 rounded-xl"
        >
          Contactar ahora
        </a>
      </section>

    </main>
  );
}