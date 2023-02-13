import { Inter } from '@next/font/google';

import Footer from 'containers/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'block',
});

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={`${inter.variable} flex h-screen flex-col font-sans`}>
      <main className="grow">
        {/* Content */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
