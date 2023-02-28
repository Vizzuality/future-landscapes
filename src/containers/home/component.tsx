import { useMemo } from 'react';

import { playingAtom } from 'store/playing';
import { solutionsAtom } from 'store/solutions';

import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import CristalBall from './cristal-ball';
import Hero from './hero';
import Questions from './questions';

const Home = () => {
  const [playing] = useAtom(playingAtom);
  const [solutions] = useAtom(solutionsAtom);

  const getId = useMemo(() => {
    const questions = playing && !solutions;
    const cristalBall = playing && !!solutions;

    switch (true) {
      case questions:
        return 'questions';
      case cristalBall:
        return 'cristalBall';
      default:
        return 'hero';
    }
  }, [playing, solutions]);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-full w-full">
        <AnimatePresence initial={!playing && false}>
          <motion.div
            className="absolute top-0 left-0 h-full w-full"
            variants={{
              enter: {
                x: '100%',
              },
              center: { x: 0 },
              exit: {
                x: '-100%',
              },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: 'anticipate',
            }}
            key={getId}
          >
            {!playing && <Hero />}
            {playing && !solutions && <Questions />}
            {playing && solutions && <CristalBall />}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
