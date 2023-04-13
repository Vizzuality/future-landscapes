import { forwardRef } from 'react';

import Image from 'next/image';

import Icon from 'components/icon';
import cn from 'lib/classnames';

import ARROW_RIGHT_SVG from 'svgs/ui/arrow-right.svg?sprite';

interface ProjectCardProps {
  id: string;
  image: string;
  link: string;
  name: string;
  description: JSX.Element;
  keyIndex: number;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ id, image, link, name, description, keyIndex }, ref) => {
    return (
      <div ref={ref} key={id} className="pb-2">
        <div
          className={cn({
            'ml-6 h-[452px] max-w-[338px] space-y-5 rounded-3xl border-2 bg-white p-1 lg:h-[228px] lg:max-w-[400px]':
              true,
            'lg:shadow-solid-card-d': keyIndex === 0,
            'lg:shadow-solid-card-d-blue': keyIndex === 1,
            'lg:shadow-solid-card-d-red': keyIndex === 2,
          })}
        >
          <div className="relative h-56 overflow-hidden rounded-3xl object-cover lg:hidden">
            <Image priority src={image} alt="card" fill />
          </div>

          <div className="space-y-3 pb-3">
            <div className="space-y-2 px-4">
              <h3 className="font-bold">{name}</h3>
              <div className="text-base lg:h-24">{description}</div>
            </div>

            <div className="flex justify-end space-x-3 px-4">
              <a
                href={link}
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-end space-x-3 hover:bg-black/10"
              >
                <p className="text-base font-semibold">Learn More</p>
                <Icon icon={ARROW_RIGHT_SVG} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
