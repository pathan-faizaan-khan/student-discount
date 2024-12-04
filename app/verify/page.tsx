"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import QrReader to avoid SSR issues
// const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });
const QrReader = dynamic(() => import('react-qr-reader').then(mod => mod.QrReader), { ssr: false });


export default function Home() {
  const [qrCode, setQrCode] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [isScanning, setIsScanning] = useState(true);

  const handleScan = async (data:any) => {
    if (data) {
      setQrCode(data);
      setIsScanning(false);
      setError("");

      try {
        const response = await fetch("/api/verify-qr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ qrCode: data, userId: "123" }), // Replace with actual userId
        });

        const result = await response.json();
        if (result.verified) {
          setIsVerified(true);
        } else {
          setError("QR Code not verified!");
        }
      } catch (err) {
        console.error("Error verifying QR code:", err);
        setError("Verification failed. Try again!");
      }
    }
  };

  const handleError = (err:any) => {
    console.error("QR Reader Error:", err);
    setError("Failed to access camera. Please allow permissions.");
  };

  const toggleScanner = () => {
    setIsScanning(!isScanning);
    setIsVerified(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-cyan-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">QR Code Verifier</h1>
      {!isVerified ? (
        <>
          {isScanning && (
            <div className="w-80 h-80 bg-black rounded-xl overflow-hidden">
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
            </div>
          )}
          <button
            onClick={toggleScanner}
            className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-md shadow hover:shadow-lg"
          >
            {isScanning ? "Stop Scanner" : "Start Scanner"}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4 animate-ping-once">
            <div className="w-12 h-6 border-4 border-white border-t-0 border-l-0 transform rotate-45"></div>
          </div>
          <p className="text-white text-2xl font-semibold">Verified Successfully!</p>
        </div>
      )}
    </div>
  );
}
