import Image from 'next/image';

import { useSocialMediaShare } from 'hooks/social';

import Icon from 'components/icon';

import INSTA_SVG from 'svgs/social/insta.svg?sprite';
import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';

const ShareContent = () => {
  return (
    <div className="flex grow flex-col items-center space-y-5 overflow-auto py-10 text-center font-sans">
      <div>
        <Image priority src={'/images/social/stories/01.png'} alt="card" height={450} width={230} />
      </div>

      <div className="flex justify-center font-sans text-base">
        <p>Share in:</p>
      </div>

      <div className="flex space-x-4 text-xs">
        <a
          href={useSocialMediaShare({
            social: 'twitter',
            url: 'http://localhost:3000/solutions/adaptation-encyclopedia',
            caption: 'This is the caption of the post',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={TWITTER_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-32" />
          <p>Twitter</p>
        </a>
        <a
          href=" https://bit.ly/3Ux6h6A"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={LINKEDIN_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-32" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://bit.ly/3UMCd6D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={INSTA_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-32" />
          <p>Feed</p>
        </a>
        <a
          href="https://bit.ly/3UMCd6D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={INSTA_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-32" />
          <p>Stories</p>
        </a>
      </div>
    </div>
  );
};

export default ShareContent;
