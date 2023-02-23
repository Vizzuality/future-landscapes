import Footer from 'containers/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={`flex h-screen flex-col font-sans`}>
      <main className="grow">
        {/* Content */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
