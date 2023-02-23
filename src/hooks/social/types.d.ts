export type UseSocialMediaShare = {
  /**
   * Social network
   * */
  social: 'twitter' | 'linkedin' | 'insta-stories' | 'insta-feed';
  /**
   * url of what needs to be shared
   * */
  url: string;
  caption: string;
};
