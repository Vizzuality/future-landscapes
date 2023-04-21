import { readWritePlayingAtom } from 'store/playing';

import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import Background from 'containers/background';

import Button from 'components/button';

const Hero = () => {
  const [, setPlaying] = useAtom(readWritePlayingAtom);

  return (
    <AnimatePresence>
      <Background color="bg-yellow-100" step={0}>
        <motion.div
          className="flex h-full w-full items-center justify-center"
          initial={{
            opacity: 0,
            y: '100%',
          }}
          animate={{
            opacity: 1,
            y: '0%',
          }}
          exit={{
            opacity: 0,
            y: '100%',
            transition: {
              delay: 0.3,
            },
          }}
        >
          <div className="flex max-w-4xl flex-col items-center space-y-10 text-center text-black">
            <h1 className="font-display text-5xl lg:text-6xl">
              What&apos;s your sustainable vision?
            </h1>
            <h2 className="text-lg lg:text-xl">Let&apos;s paint it into a picture.</h2>
            <Button theme="primary" size="xl" onClick={() => setPlaying(true)}>
              Start quiz
            </Button>
          </div>
        </motion.div>
      </Background>
    </AnimatePresence>
  );
};

export default Hero;
