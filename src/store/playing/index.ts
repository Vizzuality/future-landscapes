import { atom } from 'jotai';

// Atom to save playing status
export const playingAtom = atom<boolean>(false);

export const readWritePlayingAtom = atom(
  (get) => get(playingAtom),
  (get, set, newPlaying) => {
    set(playingAtom, newPlaying);
  }
);
