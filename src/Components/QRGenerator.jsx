import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // correct import for v3+

export default function QRGenerator() {
  const [token, setToken] = useState("");

  const generate = () => {
    const t = "TEMP_TOKEN_" + Date.now();
    setToken(t);
  };

  return (
    <div>
      <button
        onClick={generate}
        style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #1677ff", background: "#1677ff", color: "white", cursor: "pointer" }}
      >
        Generate QR
      </button>

      {token && (
        <div style={{ marginTop: 12, textAlign: "center" }}>
          <QRCodeCanvas value={token} size={180} />
          <div style={{ fontSize: 12, color: "#555", marginTop: 8 }}>
            Share this QR with the doctor
          </div>
        </div>
      )}
    </div>
  );
}
