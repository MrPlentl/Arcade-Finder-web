import Link from 'next/link';
import clientPromise from '@/lib/mongodb';

// Define the shape of our User object
interface User {
  username: string;
  display_name: string;
}

// Helper function to fetch the user
async function getUser(): Promise<User | null> {
  try {
    const client = await clientPromise;
    const db = client.db("test_users"); // Connect to 'test_users' database
    
    // Find the specific user
    const user = await db.collection<User>("users").findOne({ 
      username: "sarah_connor" 
    });

    return user;
  } catch (e) {
    console.error("Failed to fetch user:", e);
    return null;
  }
}

export default async function Navbar() {
  // Fetch data directly in the component
  const user = await getUser();
  const displayName = user?.display_name || "Guest";

  return (
    <nav className="bg-slate-900 text-white p-1 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo & Links */}
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold tracking-wider text-cyan-400">
            RetroLib
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-cyan-300 transition">Home</Link></li>
            <li><Link href="#" className="hover:text-cyan-300 transition">About</Link></li>
          </ul>
        </div>

        {/* Right Side: User Greeting */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-300">
            Hello, <span className="text-white font-bold">{displayName}</span>
          </span>
          {/* Optional: Add a user avatar placeholder */}
          <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-bold">
            {displayName.charAt(0)}
          </div>
        </div>
      </div>
    </nav>
  );
}