import { useCallback } from 'react';

import { Form as FormRFF } from 'react-final-form';

import { useRouter } from 'next/router';

import { directionAtom } from 'store/slider';
import { solutionsAtom } from 'store/solutions';
import { stepAtom } from 'store/step';

import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import Background from 'containers/background';

import { SOLUTIONS } from '../solution/constants';

import { COLORS } from './constants';
import Question from './question';

const INITIAL_VALUES = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
};

const Questions = () => {
  const { push } = useRouter();
  const [step] = useAtom(stepAtom);
  const [direction] = useAtom(directionAtom);

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

  return (
    <FormRFF onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {(fprops) => (
        <Background color={bgColor} step={step}>
          <form onSubmit={fprops.handleSubmit} autoComplete="off" className="h-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                variants={{
                  enter: (direction) => ({
                    x: direction === 'backward' ? '-100%' : '100%',
                  }),
                  center: { x: 0 },
                  exit: (direction) => ({
                    x: direction === 'backward' ? '100%' : '-100%',
                  }),
                }}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <Question id={step} />
              </motion.div>
            </AnimatePresence>
          </form>
        </Background>
      )}
    </FormRFF>
  );
};

export default Questions;
