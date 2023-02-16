import { forwardRef, useCallback } from 'react';

import { useForm } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Button from 'components/button';
import Icon from 'components/icon';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

const Question = () => {
  const form = useForm();
  const { values } = form.getState();

  const [step, setStep] = useAtom(readWriteStepAtom);

  return (
    <div className="flex flex-col items-center space-y-20 lg:flex-row lg:justify-center lg:space-x-4">
      <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-7 lg:w-32" />
      <Button theme="primary" size="xl" onClick={() => setStep(step + 1)}>
        Share
      </Button>
    </div>
  );
};

export default Question;
