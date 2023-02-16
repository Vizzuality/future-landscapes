import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Hero from './hero';
import Questions from './questions';

const Footer = () => {
  const [step] = useAtom(stepAtom);

  return (
    <footer>
      <div className="relative z-10 flex w-full justify-between bg-transparent p-4 text-base lg:text-xl">
        {step === 0 && <Hero />}
        {step > 0 && step <= 4 && <Questions />}
      </div>
    </footer>
  );
};

export default Footer;
