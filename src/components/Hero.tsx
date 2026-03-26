import { randomInt } from 'crypto';
import Image from 'next/image';

export default function Hero() {
  const heroImgLocation = "/images/hero/";
  const heroImg = `${heroImgLocation}hero-${randomInt(1, 12)}.png`;
  console.log(heroImg);
  return (
    // CHANGE: replaced h-64 with h-[calc(100vh-5rem)]
    // This implies: 100% Viewport Height minus ~5rem for the Navbar
    <div className="relative w-full h-[calc(100vh-5rem)]">
      <Image 
        src={heroImg} 
        alt="Arcade Hero Background" 
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Game Collection
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl drop-shadow-md">
          Explore the golden era of gaming history.
        </p>
      </div>
    </div>
  );
}