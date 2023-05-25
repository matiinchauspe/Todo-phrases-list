import { atom } from "jotai";

import { Phrase } from "@/types";

// LISTS
export const phrasesAtom = atom<Phrase[]>([]);
export const filteredResultAtom = atom<Phrase[]>([]);

// ADD
export const addPhraseAtom = atom(null, (get, set, phrase: string) => {
  const phraseBuilded = {
    phrase,
    id: Date.now().toString(),
  };
  set(phrasesAtom, [...get(phrasesAtom), phraseBuilded]);
  set(filteredResultAtom, [...get(filteredResultAtom), phraseBuilded]);
});
// REMOVE
export const removePhraseAtom = atom(null, (get, set, id: string) => {
  set(
    phrasesAtom,
    get(phrasesAtom).filter((ph: Phrase) => ph.id !== id)
  );
  set(
    filteredResultAtom,
    get(filteredResultAtom).filter((ph: Phrase) => ph.id !== id)
  );
});

// FILTER
export const searchAtom = atom<string>("");

export const filteredByPhraseAtom = atom(
  (get) => get(phrasesAtom),
  (get, set, phrase: string) => {
    const phrases = get(phrasesAtom);
    const filtered: Phrase[] = phrases.filter((ph: Phrase) =>
      ph.phrase.toLowerCase().includes(phrase.toLowerCase())
    );

    set(filteredResultAtom, filtered);
  }
);
