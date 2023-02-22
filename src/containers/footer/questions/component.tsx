import { useCallback } from 'react';

import { useForm } from 'react-final-form';

import { readWriteStepAtom } from 'store/step';

import { LayoutGroup, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { QUESTIONS } from 'containers/home/questions/constants';

import Icon from 'components/icon';
import cn from 'lib/classnames';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

const Questions = () => {
  const [step, setStep] = useAtom(readWriteStepAtom);

  return (
    <>
      <div className="text-black">
        <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-7 lg:w-32" />
        </a>
      </div>

      <div className="relative flex grow space-x-3">
        <LayoutGroup>
          {QUESTIONS.map((q) => {
            return (
              <motion.button
                key={q.id}
                type="button"
                aria-label="progress-dot"
                className={cn({
                  'relative block h-2 w-2 rounded-full bg-black': true,
                })}
                initial={{
                  opacity: 1,
                  width: 8,
                }}
                animate={{
                  opacity: 1,
                  width: q.id === step ? 40 : 8,
                }}
                onClick={() => {
                  setStep(q.id);
                }}
              />
            );
          })}
        </LayoutGroup>
      </div>
    </>
  );
};

export default Questions;
