import React, { useState } from 'react';
import axios from 'axios';
import './UploadImg.css';

const UploadImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select an image!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setLoading(true);
    setResult('');

    try {
      const response = await axios.post('http://localhost:5000/api/earn/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.result); // Backend sends result as 'Reusable' or 'Non-Reusable'
    } catch (error) {
      console.error('Error occurred while sending the request:', error);
      setResult('Error occurred while predicting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-img-container">
      <h1>Reusable Cup Detector</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
      {result && <p className="result">Prediction: {result}</p>}
    </div>
  );
};

export default UploadImg;