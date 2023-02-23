import Solutions from 'containers/home/solution';
import { SOLUTIONS } from 'containers/home/solution/constants';
import MetaTags from 'containers/meta-tags';

const IMAGE_URL = `${process.env.NEXT_PUBLIC_BASE_PATH}images/home.png`;

const SolutionPage: React.FC = () => {
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

  // We'll pre-render only these paths at build time.
  // { fallback: false } will send a 404 if page does not exist.
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    props: {
      revalidate: 30 * 60, // 30 minutees
    },
  };
}

export default SolutionPage;
