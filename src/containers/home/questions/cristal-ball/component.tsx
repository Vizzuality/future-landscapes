import { forwardRef, useCallback, useMemo } from 'react';

import { FormSpy, useForm } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { useRive } from '@rive-app/react-canvas';
import { useAtom } from 'jotai';

import { useAnimatedCounter } from 'hooks/animated-counter';

import Background from 'containers/background';

const CristalBall = forwardRef<HTMLDivElement>((_, ref) => {
  const form = useForm();
  const [step] = useAtom(readWriteStepAtom);
  const { RiveComponent: RiveBallComponent } = useRive({
    src: `/images/background/cristal_ball.riv`,
    autoplay: true,
  });

  const count = useAnimatedCounter(0, 100, 10, (v) => `${v.toFixed(0)}%`);
  // console.log('count', step === 5 && count);
  // console.log({ step });

  return (
    <>
      <FormSpy
        subscription={{ valid: true, dirty: true }}
        onChange={(props) => {
          if (props.valid && props.dirty) {
            form.submit();
          }
        }}
      />
      <div ref={ref}>
        <div
          ref={ref}
          className="flex h-screen w-full max-w-4xl flex-col items-center justify-center space-y-10 text-center text-white"
        >
          <div className="h-52 w-52">
            <RiveBallComponent />
          </div>

          <p className="text-white">Creating your Future Landscape</p>
          <p>{step === 5 && count}</p>
        </div>
      </div>
    </>
  );
});

CristalBall.displayName = 'CristalBall';

export default CristalBall;
