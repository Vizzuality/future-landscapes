import { useRive } from '@rive-app/react-canvas';

import cn from 'lib/classnames';

import type { BackgroundProps } from './types';

export const Background: React.FC<BackgroundProps> = ({
  children,
  color,
  step,
}: BackgroundProps) => {
  const { RiveComponent: RiveSmallStarComponent } = useRive({
    src: `/images/background/star1.riv`,
    autoplay: true,
  });

  const { RiveComponent: RiveBigStarComponent } = useRive({
    src: `/images/background/star2.riv`,
    autoplay: true,
  });

  return (
    <div
      className={cn({
        'lg:bg-multiple-img h-full w-full overflow-hidden': true,
        [color]: color,
      })}
    >
      <div
        className={cn({
          // eslint-disable-next-line prettier/prettier
          'absolute': true,
          'top-[280px] left-80 h-5 w-5': step !== 0,
          'top-32 right-40 h-5 w-5': step === 0,
        })}
      >
        <RiveSmallStarComponent />
      </div>

      <div
        className={cn({
          // eslint-disable-next-line prettier/prettier
          'absolute': true,
          'bottom-52 left-11 h-11 w-11': step !== 0,
          'top-20 left-8 h-14 w-16': step === 0,
        })}
      >
        <RiveBigStarComponent />
      </div>
      {step === 0 && (
        <>
          <div className="absolute top-12 left-36 h-10 w-10">
            <RiveSmallStarComponent />
          </div>
          <div className="absolute bottom-16 right-10 h-10 w-10">
            <RiveSmallStarComponent />
          </div>
        </>
      )}

      {children}
    </div>
  );
};

export default Background;
