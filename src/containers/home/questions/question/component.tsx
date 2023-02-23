import { forwardRef, useCallback } from 'react';

import { Field as FieldRFF, useForm } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { QUESTIONS } from '../constants';

import Button from './button';

interface QuestionProps {
  id: number | string;
}

const Question = forwardRef<HTMLDivElement, QuestionProps>(({ id }, ref) => {
  const form = useForm();

  const [step, setStep] = useAtom(readWriteStepAtom);

  const { name, question, options } = QUESTIONS.find((q) => q.id === id);

  const handleOnChange = useCallback(
    (v) => {
      form.change(name, v);
      setStep(step + 1);
    },
    [form, name, setStep, step]
  );

  return (
    <div key={id} ref={ref}>
      <div className="flex h-screen w-screen flex-col items-center space-y-20 overflow-hidden p-4 lg:flex-row lg:justify-center lg:space-x-4">
        <div className="w-full max-w-lg space-y-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">
              {`0${id}`}
              <span className="opacity-20"> - 04</span>
            </p>
            <button type="button" onClick={() => setStep(0)}>
              <Icon icon={CLOSE_SVG} className="h-6 w-6 lg:h-7 lg:w-32" />
            </button>
          </div>

          {question}
        </div>
        <div className="space-y-3">
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
