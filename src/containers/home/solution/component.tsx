import { useCallback, useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { readWritePlayingAtom } from 'store/playing';
import { readWriteSolutionsAtom } from 'store/solutions';
import { readWriteStepAtom } from 'store/step';

import { LayoutGroup, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { useModal } from 'hooks/modals';

import Background from 'containers/background';

import Button from 'components/button';
import Carousel from 'components/carousel';
import Icon from 'components/icon';
import { Media } from 'components/media-query';
import Modal from 'components/modal';
import RiveComponent from 'components/rive-component';
import cn from 'lib/classnames';

import INSTA_SVG from 'svgs/social/insta.svg?sprite';
import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';
import WEB_SVG from 'svgs/social/web.svg?sprite';
import ARROW_DOWN_SVG from 'svgs/ui/arrow-down.svg?sprite';
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
  const { social, slug, illustration, title, content, pdf_desktop, pdf_mobile, projects } =
    solution;
  const projectsArray = PROJECTS.filter((p) => projects.includes(p.id));

  const FORMATED_CARDS = useMemo(() => {
    const cards = projectsArray.map((p, i) => {
      return {
        id: p.id,
        content: <ProjectCard keyIndex={i} {...p} />,
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
      <div className="flex flex-col items-center px-4 pt-4 lg:flex-row lg:justify-between">
        <a href="https://bit.ly/3G4DJZL" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-5 w-20 lg:h-6 lg:w-24" />
        </a>
        <div className="flex space-x-11 lg:space-x-6">
          <a href="https://bit.ly/3G4DJZL" target="_blank" rel="noopener noreferrer">
            <Icon icon={WEB_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
          </a>
          <a href="https://bit.ly/3fTtKQ5" target="_blank" rel="noopener noreferrer">
            <Icon icon={TWITTER_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
          </a>
          <a href="https://bit.ly/3UMCd6D" target="_blank" rel="noopener noreferrer">
            <Icon icon={INSTA_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
          </a>
          <a href=" https://bit.ly/3Ux6h6A" target="_blank" rel="noopener noreferrer">
            <Icon icon={LINKEDIN_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
          </a>
        </div>
      </div>
      <div className="relative grid grid-cols-12 items-center p-4 pb-10 lg:gap-7 lg:p-8">
        <Media
          greaterThanOrEqual="sm"
          className="absolute bottom-10 right-2 flex flex-col items-center space-y-8"
        >
          <p className="-rotate-90 text-xs uppercase">scroll</p>
          <Icon icon={ARROW_DOWN_SVG} className="h-4 w-4 animate-bounce" />
        </Media>
        <div className="col-span-12 grid h-full grid-cols-1 overflow-hidden rounded-3xl border-2 lg:col-span-6 lg:col-start-2 lg:grid-cols-12">
          <div className="relative w-full place-self-start overflow-hidden lg:col-span-7">
            <a
              href={social.solution}
              download={`${slug}.png`}
              rel="noreferrer noopener"
              target="_blank"
              className="absolute top-2 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-black hover:bg-white"
            >
              <Icon icon={DOWNLOAD_SVG} className="h-6 w-6 text-white hover:text-black" />
            </a>

            <RiveComponent imageUrl={illustration} autoplay className="aspect-[528/848]" />
          </div>

          <div className="space-y-4 bg-black p-3 font-sans text-white lg:col-span-5 lg:p-4">
            <p className="text-xl font-semibold">{title}</p>
            {content}
          </div>
        </div>

        <div className="col-span-12 flex h-full w-full flex-col items-center space-y-10 pt-6 pb-6 lg:col-span-4 lg:col-end-12 lg:justify-center lg:space-y-8">
          <div className="space-y-4 font-sans text-lg lg:space-y-6 lg:text-base">
            <p className="lg:font-display lg:text-3xl">
              Your choices have created your variation of our shared future landscape.
            </p>
            <p>
              Together, all these visions will help us shape a sustainable future and a better
              world.
            </p>
            <p>
              Curious to see what your friends envision? Share your picture with them and find out!
            </p>
          </div>

          <Media lessThan="sm" className="flex w-full flex-col items-center space-y-8">
            <Button theme="primary-alt" size="xl" onClick={openModal}>
              Share
            </Button>

            <a
              href={pdf_desktop}
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-end space-x-3 hover:bg-white"
            >
              <p className="text-base font-semibold"> Save Results</p>
              <Icon icon={DOWNLOAD_SVG} className="h-7 w-7" />
            </a>
          </Media>

          <Media greaterThanOrEqual="sm" className="flex w-full flex-row items-center space-x-6">
            <Link href="/">
              <Button theme="primary-alt" size="base" onClick={resetToPlay}>
                Play Again
              </Button>
            </Link>

            <Button theme="primary-alt" size="base" onClick={openModal}>
              Share
            </Button>

            <a href={pdf_desktop} rel="noreferrer noopener" target="_blank" className="pr-4">
              <p className="text-base font-semibold underline underline-offset-2 hover:no-underline">
                {' '}
                Save Results
              </p>
            </a>
          </Media>

          <Media lessThan="sm" className="w-full">
            <div
              className="h-3 w-full bg-repeat"
              style={{ backgroundImage: 'url(/images/solution/divider.png)' }}
            />

            <div className="space-y-4 font-sans text-lg">
              <p className="font-bold">
                Thank you for imagining with us. Now, how do we get to that better future?
              </p>
              <p>
                At <b>vizzuality</b>, we aim to turn vision into reality by working at the
                intersection of digital and sustainable transformation.
              </p>
              <p>
                Here are some projects that will interest you based on your answers. Feel free to
                explore now or save them for later.
              </p>
            </div>

            <div className="w-full space-y-6 overflow-hidden">
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
          </Media>

          <Media lessThan="sm" className="w-full">
            <div className="flex flex-col items-center space-y-8">
              <Link href="/">
                <Button theme="primary-alt" size="xl" onClick={resetToPlay}>
                  Play Again
                </Button>
              </Link>

              <a
                href={pdf_mobile}
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-end space-x-3 hover:bg-black/10"
              >
                <p className="text-base font-semibold"> Save Results</p>
                <Icon icon={DOWNLOAD_SVG} className="h-7 w-7" />
              </a>
            </div>
          </Media>
        </div>
      </div>
      <Media greaterThanOrEqual="sm" className="space-y-10">
        <div className="relative bg-[url('/images/background/solutions-pattern.jpg')]">
          <Background color="bg-transparent" step={5}>
            <div className="grid grid-cols-12 gap-7 pt-28 text-white">
              <div className="col-span-4 col-start-2 space-y-7">
                <p className="max-w-lg font-display text-3xl">
                  Thank you for imagining with us. Now, how do we get to that better future?
                </p>
                <p>
                  At <b>vizzuality</b>, we aim to turn vision into reality by working at the
                  intersection of digital and sustainable transformation.
                </p>
              </div>

              <div className="col-span-4 col-end-10 flex items-end">
                <p>
                  Here are some projects that will interest you based on your answers. Feel free to
                  explore now or save them for later.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-10 pb-28">
              {FORMATED_CARDS.map(({ id, content }) => {
                return <div key={id}>{content}</div>;
              })}
            </div>
          </Background>
        </div>
      </Media>

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
