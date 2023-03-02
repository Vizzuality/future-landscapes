import { forwardRef, useCallback } from 'react';

import { Field as FieldRFF, useForm } from 'react-final-form';

import { readWriteSolutionsAtom } from 'store/solutions';
import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import { composeValidators } from 'components/forms/validations';

import { QUESTIONS } from '../constants';

import Button from './button';

interface QuestionProps {
  id: number | string;
}

const Question = forwardRef<HTMLDivElement, QuestionProps>(({ id }, ref) => {
  const form = useForm();

  const [step, setStep] = useAtom(readWriteStepAtom);
  const [, setSolutions] = useAtom(readWriteSolutionsAtom);

  const { name, question, options } = QUESTIONS.find((q) => q.id === id);

  const handleOnChange = useCallback(
    (v) => {
      if (step < 4) {
        setStep(step + 1);
        form.change(name, v);
      }
      if (step === 4) {
        form.change(name, v);

        const { hasValidationErrors, values } = form.getState();
        !hasValidationErrors && form.submit();

        const { a, b, c, d } = values;
        setSolutions(`${a}${b}${c}${d}`);
      }
    },
    [form, name, setSolutions, setStep, step]
  );

  return (
    <div key={id} ref={ref}>
      <div className="grid h-screen w-screen grid-cols-12 justify-items-center gap-4 overflow-hidden p-4 lg:gap-4">
        <div className="col-span-12 max-w-lg space-y-4 lg:col-span-4 lg:col-start-3">
          <div>
            <p className="text-xl font-semibold">
              {`0${id}`}
              <span className="opacity-20"> - 04</span>
            </p>
          </div>

          {question}
        </div>
        <div className="col-span-10 col-start-2 space-y-6 self-start lg:col-span-4 lg:col-end-11 lg:self-auto">
          <FieldRFF name={name} validate={composeValidators([{ presence: true }])}>
            {() => {
              return <Button options={options} onChange={handleOnChange} />;
            }}
          </FieldRFF>
        </div>
      </div>
    </div>
  );
});

Question.displayName = 'Question';

export default Question;
