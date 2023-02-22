import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import cn from 'lib/classnames';

import Hero from './hero';
import Questions from './questions';

const Footer = () => {
  const [step] = useAtom(stepAtom);

  return (
    <footer>
      <div
        className={cn({
          'relative z-10 flex w-full items-center justify-between bg-transparent p-4 text-base lg:text-xl':
            true,
          'space-x-96': step !== 0,
        })}
      >
        {step === 0 && <Hero />}
        {step > 0 && step <= 4 && <Questions />}
      </div>
    </footer>
  );
};

export default Footer;
