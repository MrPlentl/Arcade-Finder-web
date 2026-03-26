// c:\DEV\Dev_Sites\arcade-locator-ui\src\app\games\[gameName]\page.tsx
import { Arcade } from '@/types';
import NavigationBar from '@/components/NavigationBar';
import Image from 'next/image';
import { IMAGE_LOCATION } from '@/config/config'; // Import IMAGE_LOCATION from config

interface Props {
  params: Promise<{
    arcadeName: string;
  }>;
}

export default async function ArcadeDetailsPage({ params }: Props) {
  // Await params to ensure compatibility with latest Next.js versions
  const { arcadeName } = await params;

  // The file system checks were removed because they won't work with remote images.
  // This component now assumes a '.png' extension. A more robust solution
  // would be to have this information available from an API.
  const imagePath = `${IMAGE_LOCATION}/arcades/${arcadeName}.png`;

  return (
    <main className="min-h-screen bg-slate-50">
      <NavigationBar />
      <div 
        className="relative w-full" 
        style={{ maxHeight: '600px', height: 'calc(100vh - 80px)' }}
      >
        <Image
          src={imagePath}
          alt={arcadeName}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </main>
  );
}
