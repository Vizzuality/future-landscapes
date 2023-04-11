import { forwardRef } from 'react';

import Image from 'next/image';

import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/ui/arrow-right.svg?sprite';

interface ProjectCardProps {
  id: string;
  image: string;
  link: string;
  name: string;
  description: JSX.Element;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ id, image, link, name, description }, ref) => {
    return (
      <div ref={ref} key={id} className="pb-2">
        <div className="lg:shadow-solid-card-d ml-6 h-[452px] max-w-[338px] rounded-3xl border-2 p-1 lg:h-[228px] lg:max-w-[400px]">
          <div className="relative h-56 overflow-hidden rounded-3xl object-cover lg:hidden">
            <Image priority src={image} alt="card" fill />
          </div>

          <div className="space-y-2 p-4">
            <h3 className="font-bold">{name}</h3>
            <div className="text-base">{description}</div>
          </div>

          <div className="flex justify-end space-x-3 p-4">
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
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
