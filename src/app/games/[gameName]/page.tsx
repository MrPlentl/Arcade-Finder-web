// c:\DEV\Dev_Sites\arcade-locator-ui\src\app\games\[gameName]\page.tsx
import { Game } from '@/types';
import NavigationBar from '@/components/NavigationBar';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Helper to fetch specific game data
async function getGame(slug: string): Promise<Game | undefined> {
  try {
    // In a real app, you might have an endpoint like /api/v1/games/${slug}
    // Here we fetch all and filter to match the existing API pattern
    const res = await fetch('http://localhost:8080/api/v1/gamesTest', {
      cache: 'no-store',
    });

    if (!res.ok) return undefined;

    const games: Game[] = await res.json();
    
    // Decode the slug to handle spaces or special characters
    const decodedSlug = decodeURIComponent(slug);
    
    // Find game by image filename (used as ID here) or title
    return games.find((g) => g.image === decodedSlug || g.title === decodedSlug);
  } catch (error) {
    console.error("Error fetching game:", error);
    return undefined;
  }
}

interface Props {
  params: Promise<{
    gameName: string;
  }>;
}

export default async function GameDetailsPage({ params }: Props) {
  // Await params to ensure compatibility with latest Next.js versions
  const { gameName } = await params;
  const game = await getGame(gameName);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <NavigationBar />
      
      <article className="container mx-auto px-4 mt-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 max-w-4xl mx-auto">
          <div className="relative h-96 w-full bg-slate-100">
            <Image 
              src={`/images/${game.image}`} 
              alt={game.title} 
              fill
              className="object-contain p-8"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-slate-800">{game.title}</h1>
              <span className="text-lg font-mono text-slate-600 bg-slate-100 px-4 py-2 rounded-lg">
                {game.year}
              </span>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
