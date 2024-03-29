import { useCallback, useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Inter } from '@next/font/google';
import { OverlayProvider } from '@react-aria/overlays';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';

import ThirdParty from 'containers/third-party';

import { MediaContextProvider } from 'components/media-query';
import Layout from 'layouts/component';
import { GAPage } from 'lib/analytics/ga';

const inter = Inter({
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'block',
});

import 'styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Never ever instantiate the client outside a component, hook or callback as it can leak data
  // between users
  const [queryClient] = useState(() => new QueryClient());

  const { asPath } = router;

  const handleRouteChangeStart = useCallback(
    (path) => {
      const prevPath = asPath.split('?')[0];
      const nextPath = path.split('?')[0];

      // Prevent the route loading indicator from flashing when navigating to the same page.
      if (prevPath === nextPath) return;
    },
    [asPath]
  );

  const handleRouteChangeCompleted = useCallback((url: string) => {
    GAPage(url);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeCompleted);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeCompleted);
    };
  }, [router.events, handleRouteChangeCompleted]);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <OverlayProvider>
            <MediaContextProvider disableDynamicMediaQueries>
              <Layout>
                <ThirdParty />
                <Component {...pageProps} />
              </Layout>
            </MediaContextProvider>
          </OverlayProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
