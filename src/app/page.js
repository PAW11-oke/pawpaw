import Artikel from "@/components/landing/Artikel";
import Galeri from "@/components/landing/Galeri";

export default function Home() {
  return (
    <div className="relative h-fit overflow-hidden">
      <Galeri />
      <Artikel />
    </div>
  );
}
