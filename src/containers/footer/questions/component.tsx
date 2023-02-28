import Icon from 'components/icon';

import VIZZ_SVG from 'svgs/ui/vizzuality.svg?sprite';

const Questions = () => {
  return (
    <>
      <div className="text-black">
        <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
          <Icon icon={VIZZ_SVG} className="h-4 w-20 lg:h-6 lg:w-28" />
        </a>
      </div>
    </>
  );
};

export default Questions;
