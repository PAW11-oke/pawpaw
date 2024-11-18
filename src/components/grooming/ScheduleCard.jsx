export default function ScheduleCard({ schedule }) {
    if (!schedule || schedule.length === 0) {
        return (
          <div className="text-center text-gray-400">
            {/* Tampilkan teks jika tidak ada jadwal */}
            Belum ada jadwal Grooming.
          </div>
        );
      }

    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Tampilkan konten jika ada jadwal */}
      {schedule.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
  }
  