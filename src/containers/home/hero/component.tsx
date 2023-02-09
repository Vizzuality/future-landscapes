import { readWriteStepAtom } from 'store/step';

import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import Background from 'components/background';
import Button from 'components/button';

const Hero = () => {
  const [step, setStep] = useAtom(readWriteStepAtom);

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
              delay: 0,
            },
          }}
        >
          <div className="flex flex-col items-center space-y-10 text-center text-black max-w-4xl">
            <h1 className="font-display text-5xl lg:text-6xl">
              What&apos;s your sustainable vision?
            </h1>
            <h2 className="text-xl lg:text-2xl">Let&apos;s paint it into a picture.</h2>
            <Button theme="primary" size="xl" onClick={() => setStep(step + 1)}>
              Start quiz
            </Button>
          </div>
        </motion.div>
      </Background>
    </AnimatePresence>
  );
};

export default Hero;