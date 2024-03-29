import Icon from 'components/icon';
import { Media } from 'components/media-query';

import INSTA_SVG from 'svgs/social/insta.svg?sprite';
import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';
import WEB_SVG from 'svgs/social/web.svg?sprite';
import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

const Solution = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-8 lg:flex-row lg:justify-center lg:space-y-0">
      <Media greaterThanOrEqual="sm" className="flex items-center text-white">
        <p className="text-base">Future Landscapes by:</p>
        <a href="https://www.vizzuality.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-4 w-20" />
        </a>
      </Media>

      <Media lessThan="sm">
        <div className="flex flex-col items-center space-y-6 text-black">
          <div className="flex space-x-11 lg:space-x-6">
            <a href="https://www.vizzuality.com" target="_blank" rel="noopener noreferrer">
              <Icon icon={WEB_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
            </a>
            <a href="https://twitter.com/Vizzuality" target="_blank" rel="noopener noreferrer">
              <Icon icon={TWITTER_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://www.instagram.com/vizzuality"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={INSTA_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/vizzuality"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={LINKEDIN_SVG} className="h-8 w-8 text-black lg:h-6 lg:w-6" />
            </a>
          </div>
          <div className="flex items-center">
            <p>Future Landscapes by:</p>
            <a href="https://www.vizzuality.com" target="_blank" rel="noopener noreferrer">
              <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-7 lg:w-32" />
            </a>
          </div>
        </div>
      </Media>
    </div>
  );
};

export default Solution;
