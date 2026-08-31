export const metadata = {
  title: "مساعد AI العراقي 🇮🇶",
  description: "مساعدك الذكي للدراسة والحياة اليومية"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
