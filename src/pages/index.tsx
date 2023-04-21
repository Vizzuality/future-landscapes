import Home from 'containers/home';
import MetaTags from 'containers/meta-tags';

const HomePage: React.FC = () => {
  const IMAGE_URL = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/social/feed/01.png`;
  return (
    <>
      <MetaTags
        title="Future Landscapes | Vizzuality"
        description="Take our quiz to discover your Future Landscape by Vizzuality"
        type="website"
        imageURL={IMAGE_URL}
      />
      <Home />
    </>
  );
};

export default HomePage;
