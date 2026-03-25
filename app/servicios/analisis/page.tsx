"use client";
import { useRouter } from "next/navigation";

export default function Analisis() {
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
          Análisis de Datos Empresariales
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl">
          Transformo la información de tu empresa en indicadores claros
          que te permiten tomar decisiones estratégicas y mejorar tu rentabilidad.
        </p>

        <a
          href="https://wa.me/573122153964"
          className="mt-8 inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar análisis
        </a>
      </section>

      {/* PROBLEMAS */}
      <section className="py-16 px-6 bg-gray-900 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Problemas comunes en las empresas
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-gray-300">
            <div className="bg-black p-6 rounded-xl">
              ❌ Decisiones sin datos confiables
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Información dispersa en múltiples sistemas
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Falta de indicadores claros de rendimiento
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-16">

        {/* 1 */}
        <div>
          <h2 className="text-3xl font-bold">
            Análisis Financiero
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Evaluación de ingresos, costos y rentabilidad</li>
            <li>✔ Análisis de estados financieros</li>
            <li>✔ Identificación de oportunidades de mejora</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-3xl font-bold">
            Indicadores de Gestión (KPIs)
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Definición de indicadores clave</li>
            <li>✔ Seguimiento de desempeño operativo</li>
            <li>✔ Medición de eficiencia empresarial</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-3xl font-bold">
            Dashboards y Reportes
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Visualización clara de datos</li>
            <li>✔ Reportes automatizados</li>
            <li>✔ Integración con ERP y sistemas existentes</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-3xl font-bold">
            Toma de Decisiones Estratégicas
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Análisis para crecimiento empresarial</li>
            <li>✔ Optimización de costos</li>
            <li>✔ Mejora en rentabilidad</li>
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
            ✔ Decisiones basadas en datos reales
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Mayor control financiero
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Optimización de recursos
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-orange-500 text-black">
        <h2 className="text-3xl font-bold">
          Convierte tus datos en decisiones estratégicas
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