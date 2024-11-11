import AddPet from "@/components/landing/AddPet";
import Artikel from "@/components/landing/Artikel";
import Galeri from "@/components/landing/Galeri";

export default function Home() {
  return (
    <div className="relative h-fit overflow-hidden">
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 sm:flex-row sm:p-20 gap-8 font-medium text-2xl bg-[#FFBCC3]/25">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img src="/Cat.png" alt="Cat" className="h-auto max-h-[70vh]" />
        </div>

        <div className="text-center z-10">
          <h1 className="text-[90px] font-bold text-[#F3AAB5] mb-4 leading-tight">
            Welcome to PawPaw!
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
      <section className="p-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#FFBCC3]">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Grooming Schedule", icon: "/icons/Scissors.png" },
            { title: "Health Tracking", icon: "/icons/Medkit.png" },
            { title: "Community Chat", icon: "/icons/Paw.png" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-6 rounded-[25px] drop-shadow-2xl text-center transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="h-16 w-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFBCC3]">
                {feature.title}
              </h3>
              <p className="text-[#FFBCC3]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <Galeri />
      <Artikel />
    </div>
  );
}
