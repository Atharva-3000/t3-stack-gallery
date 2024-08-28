import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/152ac3b2-d6c0-4890-8563-fa0100e68a77-jy5hs6.png",
  "https://utfs.io/f/6b8eb571-685b-4584-9381-43a88ffbe8ca-dhu0ce.png",
  "https://utfs.io/f/33c13a04-89e3-46c8-9f56-bf11f35a2717-385qpw.png",
  "https://utfs.io/f/cf92f9b5-f3dc-4a6c-bf09-8257e6cd6c29-54u4t9.png",
  "https://utfs.io/f/5ed2d119-1e3a-46d8-8fbf-05adb85eb91e-bl5m91.png",
];


const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
