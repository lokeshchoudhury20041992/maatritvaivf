import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import Script from 'next/script';
import './tailwind.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import StickyMobileBar from '@/components/StickyMobileBar';
import { getMedicalClinicSchema, getPhysicianSchema } from '@/lib/schema-helpers';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best IVF Centre in Kolkata | Maatritva Fertility IVF and Health care',
  description:
    'Maatritva Fertility IVF and Health care by Dr. Ankita Mandal — Kolkata\'s most trusted IVF, IUI, ICSI, and fertility treatment centre. Advanced assisted reproductive technology, laparoscopic surgery, and high-risk pregnancy care with transparent pricing and consistently high clinical success rates.',
  keywords: [
    'best IVF specialist',
    'best fertility doctor in Kolkata',
    'best IVF specialist in Kolkata',
    'best gynecologist in Kolkata',
    'IVF centre Kolkata',
    'best IVF doctor Kolkata',
    'fertility clinic Kolkata',
    'Dr Ankita Mandal',
    'IVF treatment Kolkata',
    'IUI treatment Kolkata',
    'ICSI treatment Kolkata',
    'infertility specialist Kolkata',
    'fertility specialist Kolkata',
    'IVF cost Kolkata',
    'best gynaecologist Kolkata',
    'test tube baby Kolkata',
    'IVF hospital Kolkata',
    'infertility treatment Kolkata',
    'PCOS treatment Kolkata',
    'low AMH treatment Kolkata',
    'blocked fallopian tubes treatment',
    'laparoscopic surgery Kolkata',
    'best fertility clinic in West Bengal',
    'assisted reproductive technology Kolkata',
    'top 5 gynecologists Kolkata',
  ],
  metadataBase: new URL('https://bestivfcentreinkolkata.com'),
  alternates: {
    canonical: 'https://bestivfcentreinkolkata.com',
  },
  icons: {
    icon: '/images/img/logo.png',
    apple: '/images/img/logo.png',
  },
  openGraph: {
    title: 'Best IVF Centre in Kolkata | Maatritva Fertility IVF and Health care',
    description: 'Kolkata\'s most trusted IVF, IUI, ICSI, and fertility treatment centre. 15,000+ happy families. Advanced ART, laparoscopic surgery, and high-risk pregnancy care.',
    url: 'https://bestivfcentreinkolkata.com',
    siteName: 'Maatritva Fertility IVF and Health care',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTXNSDWJ');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17172169546"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17172169546');`}
        </Script>
      </head>
      <body className="antialiased">
        <SchemaMarkup schema={getMedicalClinicSchema()} />
        <SchemaMarkup schema={getPhysicianSchema()} />
        <Navbar />
        <main className="pt-16 lg:pt-20 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <LeadForm />
        <StickyMobileBar />
      </body>
    </html>
  );
}
