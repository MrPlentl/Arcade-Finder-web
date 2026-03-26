import { Game } from '@/types';
import NavigationBar from '@/components/NavigationBar';
// import NavbarDemo from '@/components/navbar/Navbar-demo';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';

// This function runs on the server
async function getGames(): Promise<Game[]> {
  try {
    // We explicitly store cache: 'no-store' if the data changes often, 
    // or rely on default caching behavior.
    const res = await fetch('http://localhost:8080/api/v1/gamesTest', {
      cache: 'no-store', // Ensures we get fresh data on every request
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
}

export default async function Home() {
  const games = await getGames();

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <NavigationBar />
      <Hero />
      
      <section className="container mx-auto px-4 mt-12">
        <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">
          Library
        </h3>
        
        {games.length === 0 ? (
          <div className="text-center p-10 text-slate-500">
            <p>No games found or API is unavailable.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              // Using index as key is fallback; ideally use a unique ID from DB
              <GameCard key={`${game.title}-${index}`} game={game} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
