import { useRive } from '@rive-app/react-canvas';

import type { RiveComponentProps } from './types';

const RiveComponent: React.FC<RiveComponentProps> = ({ imageUrl, autoplay, className }) => {
  const { RiveComponent: RiveComp } = useRive({
    src: imageUrl,
    autoplay: autoplay,
  });

  return (
    <div className={className}>
      <RiveComp />
    </div>
  );
};

export default RiveComponent;
