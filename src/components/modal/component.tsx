import {
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';

import { Media } from 'components/media-query';

import ModalContent from './content';
import { OVERLAY_CLASSES } from './content/constants';
import { ModalProps } from './types';

export const Modal = (props: ModalProps) => {
  const { open, onOpenChange, dismissable } = props;
  const { floating, context } = useFloating({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([
    useRole(context),
    useDismiss(context, {
      enabled: dismissable,
    }),
  ]);

  const overlayFramerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <FloatingOverlay className="fixed top-0 left-0">
            <motion.div
              variants={overlayFramerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={OVERLAY_CLASSES}
            >
              <FloatingFocusManager context={context}>
                <>
                  <Media
                    lessThan="sm"
                    className="pointer-events-none absolute top-0 left-0 h-full w-full grow"
                  >
                    <ModalContent
                      {...props}
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </Media>
                  <Media
                    greaterThanOrEqual="sm"
                    className="pointer-events-none absolute top-0 left-0 h-full w-full grow"
                  >
                    <ModalContent
                      {...props}
                      viewport="sm"
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </Media>
                </>
              </FloatingFocusManager>
            </motion.div>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default Modal;
