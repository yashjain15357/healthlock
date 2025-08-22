import React from "react";
import QRScanner from "../Components/QRScanner";

function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative overflow-hidden pt-32 md:pt-40 px-6 md:px-20">
      {/* Background glowing blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

      {/* Content Wrapper with slide-in animation */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12 animate-fadeIn">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-wide drop-shadow-lg">
          👨‍⚕️ Doctor Dashboard
        </h1>

        {/* QR Scanner Panel */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-12 hover:scale-105 hover:shadow-green-500/50 transition-all duration-500">
          <h2 className="text-2xl font-bold text-green-200 mb-6 text-center drop-shadow-md">
            🔍 Patient QR Scanner
          </h2>

          {/* QR Scanner */}
          <div className="p-6 bg-white/20 rounded-2xl border border-white/30 shadow-inner hover:shadow-green-400/50 transition-shadow duration-500">
            <QRScanner />
          </div>

          <p className="text-gray-200 text-sm mt-6 text-center">
            Scan patient QR codes to securely access their health records.
          </p>
        </div>

        {/* Doctor Results Section */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-10 hover:scale-105 transition-all duration-500">
          <h2 className="text-2xl font-bold text-blue-200 mb-6 drop-shadow-md">
            🧾 Patient Results
          </h2>
          <div className="space-y-4 text-white">
            <p><span className="font-semibold">Diagnosis:</span> Viral Infection</p>
            <p><span className="font-semibold">Prescription:</span> Paracetamol 500mg (2x daily), ORS</p>
            <p><span className="font-semibold">Test Results:</span> CBC Report Normal, COVID Negative</p>
          </div>
        </div>

        {/* Doctor Review Section */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-10 hover:scale-105 transition-all duration-500">
          <h2 className="text-2xl font-bold text-yellow-200 mb-6 drop-shadow-md">
            📝 Doctor’s Review
          </h2>
          <div className="space-y-4 text-white">
            <p>
              Patient is recovering well. Recommended to maintain hydration and 
              complete 5 days of rest. No further complications observed.
            </p>
            <p className="italic text-gray-300">— Dr. Sharma, 22 Aug 2025</p>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default DoctorDashboard;
