import React from 'react';

const AddPet = () => {
  return (
    <div className="relative bg-[#FFC0CB] min-h-screen flex flex-col items-center py-12 px-6 overflow-hidden">
      {/* Background Images */}
      <img
        src="/ornament1.png"
        alt="Bone Right"
        className="absolute right-0 top-1/3 w-24 h-24 opacity-50 transform translate-x-1/2"
      />
      <img
        src="/ornament2.png"
        alt="Bone Left"
        className="absolute left-0 top-1/3 w-24 h-24 opacity-50 transform -translate-x-1/2"
      />
      <div
        className="absolute inset-0 bg-cover bg-top opacity-30 z-0"
        style={{
          backgroundImage: 'url(/bgImagePink.png)',
          height: '100%',
          backgroundPosition: 'top',
        }}
      ></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-10 text-center z-10">Add Your Pets</h2>

      {/* Pet Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        
        {/* Card 1: Anjing */}
        <div className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between"
        style={{
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            borderBottomLeftRadius: '100px',
            borderBottomRightRadius: '30px',
          }}>
        <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Anjing</h3>
        <img src="/Anjing.png" alt="Anjing" className="rounded-lg h-[160px] w-[243px] w-full object-cover mb-4" />
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Anjing kesayangan Anda untuk menambahkannya ke dalam daftar.
          </p>
          <button className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl">
            +
          </button>
        </div>

        {/* Card 2: Kelinci */}
        <div className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between">
          <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Kelinci</h3>
          <img src="/Kelinci.png" alt="Kelinci" className="rounded-lg h-[160px] w-[243px] w-full object-cover mb-4" />
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Kelinci kesayangan Anda untuk menambahkannya ke dalam daftar.
          </p>
          <button className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl">
            +
          </button>
        </div>

        {/* Card 3: Kucing */}
        <div className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between"
        style={{
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            borderBottomLeftRadius: '30px',
            borderBottomRightRadius: '100px',
          }}>
        <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Kucing</h3>
        <img src="/Kucing.png" alt="Kucing" className="rounded-lg h-[160px] w-[243px] w-full object-cover mb-4" />
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Kucing kesayangan Anda untuk menambahkannya ke dalam daftar.
          </p>
          <button className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
