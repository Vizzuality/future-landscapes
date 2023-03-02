import { useRouter } from 'next/router';

import { playingAtom } from 'store/playing';
import { solutionsAtom } from 'store/solutions';

import { useAtom } from 'jotai';

import cn from 'lib/classnames';

import Hero from './hero';
import Questions from './questions';
import Solution from './solution';

const Footer = () => {
  const { query } = useRouter();

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
        {!query.slug && !playing && !solutions && <Hero />}
        {!query.slug && playing && !solutions && <Questions />}
        {query.slug && <Solution />}
      </div>
    </footer>
  );
};

export default Footer;
