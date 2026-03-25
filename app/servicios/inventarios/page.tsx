"use client";
import { useRouter } from "next/navigation";

export default function Inventarios() {
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
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">
          Auditoría y Control de Inventarios
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl">
          Garantizo que lo que tu empresa tiene en sistema coincida con la realidad física,
          identificando pérdidas, errores operativos y oportunidades de mejora.
        </p>

        <a
          href="https://wa.me/573122153964"
          className="mt-8 inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar auditoría
        </a>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Problemas que afectan tu inventario
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-gray-300">
            <div className="bg-black p-6 rounded-xl">
              ❌ Diferencias entre sistema y físico
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Pérdidas no identificadas (merma o robo)
            </div>
            <div className="bg-black p-6 rounded-xl">
              ❌ Falta de control en procesos logísticos
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-16">

        {/* 1 */}
        <div>
          <h2 className="text-3xl font-bold">
            Auditoría Física de Inventarios
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Conteos cíclicos y masivos</li>
            <li>✔ Auditorías programadas y sorpresivas</li>
            <li>✔ Inspección de calidad (merma, daños, caducidad)</li>
            <li>✔ Validación de ubicación, etiquetas y códigos</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-3xl font-bold">
            Conciliación y Análisis de Diferencias
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Comparación entre inventario físico y ERP</li>
            <li>✔ Identificación de causas (errores, robos, procesos)</li>
            <li>✔ Ajustes de inventario con soporte técnico</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-3xl font-bold">
            Control de Procesos y Documentación
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Auditoría de entradas y salidas</li>
            <li>✔ Validación de facturas y órdenes de compra</li>
            <li>✔ Control de transferencias entre sedes</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-3xl font-bold">
            Evaluación de Controles Internos
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Identificación de riesgos operativos</li>
            <li>✔ Detección de fallas en procesos</li>
            <li>✔ Propuestas de mejora en logística y almacenamiento</li>
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
            ✔ Control real del inventario
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Reducción de pérdidas operativas
          </div>
          <div className="bg-black p-6 rounded-xl">
            ✔ Mejora en la toma de decisiones
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-orange-500 text-black">
        <h2 className="text-3xl font-bold">
          Detecta y corrige los problemas de tu inventario hoy
        </h2>

        <a
          href="https://wa.me/573122153964"
          className="mt-6 inline-block bg-black text-white px-8 py-4 rounded-xl"
        >
          Solicitar asesoría
        </a>
      </section>

    </main>
  );
}