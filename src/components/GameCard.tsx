import Image from 'next/image';
import Link from 'next/link'; // 1. Import Link
import { IMAGE_LOCATION } from '@/config/config'; // 2. Import IMAGE_LOCATION from config
import { Game } from '@/types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  console.log(`IMAGE_LOCATION: ${IMAGE_LOCATION}`);
  return (<Link 
      href={`${IMAGE_LOCATION}/games/${game.image}`} 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 flex flex-col cursor-pointer group"
    >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 flex flex-col">
      <div className="relative h-48 w-full bg-slate-100">
        {/* Assumes game.image filenames are in /public folder */}
        <Image 
          src={`/${game.image}`} 
          alt={game.title} 
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-xl font-bold text-slate-800">{game.title}</h2>
          <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
            {game.year}
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {game.description}
        </p>
      </div>
    </div>
    </Link>
  );
}
