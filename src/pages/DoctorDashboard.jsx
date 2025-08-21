import React from "react";
import QRScanner from "../Components/QRScanner";

function DoctorDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Doctor Dashboard</h1>
      <QRScanner />
    </div>
  );
}

export default DoctorDashboard;
