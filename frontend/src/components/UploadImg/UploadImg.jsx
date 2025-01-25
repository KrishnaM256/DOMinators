import React, { useEffect, useState } from "react";
import axios from "axios";
import confetti from "canvas-confetti"; // Import the confetti library
import "./UploadImg.css";
import { useGetUserDetailsQuery, useIncrementPointsMutation } from "../../redux/api/usersApiSlice";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";
const UploadImg = () => {
  const {userInfo} = useSelector(state=>state.auth)
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
const [incrementCups] = useIncrementPointsMutation()
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
const {data ,refetch} = useGetUserDetailsQuery(userInfo._id)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);
    setResult("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/earn/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const prediction = response.data.result; // Backend sends result as 'Reusable' or 'Non-Reusable'
      setResult(prediction);

      // Trigger confetti when result is 'Reusable'
      if (prediction === "Reusable") {
        triggerConfetti();
      }
      refetch()
    } catch (error) {
      console.error("Error occurred while sending the request:", error);
      setResult("Error occurred while predicting.");
    } finally {
      setLoading(false);
    }
    refetch()
  };
useEffect(()=>{
if(result=="Reusable"){
  try{
    incrementCups().unwrap()
    toast.success("Points added successfully!")
    refetch()
  }catch(error){
    toast.error("Unable to add points")
  }

}
},[result])
  const triggerConfetti = () => {
    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="upload-img-container">
      <h1>Reusable Cup Detector</h1>
      <h2>Upload Photo of Using Reusable Cup and Earn Points</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
      <div className="result">
        {result && <p className="result">Object Detected: {result}</p>}
        {result === "Reusable" && (
          <p className="congratulations-message">
            Congratulations! You Earned 10 Points!
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadImg;
