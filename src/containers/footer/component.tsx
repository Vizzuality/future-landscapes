import { useModal } from 'hooks/modals';

import Icon from 'components/icon';
import Modal from 'components/modal';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

import AboutContent from './about';

const Footer = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();
  return (
    <footer>
      <div className="relative z-10 flex w-full justify-between bg-transparent p-4 text-base lg:text-xl">
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
      </div>
      <Modal
        size="s"
        title=""
        open={isModalOpen}
        onOpenChange={closeModal}
        dismissable
        className="bg-black text-white"
      >
        <AboutContent />
      </Modal>
    </footer>
  );
};

export default Footer;
