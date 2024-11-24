import Link from "next/link";

import AddPet from "@/components/landing/AddPet";
import Artikel from "@/components/landing/Artikel";
import Galeri from "@/components/landing/Galeri";

export default function Home() {
  return (
    <div id="Home" className="relative h-fit overflow-hidden">
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 sm:flex-row sm:p-20 gap-8 font-medium text-2xl bg-white">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img src="/Cat.png" alt="Cat" className="h-auto max-h-[70vh]" />
        </div>

        <div className="text-center z-10">
          <h1 className="text-[90px] font-bold text-[#F3AAB5] mb-4 leading-tight">
            Welcome to <br />
            PawPaw!
          </h1>
          <p className="text-[#F3AAB5] text-[16px] max-w-[600px] mx-auto">
            Hai, Pawrents! Yuk, catat perjalanan si furry friend dengan mudah
            dan abadikan kenangan manis bareng mereka di sini!
          </p>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <img src="/Dog.png" alt="Dog" className="h-auto max-h-[70vh]" />
        </div>
      </section>

      <AddPet />
      <section
        id="Features"
        className="p-12 flex items-center justify-center min-h-screen sah">
        <div>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#FFBCC3]">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grooming Schedule",
                icon: "/icons/Scissors.png",
                href: "/grooming",
                description:
                  "Atur jadwal grooming hewan peliharaan Pawrents dengan mudah dan dapatkan pengingat otomatis agar hewan tetap terawat.",
              },
              {
                title: "Health Tracking",
                icon: "/icons/Medkit.png",
                href: "/health-tracking",
                description:
                  "Pantau kondisi kesehatan hewan peliharaan Pawrents secara menyeluruh, mulai dari vaksinasi hingga catatan medis.",
              },
              {
                title: "Community Chat",
                icon: "/icons/Paw.png",
                href: "/community",
                description:
                  "Terhubung dengan komunitas pecinta hewan, berbagi pengalaman, dan dapatkan tips merawat hewan peliharaan.",
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href} passHref>
                <div
                  key={index}
                  className="bg-[#FFFFFF] p-6 rounded-[25px] flex items-center gap-6 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] transition-transform transform hover:scale-105">
                  {/* Icon di sisi kiri */}
                  <div className="flex-shrink-0">
                    <img
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      className="h-20"
                    />
                  </div>
                  {/* Konten di sisi kanan */}
                  <div>
                    <h3 className="text-[24px] font-bold mb-2 text-[#FFBCC3]">
                      {feature.title}
                    </h3>
                    <p className="text-[#9E9E9E] text-[14px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Galeri />
      <Artikel />
    </div>
  );
}
