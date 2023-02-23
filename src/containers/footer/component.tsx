import { playingAtom } from 'store/playing';
import { solutionsAtom } from 'store/solutions';
import { stepAtom } from 'store/step';

import { useAtom } from 'jotai';

import cn from 'lib/classnames';

import Hero from './hero';
import Questions from './questions';
import Solution from './solution';

const Footer = () => {
  const [step] = useAtom(stepAtom);

  const [playing] = useAtom(playingAtom);
  const [solutions] = useAtom(solutionsAtom);

  return (
    <footer>
      <div
        className={cn({
          'relative z-10 flex w-full items-center bg-transparent p-4 text-base lg:text-xl': true,
          'justify-between': !solutions,
          'justify-center': playing && solutions,
        })}
      >
        {!playing && <Hero />}
        {playing && !solutions && <Questions />}
        {playing && solutions && <Solution />}
      </div>
    </footer>
  );
};

export default Footer;
