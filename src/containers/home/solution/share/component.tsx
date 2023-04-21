import Image from 'next/image';
import { useRouter } from 'next/router';

import Icon from 'components/icon';
import { GAEvent } from 'lib/analytics/ga';
import { socialMediaShare } from 'utils/social';

import LINK_SVG from 'svgs/social/link.svg?sprite';
import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';

import { SOLUTIONS } from '../constants';

const ShareContent = () => {
  const { query, asPath } = useRouter();

  const solution = SOLUTIONS.find((s) => s.slug === query.slug);
  const { social, title, slug } = solution;

  const sendAnalyticsEvent = (params: { method: 'Twitter' | 'Linkedin'; item_id: string }) => {
    GAEvent({
      action: 'share',
      params: {
        ...params,
        content_type: 'url',
      },
    });
  };

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
          href={socialMediaShare({
            social: 'twitter',
            url: `https://future-landscapes.vizzuality.com${asPath}`,
            caption:
              'I took a sustainability mini quiz by @Vizzuality and found out my Future Landscape looks like this! What does yours look like? Find out at http://bit.ly/3xXV3hu #FutureLandscapes #vizzuality',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
          onClick={() => sendAnalyticsEvent({ method: 'Twitter', item_id: slug })}
        >
          <Icon icon={TWITTER_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-7" />
          <p>Twitter</p>
        </a>
        <a
          href={socialMediaShare({
            social: 'linkedin',
            url: `https://future-landscapes.vizzuality.com${asPath}`,
            caption:
              'I took a sustainability mini quiz by @Vizzuality and found out my Future Landscape looks like this! What does yours look like? Find out at http://bit.ly/3xXV3hu #FutureLandscapes #vizzuality',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2"
          onClick={() => sendAnalyticsEvent({ method: 'Linkedin', item_id: slug })}
        >
          <Icon icon={LINKEDIN_SVG} className="h-8 w-8 text-white lg:h-7 lg:w-7" />
          <p>Linkedin</p>
        </a>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard
              .writeText(`http://future-landscapes.vizzuality.com${asPath}`)
              .catch(() => {
                console.error();
              });
          }}
          className="flex flex-col items-center space-y-2 hover:text-grey focus:text-grey"
        >
          <Icon
            icon={LINK_SVG}
            className="h-8 w-8 text-white hover:text-grey focus:text-grey lg:h-7 lg:w-7"
          />
          <p>Copy Link</p>
        </button>
      </div>
    </div>
  );
};

export default ShareContent;
