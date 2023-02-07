import { motion } from 'framer-motion';

import Button from 'components/button';

const Hero = () => {
  return (
    <motion.section
      key="hero"
      className="flex h-full w-full items-center justify-center overflow-hidden bg-yellow-100 px-4"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      style={{
        backgroundImage: `url('/images/background/pattern.png')`,
        backgroundSize: '40% auto',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right bottom',
      }}
    >
      <div className="flex flex-col items-center space-y-10 text-center text-black max-w-4xl">
        <h1 className="font-display text-5xl lg:text-6xl">What&apos;s your sustainable vision?</h1>
        <h2 className="text-xl lg:text-2xl">Let&apos;s paint it into a picture.</h2>
        <Button theme="primary" size="xl">
          Start quiz
        </Button>
      </div>
    </motion.section>
  );
};

export default Hero;
