import Icon from 'components/icon';

import HEART_SVG from 'svgs/ui/heart.svg?sprite';

const AboutContent = () => {
  return (
    <div className="flex flex grow flex-col items-center space-y-5 overflow-auto py-10 text-center font-sans">
      <h1 className="px-10 text-xl font-medium">We&apos;re Vizz</h1>
      <div className="grow space-y-5 px-10">
        <p>
          We dedicate our work towards a better future for our planet and society. But what does
          that look like?
        </p>
        <p>
          Everyone&apos;s vision of sustainability looks different. We want to honour that. Through
          all these visions, we&apos;ll create a world that supports us all.
        </p>
        <p>
          We&apos;ve made you a short quiz to paint your vision. Have fun, and go with your gut!
        </p>
        <p>We hope you enjoy it.</p>
      </div>
      <Icon icon={HEART_SVG} className="h-12 w-12 text-white" />
    </div>
  );
};

export default AboutContent;
