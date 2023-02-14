import { useCallback } from 'react';

import { Field as FieldRFF, useForm } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { useAtom } from 'jotai';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { QUESTIONS } from '../constants';

import Button from './button';

const Question = ({ id }) => {
  const form = useForm();
  const [step, setStep] = useAtom(readWriteStepAtom);

  const { name, question, options } = QUESTIONS.find((q) => q.id === id);

  const handleOnChange = useCallback(
    (v) => {
      form.change(name, v);
      if (id === QUESTIONS.length) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    },
    [form, name, id, setStep, step]
  );

  return (
    <div
      key={id}
      className="absolute top-0 left-0 flex h-full w-full flex-col items-center space-y-20 p-4 text-black lg:flex-row lg:justify-center lg:space-x-4"
    >
      <div className="max-w-lg space-y-4">
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
        <FieldRFF name={name}>
          {() => {
            return <Button options={options} onChange={handleOnChange} />;
          }}
        </FieldRFF>
      </div>
    </div>
  );
};

export default Question;
