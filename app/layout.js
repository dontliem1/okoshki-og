export const metadata = {
  title: "Генератор превью для Окошек",
  description: "На базе vercel/og",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
