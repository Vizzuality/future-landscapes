import { useCallback, useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { readWritePlayingAtom } from 'store/playing';
import { readWriteSolutionsAtom } from 'store/solutions';
import { readWriteStepAtom } from 'store/step';

import { LayoutGroup, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { useModal } from 'hooks/modals';

import Button from 'components/button';
import Carousel from 'components/carousel';
import Icon from 'components/icon';
import Modal from 'components/modal';
import RiveComponent from 'components/rive-component';
import cn from 'lib/classnames';

import DOWNLOAD_SVG from 'svgs/ui/download.svg?sprite';
import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

import ProjectCard from './card';
import { SOLUTIONS, PROJECTS } from './constants';
import ShareContent from './share/component';

const Solution = () => {
  const [slide, setSlide] = useState(0);
  const [, setStep] = useAtom(readWriteStepAtom);
  const [, setSolutions] = useAtom(readWriteSolutionsAtom);
  const [, setPalying] = useAtom(readWritePlayingAtom);
  const { query } = useRouter();
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModal();

  const solution = SOLUTIONS.find((s) => s.slug === query.slug);
  const { illustration, title, content, pdf_desktop, pdf_mobile, projects } = solution;
  const projectsArray = PROJECTS.filter((p) => projects.includes(p.id));

  const FORMATED_CARDS = useMemo(() => {
    const cards = projectsArray.map((p) => {
      return {
        id: p.id,
        content: <ProjectCard {...p} />,
      };
    });

    return cards;
  }, [projectsArray]);

  const resetToPlay = useCallback(() => {
    setSolutions('');
    setStep(1);
    setPalying(false);
  }, [setPalying, setSolutions, setStep]);

  return (
    <>
      <div className="flex flex-col items-center pt-4 lg:hidden">
        <Link href="/">
          <Icon icon={VIZZ_SVG} className="h-5 w-20 lg:h-7 lg:w-32" />
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-10 p-4 pb-10 lg:flex-row lg:justify-center lg:space-x-4">
        <div className="relative overflow-hidden rounded-3xl border-2">
          <a
            href={pdf_desktop}
            rel="noreferrer noopener"
            target="_blank"
            className="absolute top-2 right-2 flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-black/10"
          >
            <Icon icon={DOWNLOAD_SVG} className="h-8 w-8 text-white" />
          </a>

          <RiveComponent imageUrl={illustration} autoplay className="h-[580px] w-96" />
          <div className="space-y-4 bg-black p-3 font-sans text-white">
            <p className="text-xl font-semibold">{title}</p>
            {content}
          </div>
        </div>

        <div className="space-y-4 font-sans text-lg">
          <p>
            Your choices have created your variation of our shared future landscape. Together, all
            these visions will help us shape a sustainable future and a better world.
          </p>
          <p>
            Curious to see what your friends envision? Share your picture with them and find out!
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <Button theme="primary-alt" size="xl" onClick={openModal}>
            Share
          </Button>

          <a
            href={pdf_desktop}
            rel="noreferrer noopener"
            target="_blank"
            className="flex items-end space-x-3 hover:bg-black/10"
          >
            <p className="text-base font-semibold"> Save Results</p>
            <Icon icon={DOWNLOAD_SVG} className="h-7 w-7" />
          </a>
        </div>

        <div
          className="h-3 w-full bg-repeat"
          style={{ backgroundImage: 'url(/images/solution/divider.png)' }}
        />

        <div className="space-y-4 font-sans text-lg">
          <p>Thank you for imagining with us. Now, how do we get to that better future?</p>
          <p>
            At <b>vizzuality</b>, we aim to turn vision into reality by working at the intersection
            of digital and sustainable transformation.
          </p>
          <p>
            Here are some projects that will interest you based on your answers. Feel free to
            explore now or save them for later.
          </p>
        </div>

        <div className="w-full space-y-5 overflow-hidden">
          <Carousel
            slide={slide}
            slides={FORMATED_CARDS}
            autoplay={0}
            onChange={(i) => {
              setSlide(i);
            }}
          />

          <div className="relative flex grow justify-center space-x-3">
            <LayoutGroup>
              {FORMATED_CARDS.map((c, i) => {
                return (
                  <motion.button
                    key={c.id}
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
                      width: i === slide ? 40 : 8,
                    }}
                    onClick={() => {
                      setSlide(i);
                    }}
                  />
                );
              })}
            </LayoutGroup>
          </div>
        </div>

        <div
          className="h-3 w-full bg-repeat"
          style={{ backgroundImage: 'url(/images/solution/divider.png)' }}
        />

        <div className="flex flex-col items-center space-y-8">
          <Link href="/">
            <Button theme="primary-alt" size="xl" onClick={resetToPlay}>
              Play Again
            </Button>
          </Link>

          <a
            href={pdf_desktop}
            rel="noreferrer noopener"
            target="_blank"
            className="flex items-end space-x-3 hover:bg-black/10"
          >
            <p className="text-base font-semibold"> Save Results</p>
            <Icon icon={DOWNLOAD_SVG} className="h-7 w-7" />
          </a>
        </div>
      </div>
      <Modal
        size="s"
        title=""
        open={isModalOpen}
        onOpenChange={closeModal}
        dismissable
        className="z-20"
      >
        <ShareContent />
      </Modal>
    </>
  );
};

export default Solution;
