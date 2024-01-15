import { useQuery } from "@tanstack/react-query";
import { Layout } from "../components/Layout";
import { getCharacters } from "../services/charactersService";
import { Character } from "../services/axios";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const { data: characters } = useQuery({
    queryFn: () => getCharacters(),
    queryKey: ["characters"],
  });

  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center bg-slate-900">
        {characters?.results.map((character: Character) => (
          <CharacterCard {...character} />
        ))}
      </div>
    </Layout>
  );
};

export default Characters;
