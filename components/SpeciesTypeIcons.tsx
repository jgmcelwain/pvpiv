import { FC } from 'react';
import { Pokemon } from '../data/pokedex';
import Image from 'next/image';

const SpeciesTypeIcons: FC<{ types: Pokemon['types'] }> = ({ types }) => {
  return (
    <div className='flex -space-x-1' aria-hidden>
      {types.map((type, typeIndex) => (
        <div
          className={`h-[18px] w-[18px] rounded-full overflow-hidden flex justify-center items-center border-[1.5px] border-gray-800 ${
            typeIndex === 0 ? 'z-10' : 'z-0'
          } ${(() => {
            switch (type) {
              case 'bug': {
                return 'bg-lime-500';
              }
              case 'dark': {
                return 'bg-zinc-600';
              }
              case 'dragon': {
                return 'bg-sky-600';
              }
              case 'electric': {
                return 'bg-yellow-300';
              }
              case 'fire': {
                return 'bg-orange-400';
              }
              case 'fairy': {
                return 'bg-fuchsia-400';
              }
              case 'fighting': {
                return 'bg-rose-500';
              }
              case 'flying': {
                return 'bg-indigo-300';
              }
              case 'ghost': {
                return 'bg-indigo-500';
              }
              case 'grass': {
                return 'bg-green-400';
              }
              case 'ground': {
                return 'bg-orange-400';
              }
              case 'ice': {
                return 'bg-emerald-300';
              }
              case 'normal': {
                return 'bg-neutral-400';
              }
              case 'poison': {
                return 'bg-purple-500';
              }
              case 'psychic': {
                return 'bg-rose-400';
              }
              case 'rock': {
                return 'bg-stone-400';
              }
              case 'steel': {
                return 'bg-cyan-600';
              }
              case 'water': {
                return 'bg-blue-400';
              }
            }
          })()}`}
        >
          <Image src={`/types/${type}.svg`} alt={type} width={10} height={10} />
        </div>
      ))}
    </div>
  );
};

export default SpeciesTypeIcons;
