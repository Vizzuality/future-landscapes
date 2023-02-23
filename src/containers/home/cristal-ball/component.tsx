import { forwardRef } from 'react';

import { readWriteStepAtom } from 'store/step';

import { useRive } from '@rive-app/react-canvas';
import { useAtom } from 'jotai';

import { useAnimatedCounter } from 'hooks/animated-counter';

import Background from 'containers/background';

const CristalBall = forwardRef<HTMLDivElement>((_, ref) => {
  const { RiveComponent: RiveBallComponent } = useRive({
    src: `/images/background/cristal_ball.riv`,
    autoplay: true,
  });

  const count = useAnimatedCounter(0, 100, 4, (v) => `${v.toFixed(0)}%`);

  return (
    <>
      <div ref={ref}>
        <div
          ref={ref}
          className="flex h-screen w-full flex-col items-center justify-center space-y-10 bg-black text-center text-white"
        >
          <div className="h-52 w-52">
            <RiveBallComponent />
          </div>

          <p className="text-white">Creating your Future Landscape</p>
          <p>{count}</p>
        </div>
      </div>
    </>
  );
});

CristalBall.displayName = 'CristalBall';

export default CristalBall;
