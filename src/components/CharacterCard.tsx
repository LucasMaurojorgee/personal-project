import { useNavigate } from "react-router-dom";
import { Character } from "../services/axios";
import { getColor } from "../utils/getColor";

const CharacterCard = (character: Character) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row m-3 text-white bg-slate-700 rounded-lg h-auto w-[32rem]">
      <div>
        <img className="h-56 w-56 rounded-l-lg" src={character.image} />
      </div>

      <div className="flex flex-col gap-5 px-4 py-2">
        <div>
          <h1
            className="font-bold text-2xl truncate hover:text-green-300 cursor-pointer inline"
            onClick={() => navigate(`/character/${character.id}`)}
          >
            {character.name}
          </h1>
          <div className="flex flex-row items-center">
            <div
              className={`rounded-full w-3 h-3 mr-1 ${getColor(
                character.status
              )}`}
            />
            <p>{`${character.status} - ${character.species}`}</p>
          </div>
        </div>

        <div>
          <p className="text-gray-400">Last known location:</p>
          <p className="inline cursor-pointer hover:text-green-300">
            {character.location.name}
          </p>
        </div>

        <div>
          <p className="text-gray-400">First seen in:</p>
          <p className="inline cursor-pointer hover:text-green-300">
            {character.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
