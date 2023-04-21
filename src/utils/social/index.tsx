import { UseSocialMediaShare } from './types';

const TWITTER = 'https://twitter.com/intent/tweet';

const LINKEDIN = 'https://www.linkedin.com/shareArticle';

export const socialMediaShare = ({ social, url, caption }: UseSocialMediaShare) => {
  if (social === 'twitter') {
    const link = `${TWITTER}?url=${url}&text=${caption}`;
    return link;
  }
  if (social === 'linkedin') {
    const link = `${LINKEDIN}?url=${url}&summary=${caption}`;
    return link;
  }
};
