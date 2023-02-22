import { useModal } from 'hooks/modals';

import Icon from 'components/icon';
import Modal from 'components/modal';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

import AboutContent from './about';

const Hero = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();

  return (
    <>
      <div className="flex items-center space-x-2 text-black">
        <p>Future Landscapes by:</p>
        <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-7 lg:w-32" />
        </a>
      </div>

      <div className="bg-blue-0 text-black">
        <button type="button" onClick={openModal} className="underline">
          About
        </button>
      </div>
      <Modal
        size="s"
        title=""
        open={isModalOpen}
        onOpenChange={closeModal}
        dismissable
        className="h-2/3 rounded-t-3xl bg-black text-white"
      >
        <AboutContent />
      </Modal>
    </>
  );
};

export default Hero;
