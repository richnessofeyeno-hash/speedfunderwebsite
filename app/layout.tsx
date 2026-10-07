import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: 'SpeedFunders — Your Fastest Funding Partners',
    template: '%s — SpeedFunders',
  },
  description:
    'SpeedFunders helps Kickstarter creators prepare stronger campaigns, build audiences, generate launch momentum, and reach relevant crowdfunding supporters.',
  metadataBase: new URL('https://speedfunders.com'),
  icons: {
    icon: '/logo-circle.png',
    shortcut: '/logo-circle.png',
    apple: '/logo-circle.png',
  },
  openGraph: {
    title: 'SpeedFunders — Your Fastest Funding Partners',
    description: 'Crowdfunding marketing built around the campaign.',
    type: 'website',
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
