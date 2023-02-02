// import Footer from 'containers/footer';
import { Inter } from '@next/font/google';

// import Header from 'containers/header';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  weight: ['300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'block',
});

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <main className={`${inter.variable} flex flex-col font-sans antialiased lg:min-h-screen`}>
      {/* <Header /> */}

      <div className="relative grow">
        {/* Content */}
        {children}
      </div>

      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
