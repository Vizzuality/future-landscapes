import React from 'react';

import { useModal } from 'hooks/modals';

// import Image from 'next/image';
// import Link from 'next/link';

// import Wrapper from 'containers/wrapper';

import Icon from 'components/icon';
import Modal from 'components/modal';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

import AboutContent from './about';

const Footer = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();
  return (
    <footer>
      <div className="flex justify-between w-full bg-transparent p-4 relative z-10 text-base lg:text-xl">
        <div className="flex items-center space-x-2 text-black">
          <p>Future Landscapes by:</p>
          <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
            <Icon icon={VIZZ_SVG} className="w-20 h-4 lg:w-32 lg:h-7" />
          </a>
        </div>

        <div className="text-black bg-blue-0">
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
