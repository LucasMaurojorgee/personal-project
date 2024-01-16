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
        <div className="bg-slate-700 p-4 rounded-lg flex gap-4">
          <div className="flex flex-col items-center gap-3">
            <img className="rounded-full h-56 w-56" src={character?.image} />
            <h1 className="font-bold text-2xl inline">{character?.name}</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-gray-400">Last known location:</p>
              <p className="inline cursor-pointer hover:text-green-300">
                {character?.location.name}
              </p>
            </div>
            <div>
              <p className="text-gray-400">First seen in:</p>
              <p className="inline cursor-pointer hover:text-green-300">
                {character?.origin.name}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Gender:</p>
              <p className="inlin">{character?.gender}</p>
            </div>
            <div>
              <p className="inline cursor-pointer hover:text-green-300">
                Episodes witch this character apears
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Character;
