import { playingAtom } from 'store/playing';

import { useAtom } from 'jotai';

import { Media } from 'components/media-query';
import RiveComponent from 'components/rive-component';
import cn from 'lib/classnames';

import type { BackgroundProps } from './types';

const STARS_0 = [
  {
    id: 1,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-32 right-40 lg:top-52 lg:right-64 h-5 w-5 lg:h-6 lg:w-6',
  },
  {
    id: 2,
    src: `/images/background/star2.riv`,
    autoplay: true,
    className: 'absolute top-20 left-8 lg:top-40 lg:left-72 h-14 w-14 lg:h-16',
  },
  {
    id: 3,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-12 left-36 lg:top-32 lg:left-2/3 h-10 w-10 lg:h-14',
  },
  {
    id: 4,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute bottom-24 right-24 lg:bottom-44 lg:right-1/3 h-6 w-6',
  },
];

const STARS_QUESTIONS = [
  {
    id: 5,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-[280px] left-80 h-5 w-5 lg:h-20 lg:w-20 lg:left-[650px] lg:top-20',
  },
  {
    id: 6,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute bottom-52 left-11 h-11 w-11 lg:h-24 lg:w-24 lg:left-1/3 lg:bottom-64',
  },
  {
    id: 7,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'lg:absolute lg:h-16 lg:w-16 lg:right-32 lg:bottom-[300px]',
  },
];

export const Background: React.FC<BackgroundProps> = ({
  children,
  color,
  step,
}: BackgroundProps) => {
  const [playing] = useAtom(playingAtom);
  return (
    <>
      <Media
        lessThan="sm"
        className={cn({
          'h-full w-full overflow-hidden transition-colors': true,
          [color]: color,
          'lg:bg-multiple-img': step !== 0,
        })}
      >
        {!playing &&
          STARS_0.map((s) => (
            <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
          ))}

        {step > 0 &&
          step <= 4 &&
          STARS_QUESTIONS.map((s) => (
            <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
          ))}

        {children}
      </Media>
      <Media
        greaterThanOrEqual="sm"
        className={cn({
          'h-full w-full overflow-hidden transition-colors': true,
          [color]: color,
          'lg:bg-multiple-img': step !== 0,
        })}
      >
        {!playing &&
          STARS_0.map((s) => (
            <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
          ))}

        {step > 0 &&
          step <= 4 &&
          STARS_QUESTIONS.map((s) => (
            <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
          ))}

        {children}
      </Media>
    </>
  );
};

export default Background;
