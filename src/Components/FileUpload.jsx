import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("⚠️ Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      setMessage("");

      // Replace with your backend API endpoint
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ File uploaded successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* File input */}
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0 file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white hover:file:bg-blue-700
          cursor-pointer"
      />

      {/* Upload button */}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-lg
          hover:bg-green-600 transition-colors disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {/* Message */}
      {message && <p className="text-sm text-yellow-200">{message}</p>}
    </div>
  );
}

export default FileUpload;
