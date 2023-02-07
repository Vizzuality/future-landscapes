import React from 'react';

import Icon from 'components/icon';

import HEART_SVG from 'svgs/ui/heart.svg?sprite';

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center py-10 space-y-5 overflow-auto grow text-center font-sans">
      <h1 className="px-10 text-xl font-medium">We&apos;re Vizz</h1>
      <div className="px-10 grow space-y-5">
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
      <Icon icon={HEART_SVG} className="w-12 h-12 text-white" />
    </div>
  );
};

export default AboutContent;
