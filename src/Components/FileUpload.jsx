import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    alert(`Uploading ${file?.name}`);
    // TODO: connect with backend API
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="font-bold mb-2">Upload Medical Record</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
