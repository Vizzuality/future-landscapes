import Image from 'next/image';
import { useRouter } from 'next/router';

import { useSocialMediaShare } from 'hooks/social';

import Icon from 'components/icon';

import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';

import { SOLUTIONS } from '../constants';

const ShareContent = () => {
  const { query, asPath } = useRouter();

  const solution = SOLUTIONS.find((s) => s.slug === query.slug);
  const { social, title } = solution;

  return (
    <div className="flex grow flex-col items-center space-y-5 overflow-auto py-10 text-center font-sans">
      <div>
        <Image priority src={social.feed} alt={`${title} image`} height={334} width={334} />
      </div>

      <div className="flex justify-center font-sans text-base">
        <p>Share in:</p>
      </div>

      <div className="flex justify-center space-x-10 text-xs">
        <a
          href={useSocialMediaShare({
            social: 'twitter',
            url: `${process.env.NEXT_PUBLIC_BASE_PATH}${asPath}`,
            caption:
              'I took a sustainability mini quiz by @Vizzuality and found out my Future Landscape looks like this! What does yours turn out like? Find out at http://future-landscapes.vizzuality.com/',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={TWITTER_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-7" />
          <p>Twitter</p>
        </a>
        <a
          href={useSocialMediaShare({
            social: 'linkedin',
            url: `${process.env.NEXT_PUBLIC_BASE_PATH}${asPath}`,
            caption:
              'I took a sustainability mini quiz by @Vizzuality and found out my Future Landscape looks like this! What does yours turn out like? Find out at http://future-landscapes.vizzuality.com/',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
        >
          <Icon icon={LINKEDIN_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-7" />
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default ShareContent;
