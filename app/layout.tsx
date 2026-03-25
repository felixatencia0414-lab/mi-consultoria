import "./globals.css";

export const metadata = {
  title: "Consultor ERP, WMS e Inventarios en Barranquilla | Felix Atencia",
  description:
    "Optimización de inventarios, implementación de ERP y logística empresarial en Barranquilla, Colombia.",
  keywords: [
    "ERP Colombia",
    "WMS inventarios",
    "auditoria de inventarios",
    "logistica empresarial",
    "consultor ERP Barranquilla",
  ],
  authors: [{ name: "Felix Atencia" }],
  openGraph: {
    title: "Consultor ERP e Inventarios",
    description: "Optimiza tu empresa con sistemas ERP y control de inventarios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}