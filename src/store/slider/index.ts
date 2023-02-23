import { atom } from 'jotai';

// Atom to save the direction of slider
export const directionAtom = atom<string>('forward');

export const readWriteDirectionAtom = atom(
  (get) => get(directionAtom),
  (get, set, newDirection) => {
    set(directionAtom, newDirection);
  }
);
