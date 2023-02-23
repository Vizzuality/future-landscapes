import { atom } from 'jotai';

// Atom to save user's solutions
export const solutionsAtom = atom<string>('');

export const readWriteSolutionsAtom = atom(
  (get) => get(solutionsAtom),
  (get, set, newSolutions) => {
    set(solutionsAtom, newSolutions);
  }
);
