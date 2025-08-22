import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

// A React wrapper around Html5QrcodeScanner that cleans up correctly in Vite/React 18.
export default function QRScanner({ onDecode, onError }) {
  const idRef = useRef("qr-reader-" + Math.random().toString(36).slice(2));

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      idRef.current,
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        rememberLastUsedCamera: true,
        // If you want back camera by default on mobile, uncomment:
        // defaultCamera: "environment",
      },
      false
    );

    scanner.render(
      (decodedText) => {
        onDecode?.(decodedText);
        // Stop after first success; remove this if you want continuous scans:
        scanner.clear().catch(() => {});
      },
      (err) => {
        // html5-qrcode spams errors while searching; only forward serious ones
        if (typeof onError === "function") onError(err);
      }
    );

    return () => {
      // ensure camera is released on unmount
      scanner.clear().catch(() => {});
    };
  }, [onDecode, onError]);

  return (
    <div>
      <div id={idRef.current} style={{ width: "100%" }} />
      <p style={{ fontSize: 12, color: "#777", marginTop: 8 }}>
        Tip: if camera doesn’t appear, allow permission or use HTTPS when testing on phone.
      </p>
    </div>
  );
}
