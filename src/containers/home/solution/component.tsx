import { forwardRef, useCallback } from 'react';

import { useForm } from 'react-final-form';

import { useRouter } from 'next/router';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Button from 'components/button';
import Icon from 'components/icon';
import RiveComponent from 'components/rive-component';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

import { SOLUTIONS } from './constants';

const Solution = () => {
  const [step, setStep] = useAtom(readWriteStepAtom);
  const { query } = useRouter();

  const solution = SOLUTIONS.find((s) => s.slug === query.slug);
  const { illustration, title, content } = solution;

  return (
    <div className="flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-center lg:space-x-4">
      <Icon icon={VIZZ_SVG} className="h-5 w-20 lg:h-7 lg:w-32" />

      <div className="overflow-hidden rounded-3xl border">
        <RiveComponent imageUrl={illustration} autoplay className="h-[580px] w-96 p-2" />
        <div className="space-y-4 bg-black p-3 font-sans text-white">
          <p className="text-xl font-semibold">{title}</p>
          {content}
        </div>
      </div>

      <div className="space-y-4 font-sans text-lg">
        <p>
          Your choices have created your variation of our shared future landscape. Together, all
          these visions will help us shape a sustainable future and a better world.
        </p>
        <p>Curious to see what your friends envision? Share your picture with them and find out!</p>
      </div>

      <div className="flex items-center">
        <Button theme="primary-alt" size="xl" onClick={() => setStep(step + 1)}>
          Share
        </Button>
      </div>
    </div>
  );
};

export default Solution;
