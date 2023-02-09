import { useCallback } from 'react';

import { Form as FormRFF } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import Background from 'components/background';

import { COLORS, QUESTIONS } from './constants';
import Question from './question';

const INITIAL_VALUES = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
};

const Questions = () => {
  const [step, setStep] = useAtom(readWriteStepAtom);

  const { bgColor } = COLORS.find((c) => c.id === step);

  const handleSubmit = useCallback(
    (values) => {
      console.log({ values });
      setStep(step + 1);
    },
    [setStep, step]
  );

  return (
    <FormRFF onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {(fprops) => (
        <Background color={bgColor} step={step}>
          <form onSubmit={fprops.handleSubmit} autoComplete="off">
            {/* Questions */}
            <AnimatePresence>
              {QUESTIONS.filter((q) => q.id === step).map((q) => (
                <Question key={q.name} id={q.id} />
              ))}
            </AnimatePresence>
          </form>
        </Background>
      )}
    </FormRFF>
  );
};

export default Questions;
