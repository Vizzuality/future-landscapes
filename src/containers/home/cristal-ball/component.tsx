import { readWriteStepAtom } from 'store/step';

import { useRive } from '@rive-app/react-canvas';
import { useAtom } from 'jotai';

import Background from 'components/background';

const CristalBall = () => {
  const [step] = useAtom(readWriteStepAtom);
  const { RiveComponent: RiveBallComponent } = useRive({
    src: `/images/background/cristal_ball.riv`,
    autoplay: true,
  });

  return (
    <Background color="bg-black" step={step}>
      <div className="flex flex-col items-center justify-center h-full w-full space-y-10 text-center text-white max-w-4xl">
        <div className="h-52 w-52">
          <RiveBallComponent />
        </div>

        <p className="text-white">Creating your Future Landscape</p>
        <p>(68%)</p>
      </div>
    </Background>
  );
};

export default CristalBall;
