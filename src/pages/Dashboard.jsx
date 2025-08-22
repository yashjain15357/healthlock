import React from "react";
import FileUpload from "../Components/FileUpload";
import QRGenerator from "../Components/QRGenerator";
import AccessLogs from "../Components/AccessLogs";
import HealthHistory from "../Components/HealthHistory"; // ✅ new import

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative overflow-hidden pt-32 md:pt-40 px-6 md:px-20">
      {/* Futuristic glowing background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 space-y-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-wide drop-shadow-lg">
          🩺 Patient Dashboard
        </h1>

        {/* Glassmorphism Panels */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* File Upload */}
          <div className="bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-200 mb-6">
              📂 File Upload
            </h2>
            <FileUpload />
          </div>

          {/* QR Generator */}
          <div className="bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-green-200 mb-6">
              🔐 QR Generator
            </h2>
            <QRGenerator />
          </div>

          {/* Health Record History */}
          <div className="bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-200 mb-6">
              🧾 Health Record History
            </h2>
            <HealthHistory />
          </div>

          {/* Access Logs (span full width) */}
          <div className="bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl p-8 md:col-span-2 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-200 mb-6">
              📜 Access Logs
            </h2>
            <AccessLogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
