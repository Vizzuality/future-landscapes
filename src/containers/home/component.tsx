import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import CristalBall from './cristal-ball';
import Hero from './hero';
import Questions from './questions';

const Home = () => {
  const [step] = useAtom(stepAtom);
  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-full w-full">
        {step === 0 && <Hero />}
        {step <= 4 && <Questions />}
        {step === 5 && <CristalBall />}
      </div>
    </>
  );
};

export default Home;
