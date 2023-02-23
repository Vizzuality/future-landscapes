import { playingAtom } from 'store/playing';
import { solutionsAtom } from 'store/solutions';

import { useAtom } from 'jotai';

import CristalBall from './cristal-ball';
import Hero from './hero';
import Questions from './questions';

const Home = () => {
  const [playing] = useAtom(playingAtom);
  const [solutions] = useAtom(solutionsAtom);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-full w-full">
        {!playing && <Hero />}
        {playing && !solutions && <Questions />}
        {playing && solutions && <CristalBall />}
      </div>
    </>
  );
};

export default Home;
