"use client";
import { useRouter } from "next/navigation";

export default function ERP() {
  const router = useRouter();

  return (
    <main className="bg-black text-white min-h-screen">

      {/* BOTÓN ATRÁS */}
      <div className="p-6">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-white"
        >
          ← Volver
        </button>
      </div>

      {/* HERO */}
      <section className="px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">
          Implementación de ERP Empresarial
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl">
          Integro todos los procesos de tu empresa en un solo sistema:
          contabilidad, finanzas, nómina e inventarios, permitiéndote
          tener control total de tu operación.
        </p>

        <a
          href="https://wa.me/573122153964"
          className="mt-8 inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar implementación
        </a>
      </section>

      {/* PROBLEMAS */}
      <section className="py-16 px-6 bg-gray-900 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Problemas que resuelve un ERP
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-gray-300">
            <div className="bg-black p-6 rounded-xl">
              ❌ Información dispersa en múltiples sistemas
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Procesos manuales y errores operativos
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Falta de control financiero y contable
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-16">

        {/* 1 */}
        <div>
          <h2 className="text-3xl font-bold">
            Implementación de ERP
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Configuración de módulos contables y financieros</li>
            <li>✔ Integración con inventarios y logística</li>
            <li>✔ Parametrización según normativa colombiana</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-3xl font-bold">
            Módulos Financieros y Contables
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Control contable en tiempo real</li>
            <li>✔ Estados financieros automatizados</li>
            <li>✔ Cumplimiento normativo (DIAN)</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-3xl font-bold">
            Gestión de Nómina
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Liquidación de nómina automatizada</li>
            <li>✔ Seguridad social y prestaciones</li>
            <li>✔ Integración con contabilidad</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-3xl font-bold">
            Integración Empresarial
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Conexión entre áreas operativas</li>
            <li>✔ Automatización de procesos</li>
            <li>✔ Eliminación de reprocesos</li>
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
            ✔ Control financiero total
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Procesos automatizados
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Información centralizada
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-orange-500 text-black">
        <h2 className="text-3xl font-bold">
          Lleva tu empresa a un nivel de control profesional
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