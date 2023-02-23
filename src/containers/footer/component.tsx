import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import cn from 'lib/classnames';

import Hero from './hero';
import Questions from './questions';
import Solution from './solution';

const Footer = () => {
  const [step] = useAtom(stepAtom);
  return (
    <footer>
      <div
        className={cn({
          'relative z-10 flex w-full items-center bg-transparent p-4 text-base lg:text-xl': true,
          'justify-between': step !== 5,
          'space-x-96': step !== 0,
          'justify-center': step === 5,
        })}
      >
        {step === 0 && <Hero />}
        {step > 0 && step <= 4 && <Questions />}
        {step >= 5 && <Solution />}
      </div>
    </footer>
  );
};

export default Footer;
