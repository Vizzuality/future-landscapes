import { atom } from 'jotai';

// Atom to save the step
export const stepAtom = atom<number>(1);

export const readWriteStepAtom = atom(
  (get) => get(stepAtom),
  (get, set, newStep) => {
    set(stepAtom, newStep);
  }
);
