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
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Consent Management</h1>
      <ul>
        {consents.map((c, i) => (
          <li key={i} className="flex justify-between p-2 border mb-2">
            {c.role}
            <button
              className={`px-3 py-1 rounded ${
                c.granted ? "bg-green-600 text-white" : "bg-red-600 text-white"
              }`}
              onClick={() => toggleConsent(i)}
            >
              {c.granted ? "Revoke" : "Grant"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsentManagement;
