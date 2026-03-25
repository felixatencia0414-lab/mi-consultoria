import "./globals.css";

export const metadata = {
  title: "Auditor ERP, WMS e Inventarios | Felix Atencia",
  description:
    "Consultor en sistemas empresariales. Auditor de inventarios en barranquilla, ERP, logística y análisis financiero en Colombia.",
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