import React from "react";

function AccessLogs() {
  const logs = [
    { user: "Dr. Sharma", action: "Viewed MRI Report", time: "12:30 PM" },
    { user: "Pharmacist", action: "Checked Prescription", time: "01:00 PM" },
  ]; 
  // TODO: fetch from backend

  return (
    <div className="p-4 border rounded-lg shadow mt-4">
      <h2 className="font-bold mb-2">Access Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index} className="text-sm">
            {log.user} - {log.action} @ {log.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccessLogs;
