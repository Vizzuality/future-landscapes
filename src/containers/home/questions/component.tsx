import { useCallback } from 'react';

import { Form as FormRFF } from 'react-final-form';

import { useRouter } from 'next/router';

import { readWritePlayingAtom } from 'store/playing';
import { readWriteSolutionsAtom } from 'store/solutions';
import { readWriteStepAtom } from 'store/step';

import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import Background from 'containers/background';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { SOLUTIONS } from '../solution/constants';

import { COLORS, QUESTIONS } from './constants';
import Question from './question';

const INITIAL_VALUES = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
};

const Questions = () => {
  const { push } = useRouter();

  const [step, setStep] = useAtom(readWriteStepAtom);
  const [, setSolutions] = useAtom(readWriteSolutionsAtom);
  const [, setPalying] = useAtom(readWritePlayingAtom);

  const { bgColor } = step !== 0 && COLORS.find((c) => c.id === step);

  const handleSubmit = useCallback(
    (values) => {
      setTimeout(() => {
        const { a, b, c, d } = values;
        const S = SOLUTIONS.find((s) => s.id === `${a}${b}${c}${d}`);

        push({
          pathname: `/solutions/${S.slug}`,
        });
      }, 3000);
    },
    [push]
  );

  const resetToPlay = useCallback(() => {
    setSolutions('');
    setStep(1);
    setPalying(false);
  }, [setPalying, setSolutions, setStep]);

  return (
    <FormRFF onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {(fprops) => (
        <Background color={bgColor} step={step}>
          <button type="button" onClick={resetToPlay} className="absolute top-4 right-4 z-10">
            <Icon icon={CLOSE_SVG} className="h-6 w-6 lg:h-7 lg:w-7" />
          </button>
          <form onSubmit={fprops.handleSubmit} autoComplete="off" className="h-full">
            <AnimatePresence>
              {QUESTIONS.filter((q) => q.id === step).map((q) => {
                return (
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full"
                    variants={{
                      enter: {
                        x: '100%',
                      },
                      center: { x: 0 },
                      exit: {
                        x: '-100%',
                      },
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: 'anticipate',
                    }}
                    key={q.id}
                  >
                    <Question id={q.id} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </form>
        </Background>
      )}
    </FormRFF>
  );
};

export default Questions;
