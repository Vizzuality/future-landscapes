import classNames from 'classnames';

import RiveComponent from 'components/rive-component';
import cn from 'lib/classnames';

import type { BackgroundProps } from './types';

const STARS_0 = [
  {
    id: 1,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-32 right-40 h-5 w-5',
  },
  {
    id: 2,
    src: `/images/background/star2.riv`,
    autoplay: true,
    className: 'absolute top-20 left-8 h-14 w-16',
  },
  {
    id: 3,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-12 left-36 h-10 w-10',
  },
  {
    id: 4,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute bottom-16 right-10 h-10 w-10',
  },
];

const STARS_QUESTIONS = [
  {
    id: 5,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute top-[280px] left-80 h-5 w-5',
  },
  {
    id: 6,
    src: `/images/background/star1.riv`,
    autoplay: true,
    className: 'absolute bottom-52 left-11 h-11 w-11',
  },
];

export const Background: React.FC<BackgroundProps> = ({
  children,
  color,
  step,
}: BackgroundProps) => {
  return (
    <div
      className={cn({
        'lg:bg-multiple-img h-full w-full overflow-hidden transition-colors': true,
        [color]: color,
      })}
    >
      {step === 0 &&
        STARS_0.map((s) => (
          <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
        ))}

      {step > 0 &&
        step <= 4 &&
        STARS_QUESTIONS.map((s) => (
          <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
        ))}

      {children}
    </div>
  );
};

export default Background;
