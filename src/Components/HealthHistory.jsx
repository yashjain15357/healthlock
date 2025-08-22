import React from "react";

function HealthHistory() {
  const healthRecords = [
    {
      id: 1,
      date: "2025-02-10",
      doctor: "Dr. Sharma",
      diagnosis: "Fever & Cold",
      prescription: "Paracetamol 500mg, Rest for 3 days"
    },
    {
      id: 2,
      date: "2024-11-15",
      doctor: "Dr. Mehta",
      diagnosis: "Routine Checkup",
      prescription: "Vitamin D, Regular Exercise"
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Health Record History</h2>
      <ul className="space-y-3">
        {healthRecords.map((record) => (
          <li key={record.id} className="p-4 bg-white/20 rounded-xl text-white">
            <p><span className="font-semibold">Date:</span> {record.date}</p>
            <p><span className="font-semibold">Doctor:</span> {record.doctor}</p>
            <p><span className="font-semibold">Diagnosis:</span> {record.diagnosis}</p>
            <p><span className="font-semibold">Prescription:</span> {record.prescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HealthHistory;
