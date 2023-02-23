import { UseSocialMediaShare } from './types';

const TWITTER = 'https://twitter.com/intent/tweet';
// https://twitter.com/intent/tweet?url=http://localhost:3000/solutions/adaptation-encyclopedia&text=Title&via=
const LINKEDIN = 'https://www.linkedin.com/shareArticle';
// https://www.linkedin.com/shareArticle?url=http://localhost:3000/solutions/adaptation-encyclopedia&title=Title
// const INSTA_STORIE =

export const useSocialMediaShare = ({ social, url, caption }: UseSocialMediaShare) => {
  if (social === 'twitter') {
    const link = `${TWITTER}?url=${url}&text=${caption}&via=Vizzuality`;
    return link;
  }
  if (social === 'linkedin') {
    const link = `${LINKEDIN}?url=${url}&title=${caption}`;
    return link;
  }
};
