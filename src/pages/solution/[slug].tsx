import { useRouter } from 'next/router';

import { dehydrate, QueryClient } from '@tanstack/react-query';

import Solutions from 'containers/home/solution';
import { SOLUTIONS } from 'containers/home/solution/constants';
import MetaTags from 'containers/meta-tags';

const IMAGE_URL = `${process.env.NEXT_PUBLIC_BASE_PATH}images/home.png`;

const SolutionPage: React.FC = () => {
  const { query } = useRouter();
  console.log(useRouter());

  return (
    <div>
      <MetaTags
        title="Vizzuality | Future Landscapes"
        description="A quizz to know what is your sustainable vision."
        type="website"
        imageURL={IMAGE_URL}
      />
      <Solutions />
    </div>
  );
};

export function getStaticPaths() {
  // Get the paths we want to pre-render based on projects
  const paths = SOLUTIONS.map((f) => ({
    params: { slug: `${f.slug}` },
  }));
  console.log({ paths });

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  console.log({ ctx });
  const queryClient = new QueryClient();

  // const fetch = () => fetchProject(id);

  // await queryClient.prefetchQuery(['project', id], fetch);

  console.log(queryClient.getQueriesData(['solution', slug]));

  // Props returned will be passed to the page component
  return {
    props: {
      revalidate: 30 * 60, // 30 minutees
    },
  };
}

export default SolutionPage;
