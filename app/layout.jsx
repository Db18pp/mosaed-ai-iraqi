import './globals.css';

export const metadata = {
  title: 'مساعد AI العراقي 🇮🇶',
  description: 'مساعد الذكاء الاصطناعي العراقي للدراسة والعمل والحياة اليومية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
