import Head from 'next/head';

import Home from 'containers/home';

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>Welcome</title>
    </Head>
    <Home />
  </>
);

export default HomePage;
