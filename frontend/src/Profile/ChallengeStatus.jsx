import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import './ChallengeStatus.css';

const ChallengeStatus = () => {
  const { userInfo } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      console.log('User data not available.');
      return;
    }

    // Log the entire userInfo to verify reusableCupsUsed
    console.log('User Info:', userInfo);

    // Default reusableCupsUsed to 0 if undefined
    const reusableCupsUsed = userInfo?.reusableCupsUsed ?? 0;
    console.log(`Reusable cups used: ${reusableCupsUsed}`);
    
    const delay = Math.random() * 2000 + 2000; // Random delay between 2-4 seconds
    setTimeout(() => {
      if (reusableCupsUsed >= 50) {
        setIsSuccess(true);
      }
      setLoading(false);
    }, delay);
  }, [userInfo]);

  if (!userInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <p className="text-lg text-red-500">User data not found. Please log in again.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-teal-200 to-blue-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Checking Challenge Status</h2>

        {loading ? (
          <div className="loading-container flex justify-center items-center">
            <div className="loading-spinner"></div>
            <p className="ml-4 text-gray-700">Checking Points...</p>
          </div>
        ) : isSuccess ? (
          <div className="success-container flex justify-center items-center">
            <FaCheckCircle className="text-5xl text-green-500 animate-bounce" />
            <p className="ml-4 text-lg text-green-700 font-semibold">Challenge Successful! 🎉</p>
          </div>
        ) : (
          <div className="failure-container text-center">
            <p className="text-lg text-red-500">Challenge Failed. Try again!</p>
            <p className="text-sm text-gray-500 mt-2">
              Use 50 reusable cups to successfully complete the challenge.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeStatus;
