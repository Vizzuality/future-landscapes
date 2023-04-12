import { playingAtom } from 'store/playing';

import { useAtom } from 'jotai';

import { Media } from 'components/media-query';
import RiveComponent from 'components/rive-component';
import cn from 'lib/classnames';

import { STARS_0, STARS_4, STARS_QUESTIONS } from './constants';
import type { BackgroundProps } from './types';

export const Background: React.FC<BackgroundProps> = ({
  children,
  color,
  step,
}: BackgroundProps) => {
  const [playing] = useAtom(playingAtom);

  return (
    <div
      className={cn({
        'h-full w-full overflow-hidden transition-colors': true,
        [color]: color,
        'lg:bg-multiple-img': step !== 0,
      })}
    >
      {!playing &&
        step !== 4 &&
        STARS_0.map((s) => (
          <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
        ))}

      {step > 0 &&
        step <= 4 &&
        STARS_QUESTIONS.map((s) => (
          <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
        ))}

      {step === 4 &&
        STARS_4.map((s) => (
          <RiveComponent key={s.id} imageUrl={s.src} autoplay className={s.className} />
        ))}

      {children}
    </div>
  );
};

export default Background;
