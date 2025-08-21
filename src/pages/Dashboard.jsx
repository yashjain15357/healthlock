import React from "react";
import FileUpload from "../Components/FileUpload";
import QRGenerator from "../Components/QRGenerator";
import AccessLogs from "../Components/AccessLogs";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Patient Dashboard</h1>
      <FileUpload />
      <QRGenerator />
      <AccessLogs />
    </div>
  );
}

export default Dashboard;

