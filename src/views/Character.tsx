import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCharacter } from "../services/charactersService";
import { Layout } from "../components/Layout";

const Character = () => {
  const { id } = useParams();

  const { data: character } = useQuery({
    queryKey: ["character", Number(id)],
    queryFn: () => getCharacter(Number(id)),
  });

  return (
    <Layout>
      <div className="bg-slate-900 text-white h-screen w-full flex items-center justify-center">
        <div className="bg-slate-700 p-4 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <img className="rounded-full h-56 w-56" src={character?.image} />
            <h1 className="font-bold text-2xl inline">{character?.name}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Character;
