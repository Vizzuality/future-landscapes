import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Hero from './hero';
import Questions from './questions';

const Home = () => {
  const [step] = useAtom(stepAtom);
  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-full w-full">
        {step === 0 && <Hero />}
        {step > 0 && step <= 5 && <Questions />}
      </div>
    </>
  );
};

export default Home;
