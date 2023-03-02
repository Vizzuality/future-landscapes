import Icon from 'components/icon';
import { Media } from 'components/media-query';

import INSTA_SVG from 'svgs/social/insta.svg?sprite';
import LINKEDIN_SVG from 'svgs/social/linkedin.svg?sprite';
import TWITTER_SVG from 'svgs/social/twitter.svg?sprite';
import WEB_SVG from 'svgs/social/web.svg?sprite';
import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

const Solution = () => {
  return (
    <div className="flex w-full flex-col space-y-8 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
      <Media greaterThanOrEqual="sm">
        <a href="https://bit.ly/3G4DJZL" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-6 lg:w-28" />
        </a>
      </Media>
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
      <Media lessThan="sm">
        <div className="flex items-center space-x-1 text-black">
          <p>Future Landscapes by:</p>
          <a href="https://bit.ly/3G4DJZL" target="_blank" rel="noopener noreferrer">
            <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-7 lg:w-32" />
          </a>
        </div>
      </Media>
    </div>
  );
};

export default Solution;
