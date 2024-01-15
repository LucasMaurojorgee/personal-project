import axios from "axios";
import { Character } from "./axios";

type GetCharacters = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

export const getCharacters = async () => {
  const res = await axios.get<GetCharacters>(
    "https://rickandmortyapi.com/api/character"
  );
  return res.data;
};

export const getCharacter = async (id: number) => {
  const res = await axios.get<Character>(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return res.data;
};
