import { useCallback, useMemo } from 'react';

import { Form as FormRFF } from 'react-final-form';

import { useRouter } from 'next/router';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Background from 'containers/background';

import Carousel from 'components/carousel';

import { SOLUTIONS } from '../solution/constants';

import { COLORS, QUESTIONS } from './constants';
import CristalBall from './cristal-ball';
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

  const { bgColor } = step !== 0 && COLORS.find((c) => c.id === step);

  const handleSubmit = useCallback((values) => {
    setTimeout(() => {
      const { a, b, c, d } = values;
      const S = SOLUTIONS.find((s) => s.id === `${a}${b}${c}${d}`);

      push({
        pathname: `/solutions/${S.slug}`,
      });
    }, 10000);
  }, []);

  const FORMATED_QUESTIONS = useMemo(() => {
    const qs = QUESTIONS.map((q) => {
      const { id, name } = q;
      return {
        id: id,
        name: name,
        content: <Question key={name} id={id} />,
      };
    });

    const loader = {
      id: 5,
      name: 'e',
      content: <CristalBall />,
    };

    return [...qs, loader];
  }, []);

  return (
    <FormRFF onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {(fprops) => (
        <Background color={bgColor} step={step}>
          <form onSubmit={fprops.handleSubmit} autoComplete="off">
            <Carousel
              slide={step - 1}
              slides={FORMATED_QUESTIONS}
              autoplay={0}
              onWillChange={({ index }) => {
                setStep(index + 1);
              }}
            />
          </form>
        </Background>
      )}
    </FormRFF>
  );
};

export default Questions;
