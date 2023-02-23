import { FC } from 'react';

import { motion } from 'framer-motion';

import Icon from 'components/icon';
import cn from 'lib/classnames';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { CONTENT_CLASSES } from './constants';
import type { ModalContentProps } from './types';

export const ModalContent: FC<ModalContentProps> = ({
  size = 'default',
  children,
  className,
  viewport,
  floating,
  getFloatingProps,
  onOpenChange,
}: ModalContentProps) => {
  const contentFramerVariants = {
    initial: (v) => ({
      opacity: 0,
      x: v === 'sm' ? '-50%' : '0%',
      y: v === 'sm' ? '60%' : '100%',
    }),
    animate: (v) => ({
      opacity: 1,
      x: v === 'sm' ? '-50%' : '0%',
      y: v === 'sm' ? '-50%' : '0%',
      transition: {
        duraion: 0.25,
        delay: 0.125,
      },
    }),
    exit: (v) => ({
      opacity: 0,
      x: v === 'sm' ? '-50%' : '0%',
      y: v === 'sm' ? '-60%' : '100%',
      transition: {
        delay: 0,
        duration: 0.25,
      },
    }),
  };

  return (
    <motion.div
      variants={contentFramerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={viewport}
      className={cn({ [CONTENT_CLASSES[size]]: true, [className]: !!className })}
      {...getFloatingProps({
        ref: floating,
      })}
    >
      <div className="relative flex grow flex-col overflow-hidden">
        <button
          type="button"
          onClick={() => {
            onOpenChange(false);
          }}
          className="text-gray-300 absolute top-6 right-6 flex items-center px-4 py-4 text-sm sm:hidden"
        >
          <Icon icon={CLOSE_SVG} className="hidden h-3 w-3 text-white sm:inline-block" />
        </button>

        {children}
      </div>
    </motion.div>
  );
};

export default ModalContent;
