import { useCallback, useMemo } from 'react';

import { Form as FormRFF } from 'react-final-form';

import { useRouter } from 'next/router';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Background from 'containers/background';

import Carousel from 'components/carousel';

import { COLORS, QUESTIONS } from './constants';
import CristalBall from './cristal-ball';
import Question from './question';

const INITIAL_VALUES = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
};

const SOLUTIONS = [
  {
    id: '0000',
    name: 'lalala',
    slug: 'nature-rulebook',
  },
  {
    id: '0001',
    name: 'lalala',
    slug: 'systems-atlas',
  },
  {
    id: '0002',
    name: 'Corridors of Life',
    slug: 'corridors-of-life',
  },
];

const Questions = () => {
  const { push } = useRouter();
  const [step, setStep] = useAtom(readWriteStepAtom);

  const { bgColor } = step !== 0 && COLORS.find((c) => c.id === step);

  const handleSubmit = useCallback((values) => {
    setTimeout(() => {
      const { a, b, c, d } = values;
      const S = SOLUTIONS.find((s) => s.id === `${a}${b}${c}${d}`);

      push(`/solutions/${S.slug}`);
    }, 2000);
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

  console.log({ FORMATED_QUESTIONS });

  return (
    <FormRFF onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {(fprops) => (
        <Background color={bgColor} step={step}>
          <form onSubmit={fprops.handleSubmit} autoComplete="off">
            {/* Questions */}
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
