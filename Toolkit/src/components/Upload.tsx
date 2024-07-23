import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { storage } from "../firebase/configFirebase";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please choose files to upload");
      return;
    }

    for (const file of files) {
      const imageRef = ref(storage, `images/${file.name}`);
      try {
        const snapshot = await uploadBytes(imageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        setUrls((prevUrls) => [...prevUrls, url]);
      } catch (err) {
        console.error(err);
        alert(`Error uploading file ${file.name}. Please try again.`);
      }
    }

    alert("All files uploaded successfully");
  };

  return (
    <div>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload files</Form.Label>
        <Form.Control
          type="file"
          size="lg"
          multiple
          onChange={handleFileChange}
        />
        <Button variant="success" onClick={handleUpload}>
          Upload
        </Button>
      </Form.Group>
      {urls.length > 0 && (
        <div>
          <h5>Uploaded Files:</h5>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {urls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`uploaded file ${index + 1}`}
                width="100"
                height="100"
                style={{ margin: "5px" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
