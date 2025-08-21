import React, { useState } from "react";
import QrReader from "react-qr-reader";

function QRScanner() {
  const [scannedData, setScannedData] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
      alert("Token scanned: " + data);
      // TODO: call backend to fetch record
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow mt-4">
      <h2 className="font-bold mb-2">Scan Patient QR</h2>
      <QrReader
        delay={300}
        onError={(err) => console.error(err)}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {scannedData && <p className="mt-2">Scanned: {scannedData}</p>}
    </div>
  );
}

export default QRScanner;
