import React, { useState } from "react";

function ConsentManagement() {
  const [consents, setConsents] = useState([
    { role: "Doctor", granted: true },
    { role: "Pharmacist", granted: false },
    { role: "Diagnostics", granted: true },
  ]);

  const toggleConsent = (index) => {
    const updated = [...consents];
    updated[index].granted = !updated[index].granted;
    setConsents(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative overflow-hidden p-12">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center tracking-wide">
          🔐 Consent Management
        </h1>

        <ul className="space-y-6">
          {consents.map((c, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="text-white text-lg font-semibold">{c.role}</span>

              {/* Toggle switch */}
              <div
                onClick={() => toggleConsent(i)}
                className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  c.granted
                    ? "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/50"
                    : "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50"
                }`}
              >
                <div
                  className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
                    c.granted ? "translate-x-10" : "translate-x-0"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ConsentManagement;