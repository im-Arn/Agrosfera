import './globals.css';

export const metadata = {
  title: 'Агросфера',
  description: 'Ваш надежный поставщик укрывных материалов'
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body suppressHydrationWarning={true} className='font-text min-h-screen'>{children}</body>
    </html>
  );
}
