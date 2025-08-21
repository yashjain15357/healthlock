import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRGenerator() {
  const [token, setToken] = useState("");

  const generateQR = () => {
    const newToken = "TEMP_TOKEN_" + Date.now(); // TODO: fetch from backend
    setToken(newToken);
  };

  return (
    <div className="p-4 border rounded-lg shadow mt-4">
      <h2 className="font-bold mb-2">Generate QR for Doctor</h2>
      <button
        onClick={generateQR}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Generate QR
      </button>
      {token && (
        <div className="mt-3">
          <QRCode value={token} size={150} />
          <p className="text-sm mt-2">Share this QR with doctor</p>
        </div>
      )}
    </div>
  );
}

export default QRGenerator;
