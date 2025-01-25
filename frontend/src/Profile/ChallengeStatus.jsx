import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import './ChallengeStatus.css';
import { useGetUserDetailsQuery } from '../redux/api/usersApiSlice';

const ChallengeStatus = () => {
  const { userInfo } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [carbonFootprintSaved, setCarbonFootprintSaved] = useState(0);
const{data} = useGetUserDetailsQuery(userInfo?._id)
  useEffect(() => {
    if (!userInfo) {
      console.log('User data not available.');
      return;
    }

    const reusableCupsUsed = data?.reusableCupsUsed ?? 0;

    // Carbon Footprint Calculation
    const carbonFootprintDisposableCup = 0.05; // kg CO2 per disposable cup
    const carbonFootprintReusableCup = 1.5; // kg CO2 for a reusable cup (initial)
    const reusableCupLifespan = 1000; // Number of uses for a reusable cup

    // Calculate carbon footprint per use for a reusable cup
    const carbonPerUseReusableCup = carbonFootprintReusableCup / reusableCupLifespan;

    // Calculate total carbon footprint saved
    const carbonFootprintSaved = (carbonFootprintDisposableCup * reusableCupsUsed) - (carbonPerUseReusableCup * reusableCupsUsed);

    setCarbonFootprintSaved(carbonFootprintSaved);

    const delay = Math.random() * 2000 + 2000; // Random delay between 2-4 seconds
    setTimeout(() => {
      if (reusableCupsUsed >= 20) {
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
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl relative">
        <h2 className="text-4xl font-semibold text-green-900 mb-6">Challenge Status</h2>

        {loading ? (
          <div className="loading-container flex justify-center items-center">
            <div className="loading-spinner"></div>
            <p className="ml-4 text-gray-700">Checking Points...</p>
          </div>
        ) : isSuccess ? (
          <div className="success-container flex justify-center items-center flex-col">
            <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
            <p className="ml-4 text-lg text-green-700 font-semibold mt-4">Challenge Successful! 🎉</p>

            {/* Confetti Animation */}
            <div className="confetti-container">
  {Array.from({ length: 150 }).map((_, index) => (
    <div key={index} className={`confetti-piece ${Math.random() > 0.5 ? 'rotate-45' : ''} animate-fall`}></div>
  ))}
</div>


            {/* Carbon Footprint Saved */}
            <div className="carbon-footprint-saved mt-6 p-4 bg-green-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">You Have Saved Carbon Footprint!</h3>
              <p className="text-lg text-green-600">By using {userInfo.reusableCupsUsed} reusable cups, you've saved <span className="font-bold">{carbonFootprintSaved.toFixed(2)} kg CO2</span> compared to disposable cups!</p>
            </div>

            {/* Voucher Box */}
            <div className="voucher-box animate-pop-up mt-6 p-6 rounded-lg shadow-2xl bg-white text-center relative">
              <img src="/public/voucher.png" alt="Voucher" className="voucher-image mb-4 w-full h-auto rounded-lg" />
              <h3 className="text-xl text-red-600 font-bold mb-2">You've Earned a Free Pizza Voucher!</h3>
              <p className="text-lg text-gray-700 mb-4">Enjoy 2 free pizzas at Domino's 🍕</p>
              <button className="voucher-btn mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
                Claim Voucher
              </button>
            </div>
          </div>
        ) : (
          <div className="failure-container text-center">
            <p className="text-lg text-red-500">Challenge Failed. Try again!</p>
            <p className="text-sm text-gray-500 mt-2">
              Use 20 reusable cups to successfully complete the challenge.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeStatus;
