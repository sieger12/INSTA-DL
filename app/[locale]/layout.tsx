import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES, isLocale, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  return (
    <>
      <Header locale={locale} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
